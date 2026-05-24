let $rt = loadRuntime();

// 音频适配
let audioEngine;
class AdaptAudioElement extends HTMLElement {
    constructor(url) {
        super();

        if (typeof audioEngine === "undefined") {
            audioEngine = loadRuntime().AudioEngine;
        }
        if (typeof url === "string" && url.startsWith("file://")) {
            url = url.substr("file://".length);
        }

        this._startTime = 0;
        this._volume = 1.0;
        this._src = url;
        this._audioId = undefined;
        this._isLoop = false;
        this._isAutoplay = false;
        this._PLAYING = 1;
        this._PAUSE = 2;
    }

    // HTML Audio Methods

    addTextTrack() {
        console.warn("Audio.addTextTrack is not implemented.");
    }

    load() {
        // console.warn("Audio.load is not implemented.");
        if (this._src === "") {
            console.error("Audio load: please define src before load");
            return;
        }
        let that = this;
        that.dispatchEvent({ type: "loadstart" });
        audioEngine.preload(this._src, function () {
            that.dispatchEvent({ type: "loadedmetadata" });
            that.dispatchEvent({ type: "loadeddata" });
            that.dispatchEvent({ type: "canplay" });
            that.dispatchEvent({ type: "canplaythrough" });
        });
    }

    canPlayType(mediaType = "") {
        if (typeof mediaType !== "string") {
            return "";
        }
        if (mediaType.indexOf("audio/mpeg") > -1 || mediaType.indexOf("audio/mp4")) {
            return "probably";
        }
        return "";
    }

    play() {
        let that = this;
        if (this._src === "") {
            this.dispatchEvent({ type: "emptied" });
            console.error("Audio play: please define src before play");
            return;
        }

        if (this._audioId !== undefined && audioEngine.getState(this._audioId) === this._PAUSE) {
            audioEngine.resume(this._audioId);

            this.dispatchEvent({ type: "play" });
            this.dispatchEvent({ type: "playing" });
        } else {
            this._audioId = audioEngine.play(this._src, this._isLoop, this._volume);

            this.dispatchEvent({ type: "play" });
            let currentAudioId = this._audioId;
            audioEngine.setFinishCallback(currentAudioId, function () {
                that.dispatchEvent({ type: "ended" });
            });
            if (typeof audioEngine.setErrorCallback !== "undefined") {
                audioEngine.setErrorCallback(currentAudioId, function () {
                    that.dispatchEvent({ type: "error" });
                });
            }
            if (typeof audioEngine.setWaitingCallback !== "undefined") {
                audioEngine.setWaitingCallback(currentAudioId, function () {
                    that.dispatchEvent({ type: "waiting" });
                });
            }
        }

    }

    pause() {
        if (this._audioId !== undefined) {
            if (audioEngine.getState(this._audioId) !== this._PAUSE) {
                audioEngine.pause(this._audioId);
                this.dispatchEvent({ type: "pause" });
            } else {
                console.warn("Audio pause: music has been paused.");
            }
        } else {
            console.warn("Audio pause: no music is playing.");
        }
    }

    // HTML Audio Properties

    get currentTime() {
        let ret = 0;
        if (this._audioId !== undefined) {
            ret = audioEngine.getCurrentTime(this._audioId);
        }
        return ret.toFixed(6);
    }
    set currentTime(value) {
        if (this._audioId !== undefined) {
            // this.dispatchEvent({ type: "seeking" });
            audioEngine.setCurrentTime(this._audioId, value);
            // this.dispatchEvent({ type: "seeked" });
        }
    }

    get src() {
        return this._src;
    }
    set src(value) {
        if (typeof value !== "string") {
            console.error("Audio src: please define src as string type");
        }
        if (this._audioId !== undefined) {
            audioEngine.stop(this._audioId);
            this._audioId = undefined;
        }

        if (value.startsWith("file://")) {
            value = value.substr("file://".length);
        }
        this._src = value;
        if (this._isAutoplay) {
            this.play();
            return;
        }
    }

    get loop() {
        let ret = false;
        if (this._audioId !== undefined) {
            ret = audioEngine.isLoop(this._audioId);
        }
        return ret;
    }
    set loop(value) {
        this._isLoop = value;
        if (this._audioId !== undefined) {
            audioEngine.setLoop(this._audioId, value);
        }
    }

