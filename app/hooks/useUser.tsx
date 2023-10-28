/* eslint-disable @typescript-eslint/ban-types */

import { useState, useEffect, createContext, useContext } from "react";
import {
	useSessionContext,
	useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { type User } from "@supabase/auth-helpers-nextjs";
import { error as logError } from "loglevel";
import { PromiseStates } from "../resources/constants";
import { type Subscription, type UserDetails } from "@/types";

type UserContextType = {
	accessToken: string | null;
	isLoading: boolean;
	subscription: Subscription | null;
	user: User | null;
	userDetails: UserDetails | null;
};

export const UserContext = createContext<UserContextType | undefined>(
	undefined,
);

// TODO: fix correct typing of UseContextProps when implemented
export type UserContextProps = Record<string, string>;

// TODO: not necessarily a hook. Could be moved to /providers
export const UserContextProvider = (props: UserContextProps) => {
	const {
		session,
		isLoading: isLoadingUser,
		supabaseClient: supabase,
	} = useSessionContext();

	const user = useSupaUser();
	const accessToken = session?.access_token ?? null;

	const [isLoadingData, setIsLoadingData] = useState(false);
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
	const [subscription, setSubscription] = useState<Subscription | null>(null);

	// TODO: move strings to constant file
	/**
   * Retrieves details of a single user from the Supabase "users" table.
   */
	const getUserDetails = () => supabase.from("users").select("*").single();

	/**
   * Retrieves subscription details for an active or trialing user from the Supabase "subscriptions" table.
   */
	const getSubscription = () =>
		supabase
			.from("subscriptions")
			.select("*, prices(*, products(*))")
			.in("status", ["trialing", "active"])
			.single();

	// TODO: move hook to separate file for loading user data useLoadUserData
	useEffect(() => {
		const shouldLoadUserData = user && !isLoadingData && !userDetails && !subscription;
		const shouldDefaultUserData = !user && !isLoadingUser && !isLoadingData;

		if (shouldLoadUserData) {
			setIsLoadingData(true);

			// TODO: abstrat data lodding into it's own function loadUserData
			Promise.allSettled([getUserDetails(), getSubscription()])
				.then(results => {
					const userDetailsPromise = results[0];
					const subscriptionPromise = results[1];

					if (userDetailsPromise.status === PromiseStates.FULFILLED) {
						setUserDetails(userDetailsPromise.value.data as UserDetails);
					}

					if (subscriptionPromise.status === PromiseStates.FULFILLED) {
						setSubscription(subscriptionPromise.value.data as Subscription);
					}
				})
				.catch(error => {
					logError(error);
				})
				.finally(() => {
					setIsLoadingData(false);
				});
		} else if (shouldDefaultUserData) {
			setUserDetails(null);
			setSubscription(null);
		}
	}, [user, isLoadingUser]);

	const userContextValue = {
		accessToken,
		user,
		userDetails,
		isLoading: isLoadingUser || isLoadingData,
		subscription,
	};

	return <UserContext.Provider value={userContextValue} {...props} />;
};

/**
 * A custom React hook for accessing user-related data from a UserContext.
 *
 * @function
 * @returns {UserContextType} The user-related data from the UserContext.
 * @throws {Error} If used outside of a UserContextProvider.
 */
export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserContextProvider");
	}

	return context;
};
