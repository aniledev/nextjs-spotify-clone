/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @todo Remove no unsafe assignment disable with correct typing
 * @body HiHome and BiSearch elements are typed correctly but still triggering the rule. Figure out why and fix.
 */
"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { type IconType } from "react-icons";

type SidebarProps = {
	children: React.ReactNode;
};

type Route = {
	active: boolean;
	href: string;
	icon: IconType;
	label: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname();
	const isPathHome = pathname === "/";

	const routes: Route[] = useMemo(() => [
		{
			active: isPathHome,
			href: "/",
			icon: HiHome,
			label: "Home",
		},
		{
			active: !isPathHome,
			href: "/search",
			icon: BiSearch,
			label: "Search",
		}
	], [pathname]);

	return (
		<div className='flex h-full'>
			<div className='hidden'></div>
		</div>
	);
};
