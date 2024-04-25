import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type LabelProps = {
	children: React.ReactNode;
	className?: string;
} & ComponentProps<'label'>;

export function Label({ children, className, ...props }: LabelProps) {
	return (
		<label
			className={twMerge('text-lg font-semibold text-[#ced9bf]', className)}
			{...props}
		>
			{children}
		</label>
	);
}
