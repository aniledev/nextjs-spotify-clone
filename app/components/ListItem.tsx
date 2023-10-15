import { useRouter } from "next/navigation";
import React from "react";

type ListItemProps = {
	image: string;
	name: string;
	href: string;
};

export const ListItem: React.FC<ListItemProps> = ({
	image,
	name,
	href
}) => {
	const router = useRouter();

	const onClick = () => {
		// Add authentication here
		router.push(href);
	};

	return (
		<div>ListItem</div>
	);
};

