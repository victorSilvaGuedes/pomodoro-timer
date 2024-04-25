import { Table } from '@/components/table';

export default function History() {
	return (
		<main className="flex-1 p-10 flex flex-col">
			<h1 className="text-2xl text-[#ced9bf] font-bold">Meu histórico</h1>
			<div className="flex-1 overflow-auto mt-8">
				<Table />
			</div>
		</main>
	);
}
