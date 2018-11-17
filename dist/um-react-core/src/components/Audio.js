define(["require", "exports", "tslib", "react", "../effects/createResource"], function (require, exports, tslib_1, React, createResource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AudioResource = createResource_1.createResource(function (src) {
        return new Promise(function (resolve, reject) {
            var audio = document.createElement('audio');
            audio.src = src;
            audio.onloadeddata = function () { return resolve(audio); };
            audio.onerror = reject;
            document.body.append(audio);
        });
    });
    exports.Audio = function (props) {
        exports.AudioResource.read(props.src);
        return React.createElement("audio", tslib_1.__assign({}, props));
    };
});
//# sourceMappingURL=Audio.js.map