import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import type { IconType } from "react-icons";

type Route = {
  active: boolean;
  href: string;
  icon: IconType;
  label: string;
};

/**
 * @todo Remove no unsafe assignment disable with correct typing
 * @body HiHome and BiSearch elements are typed correctly but still triggering the rule. Figure out why and fix.
 */
export const createRoutes = (isPathHome: boolean): Route[] => [
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
];
