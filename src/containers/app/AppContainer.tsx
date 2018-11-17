import { fromJS } from "immutable";
import * as React from 'react';
import { Route, RouterProps } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext, AppModel, AppState, ContextState, NavContext, NavState, useAppModel } from 'um-react-core';
// import { ShellAction, ShellState } from '../../models';

export interface AppContainerProps<S extends AppState>
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    initialState: ContextState<AppState>;
}

export const AppContainer = ({ children, initialState, ...props }: AppContainerProps<AppState>) => {

    const model: AppModel = useAppModel(initialState);

    const go = (n: number): void => {};
    const goBack = (): void => {};
    const goForward = (): void => {};
    // const push = (path: string, state?: NavState): void => {};
    const push = (location: Partial<NavState>): void => {};
    // const replace = (path: string, state?: NavState): void => {};
    const replace = (location: Partial<NavState>): void => {};

    return (
        <main className="AppContainer" {...props}>
            <AppContext.Provider value={model}>
                <Router>
                    <Route>
                        {(routeProps: RouterProps) => (
                            <NavContext.Provider value={{
                                // dispatch: model.dispatch,
                                go,
                                goBack,
                                goForward,
                                push,
                                replace,
                                setState: () => { }, // model.setState,
                                state: fromJS({}) // => {} // model.state
                            }}>
                                {children}
                            </NavContext.Provider>
                        )}
                    </Route>
                </Router>
            </AppContext.Provider>
        </main>
    );
};
