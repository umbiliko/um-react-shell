define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DO_SOMETHING = 'DO_SOMETHING';
    exports.useAppModel = function (initialState) {
        var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
        var reduce = function (action) {
            switch (action.type) {
                case DO_SOMETHING: return state.set('something', action.value);
            }
            return state;
        };
        var dispatch = function (action) { return setState(reduce(action)); };
        var doSomething = function () { return dispatch({ type: DO_SOMETHING, value: 'hello' }); };
        react_1.useEffect(function () {
        }, []);
        return {
            dispatch: dispatch,
            doSomething: doSomething,
            setState: setState,
            state: state
        };
    };
});
//# sourceMappingURL=useAppModel.js.map