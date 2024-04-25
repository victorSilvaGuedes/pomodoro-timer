'use client';
import { CycleContext } from '@/contexts/CycleContext';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { useContext } from 'react';
import { Status } from '../status';

export function Table() {
	const { cycles } = useContext(CycleContext);
	const tableHead = ['Tarefa', 'Duração', 'Início', 'Status'];

	return (
		<table className="w-full border-collapse min-w-[600px]">
			<thead>
				<tr>
					{tableHead.map((item) => {
						return (
							<th
								key={item}
								className="bg-[#2c3439] p-4 text-left text-[#ced9bf] text-sm first:rounded-tl-lg first:pl-6 last:rounded-tr-lg last:pr-6"
							>
								{item}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{cycles.map((cycle) => {
					return (
						<tr key={cycle.id}>
							<td className="bg-[#ced9bf] text-[#2c3439] border-t-4 border-orange-900 p-4 text-sm first:pl-6 last:pr-6 first:w-2/4">
								{cycle.task}
							</td>
							<td className="bg-[#ced9bf] text-[#2c3439] border-t-4 border-orange-900 p-4 text-sm first:pl-6 last:pr-6 first:w-2/4">
								{cycle.minutes} minuto(s)
							</td>
							<td className="bg-[#ced9bf] text-[#2c3439] border-t-4 border-orange-900 p-4 text-sm first:pl-6 last:pr-6 first:w-2/4">
								{formatDistanceToNow(new Date(cycle.startDate), {
									addSuffix: true,
									locale: ptBR,
								})}
							</td>
							<td className="bg-[#ced9bf] text-[#2c3439] border-t-4 border-orange-900 p-4 text-sm first:pl-6 last:pr-6 first:w-2/4">
								{cycle.finishedDate && <Status color="green">Concluído</Status>}
								{cycle.interruptedDate && (
									<Status color="red">Interrompido</Status>
								)}
								{!cycle.finishedDate && !cycle.interruptedDate && (
									<Status color="yellow">Em andamento</Status>
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
