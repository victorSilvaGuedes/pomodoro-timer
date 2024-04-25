import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
	base: 'flex items-center justify-center rounded-lg text-md font-normal transition-colors disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			filled: 'bg-inherit',
			transparent: 'bg-transparent border-none',
			outlined: 'bg-transparent border-2 border-transparent',
			underline: 'underline-offset-4 leading-5 hover:underline',
		},
		rounded: {
			sm: 'rounded-sm',
			full: 'rounded-full',
		},
		size: {
			sm: 'w-full max-w-[6.25rem] h-[3rem]',
			md: 'w-60 h-12 max-w-60 max-h-12',
			lg: 'w-[25.6875rem] h-12 max-w-[25.6875rem] max-h-12',
			variable: 'w-fit px-8 h-12 max-h-12',
			fit: 'w-fit px-4 h-12 max-h-12',
		},
		color: {
			primary: 'bg-green-800 text-[#ced9bf]',
			secondary: 'bg-red-700  text-[#ced9bf]',
		},
		inactive: {
			true: 'cursor-not-allowed',
		},
		active: {
			true: 'cursor-default',
		},
	},
	defaultVariants: {
		variant: 'filled',
		size: 'sm',
		color: 'primary',
	},
	compoundVariants: [
		{
			color: 'primary',
			variant: 'filled',
			className: 'hover:opacity-90',
		},
		{
			color: 'secondary',
			variant: 'filled',
			className: 'hover:opacity-90',
		},
		{
			color: 'primary',
			variant: 'outlined',
			className: 'hover:border-[#ced9bf]',
		},
		{
			color: 'secondary',
			variant: 'outlined',
			className: 'hover:border-[#ced9bf]',
		},
		{
			color: 'primary',
			variant: 'outlined',
			inactive: true,
			className: '!border-none opacity-80',
		},
	],
});

export type ButtonProps = ComponentProps<'button'> &
	VariantProps<typeof buttonVariants>;

export function Button({
	className,
	variant,
	rounded,
	size,
	disabled: inactive,
	color,
	active,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariants({
				active,
				className,
				color,
				inactive,
				variant,
				size,
				rounded,
			})}
			{...props}
		>
			{props.children}
		</button>
	);
}
