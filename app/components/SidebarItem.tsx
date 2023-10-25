import Link from "next/link";
import { type IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
	active?: boolean;
	href: string;
	icon: IconType;
	label: string;
};

/**
 * @todo Rename component
 * @body Rename component with more descriptive name
 */
export const SidebarItem: React.FC<SidebarItemProps> = ({
	active,
	href,
	icon: Icon,
	label,
}) => (
	<Link
		href={href}
		className={twMerge(
			`
      flex
      flex-row
      h-auto
      w-full
      items-center
      gap-x-4
      text-md
      font-medium
      cursor-pointer
      hover:text:white
      transition
      text-neutral-400
      py-1
    `,
			active && "text-white",
		)}
	>
		<Icon size={26} />
		<p className="truncate w-full">{label}</p>
	</Link>
);
