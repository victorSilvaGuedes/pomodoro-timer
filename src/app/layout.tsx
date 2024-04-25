import { Header } from '@/components/header';
import { CycleContextProvider } from '@/contexts/CycleContext';
import '@/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tomato Timer',
	description: 'Tomato timer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`bg-orange-950`}>
				<main className="max-w-[74rem] mx-auto my-20 bg-orange-900 p-10 rounded-lg flex flex-col">
					<Header />
					<CycleContextProvider>{children}</CycleContextProvider>
				</main>
			</body>
		</html>
	);
}
