define(["require", "exports", "tslib", "react", "../effects/createResource"], function (require, exports, tslib_1, React, createResource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StylesheetResource = createResource_1.createResource(load, function (_a) {
        var href = _a.href, media = _a.media;
        return href + "." + media;
    });
    function load(_a) {
        var href = _a.href, _b = _a.media, media = _b === void 0 ? 'all' : _b;
        return new Promise(function (resolve, reject) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.media = media;
            link.onload = resolve;
            link.onerror = reject;
            document.body.appendChild(link);
        });
    }
    exports.Stylesheet = function (props) {
        exports.StylesheetResource.read(props);
        return React.createElement("link", tslib_1.__assign({}, props));
    };
    function useStylesheet(props) {
        return exports.StylesheetResource.read(props);
    }
    exports.useStylesheet = useStylesheet;
});
//# sourceMappingURL=Stylesheet.js.map