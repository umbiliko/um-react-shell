define(["require", "exports", "tslib", "react", "react-router", "react-router-dom", "um-react-core", "../../../../um-react-core/src/models/useAppModel"], function (require, exports, tslib_1, React, react_router_1, react_router_dom_1, um_react_core_1, useAppModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppContainer = function (_a) {
        var children = _a.children, initialState = _a.initialState, props = tslib_1.__rest(_a, ["children", "initialState"]);
        var model = useAppModel_1.useAppModel(initialState);
        var go = function (n) { };
        var goBack = function () { };
        var goForward = function () { };
        var push = function (location) { };
        var replace = function (location) { };
        return (React.createElement("main", tslib_1.__assign({ className: "AppContainer" }, props),
            React.createElement(um_react_core_1.AppContext.Provider, { value: model },
                React.createElement(react_router_dom_1.BrowserRouter, null,
                    React.createElement(react_router_1.Route, null, function (routeProps) { return (React.createElement(um_react_core_1.NavContext.Provider, { value: {
                            dispatch: model.dispatch,
                            go: go,
                            goBack: goBack,
                            goForward: goForward,
                            push: push,
                            replace: replace,
                            setState: model.setState,
                            state: model.state
                        } }, children)); })))));
    };
});
//# sourceMappingURL=AppContainer.js.map