import { CycleContext } from '@/contexts/CycleContext';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../input';
import { Label } from '../label';
import { Span } from '../span';

export function NewCycleForm() {
	const { activeCycle } = useContext(CycleContext);
	const { register } = useFormContext();

	return (
		<div className="flex-1 flex items-center justify-center gap-2 flex-wrap">
			<Label htmlFor="task">Vou trabalhar em:</Label>

			<Input
				list="taskSuggestions"
				placeholder="Qual projeto você trabalhará?"
				type="text"
				id="task"
				disabled={!!activeCycle}
				className="w-72"
				{...register('task')}
			/>

			<Label htmlFor="minutesAmount">durante</Label>
			<Input
				max={60}
				min={1}
				step={5}
				disabled={!!activeCycle}
				placeholder="00"
				type="number"
				id="minutesAmount"
				className="w-16"
				{...register('minutesAmount', { valueAsNumber: true })}
			/>

			<Span className="font-bold">minutos.</Span>
		</div>
	);
}
