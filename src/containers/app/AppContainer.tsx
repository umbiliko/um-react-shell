import { Map } from 'immutable';
import * as React from 'react';
import { Route, RouterProps } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext, NavContext } from 'um-react-core';
import { ShellState, useAppModel } from '../../models/useAppModel';

export interface AppContainerProps<S extends ShellState>
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    initialState: Map<keyof S, ValueType | null>;
}

export const AppContainer = <S extends ShellState>({ children, initialState, ...props }: AppContainerProps<S>) => {

    const model = useAppModel<S>(initialState);

    return (
        <main className="AppContainer" {...props}>
            <AppContext.Provider value={model.state}>
                <Router>
                    <Route>
                        {(routeProps: RouterProps) => (
                            <NavContext.Provider value={routeProps}>
                                {children}
                            </NavContext.Provider>
                        )}
                    </Route>
                </Router>
            </AppContext.Provider>
        </main>
    );
};
