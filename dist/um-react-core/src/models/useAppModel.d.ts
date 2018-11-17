/// <reference types="react" />
import { Map } from 'immutable';
export interface ShellState extends FlatObject {
}
export declare const useAppModel: <S extends ShellState>(initialState: Map<keyof S, string | number | boolean | symbol | Date | null>) => {
    dispatch: (action: {
        type: "DO_SOMETHING";
        value: string;
    }) => void;
    doSomething: () => void;
    setState: import("../../../um-react-shell/node_modules/@types/react").Dispatch<import("../../../um-react-shell/node_modules/@types/react").SetStateAction<Map<keyof S, string | number | boolean | symbol | Date | null>>>;
    state: Map<keyof S, string | number | boolean | symbol | Date | null>;
};