    get autoplay() {
        return this._isAutoplay;
    }
    set autoplay(value) {
        this._isAutoplay = value;
    }

    get paused() {
        let ret = false;
        if (this._audioId !== undefined) {
            if (audioEngine.getState(this._audioId) === this._PAUSE) {
                ret = true;
            }
        }
        return ret;
    }

    cloneNode() {
        let newAudio = new AdaptAudioElement();
        newAudio.loop = this.loop;
        newAudio.autoplay = this.autoplay;
        newAudio.src = this.src;
        return newAudio;
    }
}


let oldCreateElement = document.createElement;

// 输入框适配
let createInputElement = function (name) {
    let node = oldCreateElement(name);

    node.focus = function () {
        let layaInput;
        if (typeof laya !== "undefined" && typeof laya.display !== "undefined" && typeof laya.display.Input !== "undefined") {
            layaInput = laya.display.Input;
        } else if (typeof Laya !== "undefined" && typeof Laya.Input !== "undefined") {
            layaInput = Laya.Input;
        }

        if (typeof layaInput === "undefined") {
            return;
        }
        let inputTarget = layaInput["inputElement"].target;

        if (typeof inputTarget === "undefined") {
            return;
        }

        $rt.offKeyboardConfirm();
        $rt.offKeyboardInput();
        $rt.showKeyboard(
            {
                defaultValue: inputTarget.text,
                maxLength: inputTarget.maxChars,
                multiple: inputTarget.multiline,
                confirmHold: true,
                confirmType: 'done',
                success: function (res) {
                },
                fail: function (res) {
                }
            });
        $rt.onKeyboardComplete(function () {
            inputTarget.focus = false;
            layaInput.isInputting = false;
        });
        $rt.onKeyboardConfirm(function (res) {
            var str = res ? res.value : "";
            inputTarget.text = str;
            inputTarget.event(/*laya.events.Event.INPUT*/"input");
            inputTarget.focus = false;

            $rt.offKeyboardConfirm();
            $rt.offKeyboardInput();
            $rt.hideKeyboard({
                success: function (res) {
                }, fail: function (res) {
                }
            });
        });
        $rt.onKeyboardInput(function (res) {
            var str = res ? res.value : "";
            if (!inputTarget.multiline) {
                if (str.indexOf("\n") != -1) {
                    inputTarget.focus = false;
                    return;
                }
            }
            inputTarget.text = str;
            inputTarget.event(/*laya.events.Event.INPUT*/"input");
        });
    }

    node.blur = function () { }
    node.style = {};

    return node;
};

let hasCreated = false;
document.createElement = function (name) {
    // 理论上第一次返回的canvas为主canvas，后续返回的离屏幕canvas
    if (name === "canvas") {
        let node;
        if (!hasCreated) {
            hasCreated = true;
            node = document.getElementById("canvas");
        } else {
            node = oldCreateElement(name);
            let oldGetContext = node.getContext.bind(node);

            node.style = document.getElementById("canvas").style;
            node.getContext = function (name, opts) {
                // 特殊处理：任何canvas都返回主canvas的webgl
                if (name === "webgl" || name === "experimental-webgl") {
                    return document.getElementById("canvas").getContext(name, opts);
                } else {
                    return oldGetContext(name, opts);
                }
            };
        }
        if (typeof node.toDataURL === "undefined") {
            node.toDataURL = function (tagName) {
                return "";
            };
        }
        return node;
    } else if (name === "audio") {
        return new AdaptAudioElement();
    } else if (name === "textarea" || name === "input") {
        return createInputElement(name);
    }
    return oldCreateElement(name);
}

// 屏幕适配
// window.getAdapterInfo = function (config) {
//     let scaleX = 1;
//     let scaleY = 1;
//     let vw = window.innerWidth;
//     let vh = window.innerHeight;
//     let w = config.width;
//     let h = config.height;
//     config.scaleMode = config.scaleMode.toLowerCase();
//     switch (config.scaleMode) {
//         case "exactfit":
//             scaleX = vw / w;
//             scaleY = vh / h;
//             break;

//         case "fixedwidth":
//             scaleX = scaleY = vw / w;
//             break;
//     }
//     return {
//         scaleX: scaleX,
//         scaleY: scaleY,
//         w: w,
//         h: h,
//         vw: vw,
//         vh: vh,
//         rw: w * scaleX,
//         rh: h * scaleY
//     };
// };


