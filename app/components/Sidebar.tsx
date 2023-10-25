/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @todo Remove no unsafe assignment disable with correct typing
 * @body HiHome and BiSearch elements are typed correctly but still triggering the rule. Figure out why and fix.
 */
"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { type IconType } from "react-icons";
// < ---- COMPONENTS ---- >
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

  /**
   * @todo Black box business logic for routes
   * @body There's no need for routes to exist here. Routes can still be memoized and moved to separate file.
   */
  const routes: Route[] = useMemo(
    () => [
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
      },
    ],
    [pathname],
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
            {routes.map((item) => (
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
