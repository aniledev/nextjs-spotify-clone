/**
 * @todo Remove no unsafe assignment disable with correct typing
 * @body HiHome and BiSearch elements are typed correctly but still triggering the rule. Figure out why and fix.
 */
"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { type IconType } from "react-icons";
// < ---- COMPONENTS ---- >
import { createRoutes } from "../routes";
import { Box } from "./Box";
import { Library } from "./Library";
import { SidebarItem } from "./SidebarItem";

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

  const memoizedRoutes: Route[] = useMemo(
    () =>
      createRoutes(isPathHome).map((route) => ({
        ...route,
        active: route.href === pathname,
      })),
    [pathname, isPathHome],
  );

  /**
   * @todo REFACTOR: Remove business logic from rendering logic.
   * @body Separation of concerns of rendering logic and business logic.
   */

  /**
   * @todo REFACTOR: Break into components
   * @body Parent `div` of `SidebarItem` can be abstracted into its own component.
   */
  return (
    <div className="flex h-full">
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
            {memoizedRoutes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};
