import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const spanVariants = tv({
	base: 'flex items-center justify-center',
	variants: {
		textSize: {
			bigger: 'text-9xl',
			lg: 'text-lg',
		},
		color: {
			primary: 'text-[#ced9bf]',
			secondary: 'text-[#1d7948]',
		},
	},
	defaultVariants: {
		textSize: 'lg',
		color: 'primary',
	},
});

export type SpanProps = ComponentProps<'span'> &
	VariantProps<typeof spanVariants>;

export function Span({ className, color, textSize, ...props }: SpanProps) {
	return (
		<span
			className={spanVariants({ className, color, textSize })}
			{...props}
		>
			{props.children}
		</span>
	);
}
