import { Map } from 'immutable';
import * as React from 'react';
import { ShellState } from '../../../../um-react-core/src/models/useAppModel';
export interface AppContainerProps<S extends ShellState> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    initialState: Map<keyof S, ValueType | null>;
}
export declare const AppContainer: <S extends ShellState>({ children, initialState, ...props }: AppContainerProps<S>) => JSX.Element;
