import * as React from 'react';
import { AppState, ContextState } from 'um-react-core';
export interface AppContainerProps<S extends AppState> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    initialState: ContextState<AppState>;
}
export declare const AppContainer: ({ children, initialState, ...props }: AppContainerProps<AppState>) => JSX.Element;
