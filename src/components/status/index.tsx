import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const spanVariants = tv({
	base: 'flex items-center gap-2 before:content-[""] before:size-2 before:rounded-full before:bg-green-600',
	variants: {
		color: {
			green: 'before:bg-green-600',
			yellow: 'before:bg-yellow-600',
			red: 'before:bg-red-600',
		},
	},
});

type StatusProps = {
	className?: string;
	children: React.ReactNode;
} & VariantProps<typeof spanVariants>;

export function Status({ color, className, ...props }: StatusProps) {
	return (
		<span
			className={spanVariants({ className, color })}
			{...props}
		>
			{props.children}
		</span>
	);
}
