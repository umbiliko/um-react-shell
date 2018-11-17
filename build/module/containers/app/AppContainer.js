import { fromJS } from "immutable";
import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext, NavContext, useAppModel } from 'um-react-core';
export const AppContainer = ({ children, initialState, ...props }) => {
    const model = useAppModel(initialState);
    const go = (n) => { };
    const goBack = () => { };
    const goForward = () => { };
    const push = (location) => { };
    const replace = (location) => { };
    return (React.createElement("main", Object.assign({ className: "AppContainer" }, props),
        React.createElement(AppContext.Provider, { value: model },
            React.createElement(Router, null,
                React.createElement(Route, null, (routeProps) => (React.createElement(NavContext.Provider, { value: {
                        go,
                        goBack,
                        goForward,
                        push,
                        replace,
                        setState: () => { },
                        state: fromJS({})
                    } }, children)))))));
};
//# sourceMappingURL=AppContainer.js.map