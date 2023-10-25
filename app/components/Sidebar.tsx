"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
// < ---- COMPONENTS ---- >
import { createRoutes } from "../routes";
import { Box } from "./Box";
import { Library } from "./Library";
import { SidebarItem } from "./SidebarItem";

/**
 * @todo Separate typing from components
 * @body When refactoring, separate types into separate files to ensure that the code is as readable as possible.
 */
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

	const memoizedRoutes: Route[] = useMemo(() => createRoutes(isPathHome).map(route => ({
		...route,
		active: route.href === pathname,
	})), [pathname]);

	return (<div className="flex h-full">
		<div
			className="
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300px]
        p-2
      "
		>
			<Box>
				<div
					className="
            flex
            flex-col
            gap-y-4
            px-5
            py-4
          "
				>
					{memoizedRoutes.map(item => (
						<SidebarItem key={item.label} {...item} />
					))}
				</div>
			</Box>
			<Box className="overflow-y-auto h-full">
				<Library />
			</Box>
		</div>
		<main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
	</div>);
};
