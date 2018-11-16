import { Map } from 'immutable';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const DO_SOMETHING = 'DO_SOMETHING';

export interface ShellState extends FlatObject {
}

interface AppActionTypes {
    DO_SOMETHING: {
        type: typeof DO_SOMETHING;
        value: string;
    }
}

type AppActionType = AppActionTypes[keyof  AppActionTypes];

export interface AppModel<S extends ShellState> {
    dispatch: Dispatch<SetStateAction<S>>;
    doSomething: () => void;
    setState: SetStateAction<S>;
    state: Map<keyof S, ValueType | null>;
}

export const useAppModel = <S extends ShellState>(initialState: Map<keyof S, ValueType | null>) => {

    const [state, setState] = useState<Map<keyof S, ValueType | null>>(initialState);

    const reduce = (action: AppActionType): Map<keyof S, ValueType | null> => {
        switch (action.type) {
            case DO_SOMETHING: return state.set('something', action.value);
        }
        return state;
    };

    const dispatch = (action: AppActionType) => setState(reduce(action));

    const doSomething = () => dispatch({ type: DO_SOMETHING, value: 'hello' });

    useEffect(
        () => {

        },
        []);

    return {
        dispatch,
        doSomething,
        setState,
        state
    };
};
