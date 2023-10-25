"use client";

import { Database } from "../../types_db";

type SupabaseProviderProps = {
	children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
	children
}) => (
	<div>SupabaseProvider</div>
);

export default SupabaseProvider;
