'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiTomato } from 'react-icons/gi';
import { LuScrollText, LuTimer } from 'react-icons/lu';

export function Header() {
	const pathName = usePathname();

	const nav = [
		{
			title: 'Timer',
			href: '/',
			icon: LuTimer,
		},
		{
			title: 'Histórico',
			href: '/history',
			icon: LuScrollText,
		},
	];
	return (
		<header>
			<nav className="flex items-center justify-between border-t-[3px] border-b-[3px] border-transparent max-md:flex-col">
				<GiTomato
					size={48}
					color="#1d7948"
				/>
				<h1 className="font-bold text-4xl text-[#fdda7d]">Tomato Timer</h1>

				<div className="flex gap-4">
					{nav.map((navIcon, index) => {
						return (
							<Link
								key={index}
								className={`border-t-[3px] border-b-[3px] border-transparent hover:border-b-[#fdda7d] p-1.5 transition duration-100 hover:scale-105 hover:mix-blend-hard-light ${
									pathName == navIcon.href
										? 'mix-blend-hard-light border-b-[#fdda7d]'
										: ''
								}`}
								href={navIcon.href}
							>
								<navIcon.icon
									size={48}
									color="#fdda7d"
								/>
							</Link>
						);
					})}
				</div>
			</nav>
		</header>
	);
}
