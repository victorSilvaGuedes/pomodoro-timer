'use client';

import { Button } from '@/components/button';
import { NewCycleForm } from '@/components/form';
import { Stopwatch } from '@/components/stopwatch';
import { CycleContext } from '@/contexts/CycleContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CiPlay1, CiStop1 } from 'react-icons/ci';
import { z } from 'zod';

export default function Home() {
	const { createNewCycle, activeCycle, interruptCurrentCycle } =
		useContext(CycleContext);
	//Form
	const schema = z.object({
		task: z.string().min(1, 'Insira a tarefa!'),
		minutesAmount: z.number().min(1).max(60),
	});

	type formData = z.infer<typeof schema>;

	const newCycleForm = useForm<formData>({
		resolver: zodResolver(schema),
		defaultValues: {
			minutesAmount: 0,
			task: '',
		},
	});

	const { handleSubmit, watch, reset } = newCycleForm;

	function handleCreateNewCycle(data: formData) {
		createNewCycle(data);
		reset();
	}

	const task = watch('task');

	return (
		<form
			onSubmit={handleSubmit(handleCreateNewCycle)}
			action=""
			className="flex flex-col items-center justify-center gap-10 mt-4 flex-1"
		>
			<FormProvider {...newCycleForm}>
				<NewCycleForm />
			</FormProvider>
			<Stopwatch />

			{activeCycle ? (
				<Button
					type="button"
					className="flex items-center justify-center gap-2"
					size="md"
					variant="outlined"
					color="secondary"
					onClick={interruptCurrentCycle}
				>
					<CiStop1 size={24} />
					Parar
				</Button>
			) : (
				<Button
					type="submit"
					className="flex items-center justify-center gap-2"
					size="md"
					variant="outlined"
					disabled={!task}
				>
					<CiPlay1 size={24} />
					Começar
				</Button>
			)}
		</form>
	);
}
