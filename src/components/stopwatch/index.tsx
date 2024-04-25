import { CycleContext } from '@/contexts/CycleContext';
import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect } from 'react';
import { Span } from '../span';

export function Stopwatch() {
	const {
		activeCycle,
		markCurrentCycleAsFinished,
		setSecondsPassed,
		amountSecondsPassed,
	} = useContext(CycleContext);

	const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0;
	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
	const minutesAmount = Math.floor(currentSeconds / 60);
	const secondsAmount = currentSeconds % 60;
	const minutes = String(minutesAmount).padStart(2, '0');
	const seconds = String(secondsAmount).padStart(2, '0');

	useEffect(() => {
		if (activeCycle)
			document.title = `${activeCycle.task} | ${minutes}:${seconds}`;
	}, [minutes, seconds, activeCycle]);

	useEffect(() => {
		let interval: ReturnType<typeof setTimeout>;
		if (activeCycle) {
			interval = setInterval(() => {
				const secondsDifference = differenceInSeconds(
					new Date(),
					new Date(activeCycle.startDate)
				);

				if (secondsDifference >= totalSeconds) {
					markCurrentCycleAsFinished();
					setSecondsPassed(totalSeconds);
					clearInterval(interval);
				} else {
					setSecondsPassed(secondsDifference);
				}
			}, 1000);
		}
		return () => {
			clearInterval(interval);
		};
	}, [activeCycle, totalSeconds, markCurrentCycleAsFinished]);
	return (
		<div className="flex items-center justify-center gap-4">
			<Span
				className="bg-[#2c3439] px-4 py-8 rounded-lg !font-robotoMono"
				textSize="bigger"
			>
				{minutes[0]}
			</Span>
			<Span
				className="bg-[#2c3439] px-4 py-8 rounded-lg !font-robotoMono"
				textSize="bigger"
			>
				{minutes[1]}
			</Span>
			<Span
				className="w-16 overflow-hidden !font-robotoMono"
				textSize="bigger"
				color="secondary"
			>
				:
			</Span>
			<Span
				className="bg-[#2c3439] px-4 py-8 rounded-lg !font-robotoMono"
				textSize="bigger"
			>
				{seconds[0]}
			</Span>
			<Span
				className="bg-[#2c3439] px-4 py-8 rounded-lg !font-robotoMono"
				textSize="bigger"
			>
				{seconds[1]}
			</Span>
		</div>
	);
}
