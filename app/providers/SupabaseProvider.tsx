"use client";

import { useMemo } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { type Database } from "@/types_db";

type SupabaseProviderProps = {
	children: React.ReactNode;
};

export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
	children,
}) => {
	const supabaseClient = useMemo(
		() => createClientComponentClient<Database>(),
		[],
	);

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			{children}
		</SessionContextProvider>
	);
};
