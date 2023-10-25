/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

// TODO: fix any assignment esline issues and remove diabling lines
import { useState, useEffect, createContext, useContext } from "react";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { type User } from "@supabase/auth-helpers-nextjs";
import { type Subscription, type UserDetails } from "@/types";

type UserContextType = {
  accessToken: string | undefined;
  loading: boolean;
  subscription: Subscription | undefined;
  user: User | undefined;
  userDetails: UserDetails | undefined;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export type UserContextProps = Record<string, any>;

// TODO: not necessarily a hook. Could be moved to /providers
export const UserContextProvider = (props: UserContextProps) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? undefined;

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>(
    undefined,
  );
  const [subscription, setSubscription] = useState<Subscription | undefined>(
    undefined,
  );

  const getUserDetails = () => supabase.from("users").select("*").single();

  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("*, prices(*, products(*))")
      .in("status", ["trialing", "active"])
      .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsLoadingData(true);

      Promise.allSettled([getUserDetails(), getSubscription()])
        .then((results) => {
          const userDetailsPromise = results[0];
          const subscriptionPromise = results[1];

          // TODO: add status to constant map/object
          if (userDetailsPromise.status === "fulfilled") {
            setUserDetails(userDetailsPromise.value.data as UserDetails);
          }

          if (subscriptionPromise.status === "fulfilled") {
            setSubscription(subscriptionPromise.value.data as Subscription);
          }

          setIsLoadingData(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(undefined);
      setSubscription(undefined);
    }
  }, [user, isLoadingUser]);

  const userContextValue = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };

  return <UserContextProvider value={userContextValue} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }

  return context;
};
