import { twMerge } from "tailwind-merge";

type BoxProps = {
	children: React.ReactNode;
	className?: string;
};

export const Box: React.FC<BoxProps> = ({
	children,
	className
}) => (
	<div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
		{children}
	</div>);

