import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	className,
	children,
	disabled,
	type,
	...props
}, ref) => (
	<button
		type={type}
		className={twMerge(`
      w-full
      rounded-full
      bg-green-500
      border-transparent
      px-3
      py-3
      disabled-opacity-50
      cursor:cursor-not-allowed
      text-black
      font-bold
      hover:opacity-75
      transition
    `,
		className
		)}
		ref={ref}
		disabled={disabled}
		{...props}
	>
		{children}
	</button>
));

Button.displayName = "Button";
