"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var React = __importStar(require("react"));
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var um_react_core_1 = require("um-react-core");
exports.AppContainer = function (_a) {
    var children = _a.children, initialState = _a.initialState, props = __rest(_a, ["children", "initialState"]);
    var model = um_react_core_1.useAppModel(initialState);
    var go = function (n) { };
    var goBack = function () { };
    var goForward = function () { };
    var push = function (location) { };
    var replace = function (location) { };
    return (React.createElement("main", __assign({ className: "AppContainer" }, props),
        React.createElement(um_react_core_1.AppContext.Provider, { value: model },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(react_router_1.Route, null, function (routeProps) { return (React.createElement(um_react_core_1.NavContext.Provider, { value: {
                        go: go,
                        goBack: goBack,
                        goForward: goForward,
                        push: push,
                        replace: replace,
                        setState: function () { },
                        state: immutable_1.fromJS({})
                    } }, children)); })))));
};
//# sourceMappingURL=AppContainer.js.map