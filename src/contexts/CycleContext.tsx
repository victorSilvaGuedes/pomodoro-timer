'use client';

import {
	createNewCycleAction,
	interruptCurrentCycleAction,
	markCurrentCycleAsFinishedAction,
} from '@/reducers/cycles/actions';
import { Cycle, cycleReducer } from '@/reducers/cycles/reducer';
import { differenceInSeconds } from 'date-fns';
import {
	ReactNode,
	createContext,
	useEffect,
	useReducer,
	useState,
} from 'react';

interface CreateCycleData {
	task: string;
	minutesAmount: number;
}

interface CycleContextType {
	cycles: Cycle[];
	activeCycle: Cycle | undefined;
	activeCycleId: string | null;
	amountSecondsPassed: number;
	markCurrentCycleAsFinished: () => void;
	setSecondsPassed: (seconds: number) => void;
	createNewCycle: (data: CreateCycleData) => void;
	interruptCurrentCycle: () => void;
}
export const CycleContext = createContext({} as CycleContextType);

interface CycleContextProviderProps {
	children: ReactNode;
}
export function CycleContextProvider({ children }: CycleContextProviderProps) {
	const [cyclesState, dispatch] = useReducer(
		cycleReducer,
		{
			cycles: [],
			activeCycleId: null,
		},
		(initialState) => {
			const storedStateAsJSON = localStorage.getItem(
				'@TomatoTimer:cyclesState-1.0.0'
			);

			if (storedStateAsJSON) return JSON.parse(storedStateAsJSON);

			return initialState;
		}
	);
	const { cycles, activeCycleId } = cyclesState;

	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

	const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
		if (activeCycle)
			return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
		return 0;
	});

	useEffect(() => {
		const stateJSON = JSON.stringify(cyclesState);
		localStorage.setItem('@TomatoTimer:cyclesState-1.0.0', stateJSON);
	}, [cyclesState]);

	function setSecondsPassed(seconds: number) {
		setAmountSecondsPassed(seconds);
	}

	function createNewCycle(data: CreateCycleData) {
		const newCycle: Cycle = {
			id: String(new Date().getTime()),
			task: data.task,
			minutes: data.minutesAmount,
			startDate: new Date(),
		};

		dispatch(createNewCycleAction(newCycle));
		setAmountSecondsPassed(0);
	}

	function interruptCurrentCycle() {
		dispatch(interruptCurrentCycleAction());
	}

	function markCurrentCycleAsFinished() {
		dispatch(markCurrentCycleAsFinishedAction());
	}

	return (
		<CycleContext.Provider
			value={{
				cycles,
				activeCycle,
				activeCycleId,
				amountSecondsPassed,
				markCurrentCycleAsFinished,
				setSecondsPassed,
				createNewCycle,
				interruptCurrentCycle,
			}}
		>
			{children}
		</CycleContext.Provider>
	);
}