// 其他
window.location = {
    protocol: "file:",
    pathname: "",
    host: ""
};

window.navigator.userAgent = "Mobile";
window.navigator.getGamepads = function () {
    return [null];
};
window.Audio = AdaptAudioElement;

CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
}

let canvasStyleTransform = "matrix(1,0,0,1,0,0)";
let canvasViewportX = 0;
let canvasViewportY = 0;
let canvasViewportWidth = 0;
let canvasViewportHeight = 0;

// 只需要对主canvas进行屏幕适配
let mainCanvas = document.getElementById("canvas");
let style = mainCanvas.style;
let glContext = mainCanvas.getContext("webgl");
// 重写主canvas的webgl的viewport方法，
let setViewport = glContext.viewport.bind(glContext);
glContext.viewport = function (x, y, width, height) {
    canvasViewportX = x;
    canvasViewportY = y;
    canvasViewportWidth = width;
    canvasViewportHeight = height;

    let frameBuffer = glContext.getParameter(glContext.FRAMEBUFFER_BINDING)
    let isRenderToScreen = (frameBuffer === null);

    if (typeof frameBuffer === "undefined") { //无法通过接口判断是否渲染在屏幕上时,需要进行特殊处理
        isRenderToScreen = true;
    }

    if (isRenderToScreen) { //渲染到屏幕的时候需要进行缩放偏移
        updateMainCanvasViewport();
    } else {                       //不是渲染到屏幕的时候不需要进行缩放偏移
        setViewport(x, y, width, height);
    }
}
let setScissor = glContext.scissor.bind(glContext);
glContext.scissor = function (x, y, width, height) {
    // console.log("glContext.scissor:", x, y, width, height);
    let result = canvasStyleTransform.match(/\(([^)]*)\)/);
    let splitResult = result[1].split(",");
    let a = parseFloat(splitResult[0]);
    let b = parseFloat(splitResult[1]);
    let c = parseFloat(splitResult[2]);
    let d = parseFloat(splitResult[3]);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        setScissor(x, y, width, height);
        return;
    }

    let scaleX = b === 0 ? a : Math.sqrt(a * a + b * b);
    let scaleY = c === 0 ? d : Math.sqrt(c * c + d * d);


    let frameBuffer = glContext.getParameter(glContext.FRAMEBUFFER_BINDING)
    let isRenderToScreen = (frameBuffer === null);

    if (typeof frameBuffer === "undefined") {
        isRenderToScreen = true;
    }

    if (isRenderToScreen) {
        setScissor(x * scaleX, y * scaleY, width * scaleX, height * scaleY);
    } else {
        setScissor(x, y, width, height);
    }

}
//viewport将根据canvas大小和canvas.style.transform计算得出
//当前的transform只支持 matrix(a,b,c,d,tx,ty)格式
//style.transform参考：https://www.w3.org/TR/css-transforms-1/#two-d-transform-functions
let updateMainCanvasViewport = function () {
    let result = canvasStyleTransform.match(/\(([^)]*)\)/);
    let splitResult = result[1].split(",");
    let a = parseFloat(splitResult[0]);
    let b = parseFloat(splitResult[1]);
    let c = parseFloat(splitResult[2]);
    let d = parseFloat(splitResult[3]);
    let tx = parseFloat(splitResult[4]);
    let ty = parseFloat(splitResult[5]);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(tx) || isNaN(ty)) {
        setViewport(canvasViewportX, canvasViewportY, canvasViewportWidth, canvasViewportHeight);
        return;
    }

    let scaleX = b === 0 ? a : Math.sqrt(a * a + b * b);
    let scaleY = c === 0 ? d : Math.sqrt(c * c + d * d);

    let origionX = tx;
    let origionY = ty;
    let width = canvasViewportWidth * scaleX;
    let height = canvasViewportHeight * scaleY;

    // console.log('[updateMainCanvasViewport]:', origionX, origionY, width, height);
    setViewport(origionX, origionY, width, height);
}
// 实现canvas.style的transform属性
Object.defineProperty(style, "transform", {
    get() {
        return canvasStyleTransform;
    },
    set(value) {
        canvasStyleTransform = value;
        updateMainCanvasViewport();
    }
});

Object.defineProperty(style, 'left', {
    get() {
        if (this.val === '-10000px') {
            return '0px';
        }
        return this.val;
    },
    set(value) {
        this.val = value;
    }
});
