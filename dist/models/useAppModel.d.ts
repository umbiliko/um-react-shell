import { Map } from 'immutable';
import { Dispatch, SetStateAction } from 'react';
export interface ShellState extends FlatObject {
}
export interface AppModel<S extends ShellState> {
    dispatch: Dispatch<SetStateAction<S>>;
    doSomething: () => void;
    setState: SetStateAction<S>;
    state: Map<keyof S, ValueType | null>;
}
export declare const useAppModel: <S extends ShellState>(initialState: Map<keyof S, string | number | boolean | symbol | Date | null>) => {
    dispatch: (action: {
        type: "DO_SOMETHING";
        value: string;
    }) => void;
    doSomething: () => void;
    setState: Dispatch<SetStateAction<Map<keyof S, string | number | boolean | symbol | Date | null>>>;
    state: Map<keyof S, string | number | boolean | symbol | Date | null>;
};
