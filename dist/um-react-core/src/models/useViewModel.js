define(["require", "exports", "react", "../contexts"], function (require, exports, react_1, contexts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useViewModel = function () {
        if (!react_1.useContext) {
            throw new Error('React >= 16.3 required');
        }
        return react_1.useContext(contexts_1.ViewContext);
    };
});
//# sourceMappingURL=useViewModel.js.map