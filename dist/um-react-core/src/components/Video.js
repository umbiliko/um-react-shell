define(["require", "exports", "tslib", "react", "../effects/createResource"], function (require, exports, tslib_1, React, createResource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VideoResource = createResource_1.createResource(function (src) {
        return new Promise(function (resolve, reject) {
            var video = document.createElement('video');
            video.src = src;
            video.oncanplay = function () {
                resolve(video);
            };
            video.onerror = reject;
        });
    });
    exports.Video = function (props) {
        exports.VideoResource.read(props.src);
        return React.createElement("video", tslib_1.__assign({}, props));
    };
});
//# sourceMappingURL=Video.js.map