import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, id, className, ...props }, ref) => {
		return (
			<input
				ref={ref}
				autoComplete="off"
				className={twMerge(
					'text-center bg-transparent focus:outline-none focus:border-[#1d7948] h-10 border-0 border-b-2 border-[#2c3439] placeholder-[#fdda7d] text-[#fdda7d] font-bold text-lg px-2',
					className
				)}
				type={type}
				id={id}
				{...props}
			/>
		);
	}
);
