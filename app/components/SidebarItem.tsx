import React from "react";

type SidebarItemProps = {
	children: React.ReactNode;
	className?: string;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
	children,
	className
}) => (
	<div>SidebarItem</div>
);

