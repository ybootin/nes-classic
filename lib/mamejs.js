var emloader;
(function (emloader) {
    var event;
    (function (event) {
        class EventEmiter {
            constructor() {
                this.handlers = {};
            }
            on(eventName, callback) {
                this.handlers[eventName] = this.handlers[eventName] || [];
                this.handlers[eventName].push(callback);
            }
            off(eventName, callback) {
                if (this.handlers[eventName] && this.handlers[eventName].indexOf(callback) !== -1) {
                    this.handlers[eventName][this.handlers[eventName].indexOf(callback)] = function () { };
                }
            }
            emit(eventName, data) {
                if (this.handlers[eventName]) {
                    this.handlers[eventName].forEach((callback) => callback(data));
                }
            }
            clean() {
                this.handlers = {};
            }
        }
        event.EventEmiter = EventEmiter;
    })(event = emloader.event || (emloader.event = {}));
})(emloader || (emloader = {}));
var emloader;
(function (emloader) {
    var helper;
    (function (helper) {
        /**
         * Holds javascript keycode
         *  https://css-tricks.com/snippets/javascript/javascript-keycodes/
         */
        class KeyCode {
        }
        KeyCode.backspace = 8;
        KeyCode.tab = 9;
        KeyCode.enter = 13;
        KeyCode.shift = 16;
        KeyCode.ctrl = 17;
        KeyCode.alt = 18;
        KeyCode.pauseBreak = 19;
        KeyCode.capsLock = 20;
        KeyCode.escape = 27;
        KeyCode.space = 32;
        KeyCode.pageup = 33;
        KeyCode.pagedown = 34;
        KeyCode.end = 35;
        KeyCode.home = 36;
        KeyCode.leftarrow = 37;
        KeyCode.uparrow = 38;
        KeyCode.rightarrow = 39;
        KeyCode.downarrow = 40;
        KeyCode.insert = 45;
        KeyCode.delete = 46;
        KeyCode.digit0 = 48;
        KeyCode.digit1 = 49;
        KeyCode.digit2 = 50;
        KeyCode.digit3 = 51;
        KeyCode.digit4 = 52;
        KeyCode.digit5 = 53;
        KeyCode.digit6 = 54;
        KeyCode.digit7 = 55;
        KeyCode.digit8 = 56;
        KeyCode.digit9 = 57;
        KeyCode.a = 65;
        KeyCode.b = 66;
        KeyCode.c = 67;
        KeyCode.d = 68;
        KeyCode.e = 69;
        KeyCode.f = 70;
        KeyCode.g = 71;
        KeyCode.h = 72;
        KeyCode.i = 73;
        KeyCode.j = 74;
        KeyCode.k = 75;
        KeyCode.l = 76;
        KeyCode.m = 77;
        KeyCode.n = 78;
        KeyCode.o = 79;
        KeyCode.p = 80;
        KeyCode.q = 81;
        KeyCode.r = 82;
        KeyCode.s = 83;
        KeyCode.t = 84;
        KeyCode.u = 85;
        KeyCode.v = 86;
        KeyCode.w = 87;
        KeyCode.x = 88;
        KeyCode.y = 89;
        KeyCode.z = 90;
        KeyCode.leftWindowKey = 91;
        KeyCode.rightWindowKey = 92;
        KeyCode.selectKey = 93;
        KeyCode.numpad0 = 96;
        KeyCode.numpad1 = 97;
        KeyCode.numpad2 = 98;
        KeyCode.numpad3 = 99;
        KeyCode.numpad4 = 100;
        KeyCode.numpad5 = 101;
        KeyCode.numpad6 = 102;
        KeyCode.numpad7 = 103;
        KeyCode.numpad8 = 104;
        KeyCode.numpad9 = 105;
        KeyCode.multiply = 106;
        KeyCode.add = 107;
        KeyCode.subtract = 109;
        KeyCode.decimalPoint = 110;
        KeyCode.divide = 111;
        KeyCode.f1 = 112;
        KeyCode.f2 = 113;
        KeyCode.f3 = 114;
        KeyCode.f4 = 115;
        KeyCode.f5 = 116;
        KeyCode.f6 = 117;
        KeyCode.f7 = 118;
        KeyCode.f8 = 119;
        KeyCode.f9 = 120;
        KeyCode.f10 = 121;
        KeyCode.f11 = 122;
        KeyCode.f12 = 123;
        KeyCode.numlock = 144;
        KeyCode.scrolllock = 145;
        KeyCode.semicolon = 186;
        KeyCode.equalsign = 187;
        KeyCode.comma = 188;
        KeyCode.dash = 189;
        KeyCode.period = 190;
        KeyCode.forwardslash = 191;
        KeyCode.graveAccent = 192;
        KeyCode.openbracket = 219;
        KeyCode.backslash = 220;
        KeyCode.closebraket = 221;
        KeyCode.singlequote = 222;
        helper.KeyCode = KeyCode;
        // revert for quick access
        helper.KeyCodeKey = new Array(222);
        for (var key in KeyCode) {
            helper.KeyCodeKey[KeyCode[key]] = key;
        }
    })(helper = emloader.helper || (emloader.helper = {}));
})(emloader || (emloader = {}));
/// <reference path="IModule.ts" />
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
}
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame;
}
var emloader;
(function (emloader) {
    var helper;
    (function (helper) {
        class HTMLHelper {
            // append a script to the DOM
            static loadScript(doc, url) {
                return new Promise(function (resolve, reject) {
                    var script = doc.createElement('script');
                    script.addEventListener("load", function (evt) {
                        resolve(script);
                    });
                    script.addEventListener("error", function (evt) {
                        reject(evt);
                    });
                    script.type = 'text/javascript';
                    script.src = url;
                    doc.getElementsByTagName('head')[0].appendChild(script);
                });
            }
            static createIframe(doc = window.document) {
                var iframe = doc.createElement('iframe');
                iframe.style.margin = '0px';
                iframe.style.padding = '0px';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = '0px';
                iframe.style.overflow = 'hidden';
                iframe.setAttribute('scrolling', 'no');
                iframe.frameBorder = '0';
                return iframe;
            }
            static getWindow(element) {
                return element.ownerDocument.defaultView || element.ownerDocument.parentWindow;
            }
            static addClass(element, className) {
                element.className = element.className + (element.className.split(' ').indexOf(className) === -1 ? ' ' + className : '');
            }
            static removeClass(element, className) {
                element.className = element.className.split(' ').filter((item) => {
                    return item !== className;
                }).join(' ');
            }
        }
        helper.HTMLHelper = HTMLHelper;
    })(helper = emloader.helper || (emloader.helper = {}));
})(emloader || (emloader = {}));
var emloader;
(function (emloader) {
    var helper;
    (function (helper) {
        class FileLoader {
            static loadFile(url, name, handler) {
                // fetch file, and update game data
                return FileLoader.fetchFile(url, 'arraybuffer', handler).then(function (data) {
                    return {
                        name: name,
                        data: new Uint8Array(data)
                    };
                });
            }
            // XHR file loader
            static fetchFile(url, responseType = 'arraybuffer', handler) {
                return new Promise(function (resolve, reject) {
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', url, true);
                    xhr.responseType = responseType;
                    let errorMsg = 'error loading ' + url;
                    // register Handler callback for all ProgressEvent
                    if (handler && typeof handler === 'function') {
                        ['progress', 'load', 'error', 'abort'].forEach((eventName) => {
                            xhr.addEventListener(eventName, handler);
                        });
                    }
                    xhr.onload = function (e) {
                        if (xhr.status < 200 || xhr.status >= 400) {
                            reject(errorMsg + ' : status code ' + xhr.status);
                        }
                        else {
                            resolve(xhr.response);
                        }
                    };
                    xhr.onerror = function (e) {
                        reject(errorMsg + ' : ' + e.toString());
                    };
                    xhr.send();
                });
            }
        }
        FileLoader.toUint8Array = (str) => {
            var len = str.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes;
        };
        helper.FileLoader = FileLoader;
    })(helper = emloader.helper || (emloader.helper = {}));
})(emloader || (emloader = {}));
/// <reference path="../model/IControls.ts" />
var emloader;
(function (emloader) {
    class Joystick extends emloader.event.EventEmiter {
        constructor(...args) {
            super(...args);
            this.pressed = {};
            this.sensibility = 0.5;
        }
        setControlMapping(controlMapping) {
            if (this.controlMapping !== controlMapping) {
                this.controlMapping = controlMapping;
                this.emit(Joystick.CONTROLCHANGE);
            }
        }
        getControlMapping() {
            return this.controlMapping;
        }
        setKeyHandler(handler) {
            this.handler = handler;
        }
        getKeyHandler() {
            return this.handler;
        }
        connect(gamepad) {
            if (!this.isConnected()) {
                this.gamepad = gamepad;
                let loop = () => {
                    let gamepad = this.getGamepad();
                    // handles axis press / release
                    Joystick.axes.forEach((axe, index) => {
                        try {
                            if (gamepad.axes[index] <= -this.sensibility || gamepad.axes[index] >= this.sensibility) {
                                this.keyPress(gamepad.axes[index] <= -this.sensibility ? axe[0] : axe[1]);
                            }
                            else if (this.pressed[axe[0]] || this.pressed[axe[1]]) {
                                this.keyRelease(this.pressed[axe[0]] ? axe[0] : axe[1]);
                            }
                        }
                        catch (e) { } // prevent exception when disconnect
                    });
                    // handle key press/release
                    this.getButtonMap().forEach((bt, index) => {
                        if (bt) {
                            try {
                                if (gamepad.buttons[index].pressed) {
                                    this.keyPress(bt);
                                }
                                else if (this.pressed[bt]) {
                                    this.keyRelease(bt);
                                }
                            }
                            catch (e) { } // prevent exception when disconnect
                        }
                    });
                    this.loopId = requestAnimationFrame(loop);
                };
                loop();
                // must be emit AFTER loop(), to have loopId setted
                this.emit(Joystick.CONNECTED);
            }
        }
        disconnect() {
            cancelAnimationFrame(this.loopId);
            this.loopId = null;
            this.gamepad = null;
            this.controlMapping = null;
            this.emit(Joystick.DISCONNECTED);
        }
        isConnected() {
            return !!this.loopId;
        }
        getGamepad() {
            return this.gamepad ? navigator.getGamepads()[this.gamepad.index] : null;
        }
        getButtonMap() {
            return this.customButtonMap || Joystick.buttonMap;
        }
        setButtonMap(buttonMap) {
            if (buttonMap !== this.customButtonMap) {
                this.customButtonMap = buttonMap;
                this.emit(Joystick.BUTTONMAPCHANGE);
            }
        }
        keyPress(key) {
            if (this.handler) {
                this.pressed[key] = true;
                this.handler.pressKey(this.controlMapping[key]);
            }
        }
        keyRelease(key) {
            if (this.handler) {
                this.pressed[key] = false;
                this.handler.releaseKey(this.controlMapping[key]);
            }
        }
    }
    Joystick.axes = [['left', 'right'], ['up', 'down']];
    // maps IControl keys as string like this control[button]
    Joystick.buttonMap = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', null, null, 'coin', 'start'];
    Joystick.BUTTONMAPCHANGE = 'buttonmapchange';
    Joystick.DISCONNECTED = 'disconnected';
    Joystick.CONNECTED = 'connected';
    Joystick.CONTROLCHANGE = 'controlchange';
    emloader.Joystick = Joystick;
})(emloader || (emloader = {}));
var emloader;
(function (emloader) {
    class Keyboard {
        constructor() {
            this.keyCodeMapping = [];
        }
        setKeyHandler(keyhandler) {
            this.keyhandler = keyhandler;
        }
        bind() {
            this.unbind();
            this.keyboardEventHandler = (evt) => {
                let keyCode = this.keyCodeMapping[evt.keyCode] || evt.keyCode;
                if (keyCode) {
                    evt.type === 'keydown' ? this.keyhandler.pressKey(keyCode) : this.keyhandler.releaseKey(keyCode);
                }
            };
            document.addEventListener('keyup', this.keyboardEventHandler);
            document.addEventListener('keydown', this.keyboardEventHandler);
        }
        unbind() {
            if (this.keyboardEventHandler) {
                document.removeEventListener('keyup', this.keyboardEventHandler);
                document.removeEventListener('keydown', this.keyboardEventHandler);
                this.keyboardEventHandler = null;
            }
        }
    }
    Keyboard.KEYMAPPINGCHANGE = 'keymappingchange';
    emloader.Keyboard = Keyboard;
})(emloader || (emloader = {}));
/// <reference path="../model/IControls.ts" />
/// <reference path="Joystick.ts" />
/// <reference path="Keyboard.ts" />
var emloader;
(function (emloader) {
    class Controllers extends emloader.event.EventEmiter {
        constructor(mappings) {
            super();
            this.mappings = mappings;
            this.keyboard = new emloader.Keyboard();
            this._joysticks = new Array(4);
            for (var i = 0; i < 4; i++) {
                this._joysticks[i] = (() => {
                    let joystick = new emloader.Joystick();
                    joystick.on(emloader.Joystick.CONNECTED, () => this.emit(Controllers.JOYSTICKCONNECTED, joystick));
                    joystick.on(emloader.Joystick.DISCONNECTED, () => this.emit(Controllers.JOYSTICKDISCONNECTED, joystick));
                    joystick.on(emloader.Joystick.BUTTONMAPCHANGE, () => this.emit(Controllers.JOYSTICKBUTTONMAPCHANGE, joystick));
                    joystick.on(emloader.Joystick.CONTROLCHANGE, () => {
                        this.emit(Controllers.JOYSTICKCONTROLCHANGE, joystick);
                        // prevent joystick use the same Controls
                        this.getJoysticks().forEach((j) => {
                            if (j !== joystick && j.getControlMapping() === joystick.getControlMapping()) {
                                j.setControlMapping(this.getAvailableMappings()[0]);
                            }
                        });
                    });
                    return joystick;
                })();
            }
        }
        setKeyHandler(keyHandler) {
            this.keyHandler = keyHandler;
            // redispatch key events
            this.keyHandler.on('keypress', (keyCode) => this.emit(Controllers.KEYPRESS, keyCode));
            this.keyHandler.on('keyrelease', (keyCode) => this.emit(Controllers.KEYRELEASE, keyCode));
            this.getJoysticks().forEach((joystick) => {
                if (joystick) {
                    joystick.setKeyHandler(keyHandler);
                }
            });
            this.keyboard.setKeyHandler(keyHandler);
        }
        getKeyHandler() {
            return this.keyHandler;
        }
        getJoysticks() {
            return this._joysticks.filter((joystick) => {
                return joystick.isConnected();
            });
        }
        /**
         * return the joystick attached to the current mapping or null if not attached
         */
        getJoystick(mapping) {
            return this._joysticks.filter((joystick) => {
                return joystick && joystick.getControlMapping() === mapping;
            })[0];
        }
        getAvailableMappings() {
            return this.mappings.filter((mapping) => !this.getJoystick(mapping));
        }
        checkGamepads() {
            let gamepads = navigator.getGamepads();
            for (let i = 0, l = gamepads.length; i < l; i++) {
                if (gamepads[i] && !this._joysticks[i].isConnected()) {
                    this._joysticks[i].setControlMapping(this.getAvailableMappings()[0]);
                    this._joysticks[i].setKeyHandler(this.keyHandler);
                    this._joysticks[i].connect(gamepads[i]);
                }
                else if (!gamepads[i] && this._joysticks[i].isConnected()) {
                    this._joysticks[i].disconnect();
                }
            }
        }
        bind(scope = window) {
            this.unbind(scope);
            // gamepaddisconnected/gameconnected event works very bad on chrome ...
            // this is bad, but this works well
            this.gamepadChecker = setInterval(() => {
                this.checkGamepads();
            }, 1000);
            this.checkGamepads();
            this.keyboard.bind();
        }
        unbind(scope = window) {
            if (this.gamepadChecker) {
                clearInterval(this.gamepadChecker);
                this.getJoysticks().forEach((joystick) => {
                    joystick.disconnect();
                });
            }
            this.keyboard.unbind();
        }
    }
    Controllers.JOYSTICKCONNECTED = 'joystickconnected';
    Controllers.JOYSTICKDISCONNECTED = 'joystickdisconnected';
    Controllers.JOYSTICKBUTTONMAPCHANGE = 'joystickbuttonmapchange';
    Controllers.JOYSTICKCONTROLCHANGE = 'joystickcontrolchange';
    Controllers.KEYPRESS = 'keypress';
    Controllers.KEYRELEASE = 'keyrelease';
    emloader.Controllers = Controllers;
})(emloader || (emloader = {}));
/// <reference path="../model/IControls.ts" />
/// <reference path="../controllers/Controllers.ts" />
var emloader;
(function (emloader) {
    var plugins;
    (function (plugins) {
        class ControllerButton {
            constructor(controllers, keyCode) {
                this.controllers = controllers;
                this.keyCode = keyCode;
                this.element = document.createElement('button');
                this.element.appendChild(document.createElement('span'));
                this.element.addEventListener('mousedown', (evt) => this.controllers.getKeyHandler().pressKey(keyCode));
                this.element.addEventListener('mouseup', (evt) => this.controllers.getKeyHandler().releaseKey(keyCode));
                this.element.addEventListener('touchstart', (evt) => {
                    this.controllers.getKeyHandler().pressKey(keyCode);
                });
                this.element.addEventListener('touchend', (evt) => {
                    this.controllers.getKeyHandler().releaseKey(keyCode);
                });
            }
            getElement() {
                return this.element;
            }
            setValue(name) {
                this.element.getElementsByTagName('span')[0].innerHTML = name;
            }
        }
        plugins.ControllerButton = ControllerButton;
    })(plugins = emloader.plugins || (emloader.plugins = {}));
})(emloader || (emloader = {}));
/// <reference path="../model/IControls.ts" />
/// <reference path="../helper/HTMLHelper.ts" />
var emloader;
(function (emloader) {
    var plugins;
    (function (plugins) {
        class ControllerSelector {
            constructor(controllers, mapping, onChange) {
                this.controllers = controllers;
                this.mapping = mapping;
                this.onChange = onChange;
                this.baseClass = 'emloader-control-selector';
                this.mainContainer = document.createElement('div');
                this.mainContainer.className = this.baseClass;
                this.setJoystick(controllers.getJoystick(mapping));
                controllers.on(emloader.Controllers.JOYSTICKCONNECTED, (joystick) => {
                    this.setJoystick(joystick.getControlMapping() === mapping ? joystick : this.joystick);
                });
                controllers.on(emloader.Controllers.JOYSTICKDISCONNECTED, (joystick) => {
                    this.setJoystick(this.joystick && !this.joystick.isConnected() ? null : this.joystick);
                });
                controllers.on(emloader.Controllers.JOYSTICKCONTROLCHANGE, (joystick) => {
                    if (joystick === this.joystick && joystick.getControlMapping() !== mapping) {
                        this.setJoystick(null);
                    }
                    else if (joystick !== this.joystick && joystick.getControlMapping() === mapping) {
                        this.setJoystick(joystick);
                    }
                    else {
                        this.setJoystick(this.joystick);
                    }
                });
            }
            getElement() {
                return this.mainContainer;
            }
            setJoystick(joystick = null) {
                if (joystick !== this.joystick && joystick && joystick.getControlMapping() !== this.mapping) {
                    joystick.setControlMapping(this.mapping); // will trigger mappingchnage event and update everything
                }
                this.joystick = joystick;
                // refresh UI
                this.empty();
                this.mainContainer.appendChild(this.createOption(this.joystick, true));
                if (typeof this.onChange === 'function') {
                    this.onChange(joystick);
                }
            }
            open() {
                if (this.isOpened()) {
                    return;
                }
                let addOptionClick = (joystick = null) => {
                    let option = this.createOption(joystick);
                    option.addEventListener('click', (evt) => {
                        this.setJoystick(joystick);
                    });
                    this.mainContainer.appendChild(option);
                };
                this.controllers.getJoysticks().forEach((joystick) => {
                    if (joystick && joystick !== this.joystick) {
                        addOptionClick(joystick);
                    }
                });
                // add keyboard option if joystick is selected
                // keep keyboard always at the end of the list
                if (this.joystick) {
                    addOptionClick();
                }
                emloader.helper.HTMLHelper.addClass(this.mainContainer.childNodes[0], this.baseClass + '-expanded');
            }
            close() {
                this.setJoystick(this.joystick);
            }
            // check if not already opened
            isOpened() {
                return this.mainContainer.childNodes.length > 1;
            }
            empty() {
                while (this.mainContainer.hasChildNodes()) {
                    this.mainContainer.removeChild(this.mainContainer.lastChild);
                }
            }
            createOption(joystick = null, main) {
                let option = document.createElement('div');
                option.className = this.baseClass + '-item ' + this.baseClass + '-' + (joystick ? 'gamepad' : 'keyboard');
                option.innerHTML = joystick && joystick.getGamepad() ? String(joystick.getGamepad().index + 1) : '';
                if (main && this.controllers.getJoysticks().length > 0) {
                    emloader.helper.HTMLHelper.addClass(option, this.baseClass + '-expandable');
                    option.addEventListener('click', (evt) => {
                        this.isOpened() ? this.close() : this.open();
                    });
                }
                return option;
            }
        }
        plugins.ControllerSelector = ControllerSelector;
    })(plugins = emloader.plugins || (emloader.plugins = {}));
})(emloader || (emloader = {}));
/// <reference path="../model/IControls.ts" />
/// <reference path="ControllerButton.ts" />
/// <reference path="ControllerSelector.ts" />
/// <reference path="../controllers/Controllers.ts" />
var emloader;
(function (emloader) {
    var plugins;
    (function (plugins) {
        class VirtualController {
            constructor(controllers, mapping) {
                this.controllers = controllers;
                this.mapping = mapping;
                this.buttons = new Array(222); //{[mameKey: string]: MameButton} = {}
                this.baseClass = 'emloader-virtual-controller';
                this.keyCodeId = new Array(222);
                this.mainContainer = document.createElement('div');
                this.mainContainer.className = this.baseClass;
                this.setJoystick(controllers.getJoystick(mapping));
                for (var controllerButton in mapping) {
                    let keyCode = mapping[controllerButton];
                    this.buttons[keyCode] = new plugins.ControllerButton(controllers, keyCode);
                    this.keyCodeId[keyCode] = controllerButton;
                    this.mainContainer.appendChild(this.buttons[keyCode].getElement());
                }
                this.selector = new plugins.ControllerSelector(controllers, mapping, (joystick) => {
                    this.setJoystick(joystick);
                });
                this.mainContainer.appendChild(this.selector.getElement());
                this.updateButtons();
                // Handle keychange visually
                this.controllers.on(emloader.Controllers.KEYPRESS, (keyCode) => this.onKeyEvent(emloader.Controllers.KEYPRESS, keyCode));
                this.controllers.on(emloader.Controllers.KEYRELEASE, (keyCode) => this.onKeyEvent(emloader.Controllers.KEYRELEASE, keyCode));
            }
            getElement() {
                return this.mainContainer;
            }
            setKeyHandler(keyHandler) {
                this.keyHandler = keyHandler;
            }
            getKeyHandler() {
                return this.keyHandler;
            }
            setJoystick(joystick) {
                this.joystick = joystick;
                this.updateButtons();
            }
            updateButtons() {
                for (var keyCode in this.buttons) {
                    this.updateButton(this.buttons[keyCode], this.keyCodeId[keyCode]);
                }
            }
            updateButton(button, buttonId) {
                let keyName = emloader.KeyHandler.getKey(this.mapping[buttonId]);
                let buttonClass = this.baseClass + '-button';
                let classes = [buttonClass, buttonClass + '-' + keyName, buttonClass + '-' + buttonId];
                if (this.joystick) {
                    classes.push(buttonClass + '-gamepad');
                }
                button.getElement().className = classes.join(' ');
                switch (buttonId) {
                    case 'coin':
                    case 'start':
                        // this is just a hack to have 1, 2, 3 ... instead of digit1, digit2 ... when use game pad
                        button.setValue(buttonId.replace('coin', 'insert coin') + ' (' + keyName.replace('digit', '') + ')');
                        break;
                    default:
                        button.setValue(this.joystick ? buttonId.replace('button', '') : keyName);
                }
            }
            onKeyEvent(eventName, keyCode) {
                if (this.buttons[keyCode]) {
                    // Lazy button.addClass/removeClass(className)
                    emloader.helper.HTMLHelper[(eventName === emloader.Controllers.KEYPRESS ? 'add' : 'remove') + 'Class'](this.buttons[keyCode].getElement(), this.baseClass + '-button-pressed');
                }
            }
        }
        plugins.VirtualController = VirtualController;
    })(plugins = emloader.plugins || (emloader.plugins = {}));
})(emloader || (emloader = {}));
/// <reference path="model/FS.d.ts" />
/// <reference path="model/Window.ts" />
/// <reference path="model/IFile.ts" />
/// <reference path="model/IModule.ts" />
/// <reference path="model/IEmloader.ts" />
/// <reference path="event/EventEmiter.ts" />
/// <reference path="helper/HTMLHelper.ts" />
/// <reference path="helper/FileLoader.ts" />
/// <reference path="KeyHandler.ts" />
/// <reference path="plugins/VirtualController.ts" />
var emloader;
(function (emloader_1) {
    function load(url, container, emModule) {
        emModule = emModule || {};
        // By default, if no function specified, we try to locate the file at the same level than the url
        emModule.locateFile = emModule.locateFile || function (file) {
            if (file.substr(-4) === '.mem') {
                return url + '.mem';
            }
            return file;
        };
        let emloader = new Emloader(container, emModule);
        return emloader_1.helper.HTMLHelper.loadScript(emloader.scope.document, url).then(() => {
            return emloader;
        });
    }
    emloader_1.load = load;
    function loadHeadless(url, emModule) {
        let container = document.createElement('div');
        container.style.display = 'none';
        document.body.appendChild(container);
        return load(url, container, emModule);
    }
    emloader_1.loadHeadless = loadHeadless;
    class Emloader extends emloader_1.event.EventEmiter {
        constructor(_container, defaultModule) {
            super();
            this._container = _container;
            this._stdout = [];
            this._stderr = [];
            this._files = [];
            // Iframe Mame prevent from loading the emscriptem app in the main scope
            this._iframe = emloader_1.helper.HTMLHelper.createIframe(emloader_1.helper.HTMLHelper.getWindow(this._container).document);
            this._container.appendChild(this._iframe);
            // default css redering options for canvas
            // canvas will always fit to the container width/height
            let canvaCSS = 'width:100%;height:100%;';
            ['-moz-crisp-edges', '-o-crisp-edges', '-webkit-optimize-contrast', 'optimize-contrast', 'crisp-edges', 'pixelated', 'optimizeSpeed'].forEach((value) => {
                canvaCSS += 'image-rendering:' + value + ';';
            });
            this._iframe.contentWindow.document.write('<!doctype html><html><head><style>canvas {' + canvaCSS + '}</style></head><body style="margin:0px;padding:0px"><canvas/></body></html>');
            this._iframe.contentWindow.document.close();
            this._scope = this._iframe.contentWindow;
            this._canvas = this._scope.document.getElementsByTagName('canvas')[0];
            //  Emscripten module
            this._scope.Module = {};
            for (var att in defaultModule) {
                if (defaultModule.hasOwnProperty(att)) {
                    this._scope.Module[att] = defaultModule[att];
                }
            }
            this._scope.Module.arguments = defaultModule.arguments || [];
            this._scope.Module.screenIsReadOnly = defaultModule.screenIsReadOnly || false;
            this._scope.Module.print = (text) => {
                this.emit(Emloader.ON_STDOUT);
                this._stdout.push(text);
                if (typeof defaultModule.print === 'function') {
                    defaultModule.print(text);
                }
            };
            this._scope.Module.printErr = (err) => {
                this.emit(Emloader.ON_STDERROR);
                this._stderr.push(err);
                if (typeof defaultModule.printErr === 'function') {
                    defaultModule.printErr(err);
                }
            };
            this._scope.Module.canvas = this.canvas;
            this._scope.Module.noInitialRun = defaultModule.noInitialRun || true;
            this._keyHandler = new emloader_1.KeyHandler(this.module);
        }
        static triggerEvent(emModule, eventType, data = {}) {
            let scope = emloader_1.helper.HTMLHelper.getWindow(emModule.canvas);
            let e = scope.document.createEventObject ? scope.document.createEventObject() : scope.document.createEvent("Events");
            if (e.initEvent)
                e.initEvent(eventType, true, true);
            for (var att in data) {
                if (data.hasOwnProperty(att) && e[att] === undefined) {
                    e[att] = data[att];
                }
            }
            // Dispatch to browser for real (use this if page uses SDL or something else for event handling):
            emModule.canvas.dispatchEvent ? emModule.canvas.dispatchEvent(e) : emModule.canvas.fireEvent("on" + eventType, e);
        }
        get keyHandler() {
            return this._keyHandler;
        }
        get canvas() {
            return this._canvas;
        }
        get scope() {
            return this._scope;
        }
        get module() {
            return this.scope.Module;
        }
        get stdout() {
            return this._stdout;
        }
        get stderr() {
            return this._stderr;
        }
        get files() {
            return this._files;
        }
        get FS() {
            return this.scope.FS;
        }
        // public print(text: string): void {
        //   this.emit(Emloader.ON_STDOUT)
        //   this._stdout.push(text)
        // }
        // public printErr(error: string): void {
        //   this.emit(Emloader.ON_STDERROR)
        //   this._stderr.push(error)
        // }
        addFS(basepath, fs) {
            this.FS.mount(fs || this.scope.MEMFS, { root: '/' }, basepath);
        }
        addFile(file, path) {
            this.FS.writeFile(path + '/' + file.name, file.data, {
                encoding: 'binary'
            });
            this._files.push(file);
        }
        loadFile(url, name, path, handler) {
            return emloader_1.helper.FileLoader.loadFile(url, name, handler).then((file) => this.addFile(file, path));
        }
        loadFiles(files, path, handler) {
            return Promise.all(Object.keys(files).map((name) => {
                return this.loadFile(files[name], name, path, handler);
            })).then(() => {
                return Promise.resolve();
            });
        }
    }
    emloader_1.Emloader = Emloader;
})(emloader || (emloader = {}));
/// <reference path="model/IModule.ts" />
/// <reference path="model/IControls.ts" />
/// <reference path="event/EventEmiter.ts" />
/// <reference path="helper/KeyCode.ts" />
/// <reference path="Emloader.ts" />
var emloader;
(function (emloader) {
    class KeyHandler extends emloader.event.EventEmiter {
        constructor(module) {
            super();
            this.module = module;
        }
        static getKeyCode(key) {
            return emloader.helper.KeyCode[key];
        }
        static getKey(keyCode) {
            return emloader.helper.KeyCodeKey[keyCode];
        }
        static triggerKeyEvent(module, eventType, keyCode, charCode) {
            return emloader.Emloader.triggerEvent(module, eventType, {
                keyCode: keyCode,
                witch: keyCode,
                charCode: charCode
            });
        }
        pressKey(keyCode) {
            KeyHandler.triggerKeyEvent(this.module, 'keydown', keyCode, 0);
            this.emit(KeyHandler.KEYPRESS, keyCode);
        }
        releaseKey(keyCode) {
            KeyHandler.triggerKeyEvent(this.module, 'keyup', keyCode, 0);
            this.emit(KeyHandler.KEYRELEASE, keyCode);
        }
    }
    KeyHandler.KEYPRESS = 'keypress';
    KeyHandler.KEYRELEASE = 'keyrelease';
    emloader.KeyHandler = KeyHandler;
    class FakeKeyHandler extends emloader.event.EventEmiter {
        pressKey(keyCode) {
            this.emit(KeyHandler.KEYPRESS, keyCode);
        }
        releaseKey(keyCode) {
            this.emit(KeyHandler.KEYRELEASE, keyCode);
        }
    }
    emloader.FakeKeyHandler = FakeKeyHandler;
})(emloader || (emloader = {}));
/// <reference path="IModule.ts" />
/// <reference path="FS.d.ts" />
/// <reference path="../KeyHandler.ts" />
/// <reference path="IResolution.ts" />
/// <reference path="../../emloader/model/IFile.ts" />
/// <reference path="IResolution.ts" />
/// <reference path="IGame.ts" />
/// <reference path="../../emloader/helper/KeyCode.ts" />
var mamejs;
(function (mamejs) {
    /**
     * Mame keymapping
     *  @see http://easyemu.mameworld.info/mameguide/mameguide-controlini.htm for keys
     */
    class MameKeyCode {
    }
    MameKeyCode.KEYCODE_A = emloader.helper.KeyCode.a;
    MameKeyCode.KEYCODE_B = emloader.helper.KeyCode.b;
    MameKeyCode.KEYCODE_C = emloader.helper.KeyCode.c;
    MameKeyCode.KEYCODE_D = emloader.helper.KeyCode.d;
    MameKeyCode.KEYCODE_E = emloader.helper.KeyCode.e;
    MameKeyCode.KEYCODE_F = emloader.helper.KeyCode.f;
    MameKeyCode.KEYCODE_G = emloader.helper.KeyCode.g;
    MameKeyCode.KEYCODE_H = emloader.helper.KeyCode.h;
    MameKeyCode.KEYCODE_I = emloader.helper.KeyCode.i;
    MameKeyCode.KEYCODE_J = emloader.helper.KeyCode.j;
    MameKeyCode.KEYCODE_K = emloader.helper.KeyCode.k;
    MameKeyCode.KEYCODE_L = emloader.helper.KeyCode.l;
    MameKeyCode.KEYCODE_M = emloader.helper.KeyCode.m;
    MameKeyCode.KEYCODE_N = emloader.helper.KeyCode.n;
    MameKeyCode.KEYCODE_O = emloader.helper.KeyCode.o;
    MameKeyCode.KEYCODE_P = emloader.helper.KeyCode.p;
    MameKeyCode.KEYCODE_Q = emloader.helper.KeyCode.q;
    MameKeyCode.KEYCODE_R = emloader.helper.KeyCode.r;
    MameKeyCode.KEYCODE_S = emloader.helper.KeyCode.s;
    MameKeyCode.KEYCODE_T = emloader.helper.KeyCode.t;
    MameKeyCode.KEYCODE_U = emloader.helper.KeyCode.u;
    MameKeyCode.KEYCODE_V = emloader.helper.KeyCode.v;
    MameKeyCode.KEYCODE_W = emloader.helper.KeyCode.w;
    MameKeyCode.KEYCODE_X = emloader.helper.KeyCode.x;
    MameKeyCode.KEYCODE_Y = emloader.helper.KeyCode.y;
    MameKeyCode.KEYCODE_Z = emloader.helper.KeyCode.z;
    MameKeyCode.KEYCODE_0 = emloader.helper.KeyCode.digit0;
    MameKeyCode.KEYCODE_1 = emloader.helper.KeyCode.digit1;
    MameKeyCode.KEYCODE_2 = emloader.helper.KeyCode.digit2;
    MameKeyCode.KEYCODE_3 = emloader.helper.KeyCode.digit3;
    MameKeyCode.KEYCODE_4 = emloader.helper.KeyCode.digit4;
    MameKeyCode.KEYCODE_5 = emloader.helper.KeyCode.digit5;
    MameKeyCode.KEYCODE_6 = emloader.helper.KeyCode.digit6;
    MameKeyCode.KEYCODE_7 = emloader.helper.KeyCode.digit7;
    MameKeyCode.KEYCODE_8 = emloader.helper.KeyCode.digit8;
    MameKeyCode.KEYCODE_9 = emloader.helper.KeyCode.digit9;
    MameKeyCode.KEYCODE_0_PAD = emloader.helper.KeyCode.numpad0;
    MameKeyCode.KEYCODE_1_PAD = emloader.helper.KeyCode.numpad1;
    MameKeyCode.KEYCODE_2_PAD = emloader.helper.KeyCode.numpad2;
    MameKeyCode.KEYCODE_3_PAD = emloader.helper.KeyCode.numpad3;
    MameKeyCode.KEYCODE_4_PAD = emloader.helper.KeyCode.numpad4;
    MameKeyCode.KEYCODE_5_PAD = emloader.helper.KeyCode.numpad5;
    MameKeyCode.KEYCODE_6_PAD = emloader.helper.KeyCode.numpad6;
    MameKeyCode.KEYCODE_7_PAD = emloader.helper.KeyCode.numpad7;
    MameKeyCode.KEYCODE_8_PAD = emloader.helper.KeyCode.numpad8;
    MameKeyCode.KEYCODE_9_PAD = emloader.helper.KeyCode.numpad9;
    MameKeyCode.KEYCODE_F1 = emloader.helper.KeyCode.f1;
    MameKeyCode.KEYCODE_F2 = emloader.helper.KeyCode.f2;
    MameKeyCode.KEYCODE_F3 = emloader.helper.KeyCode.f3;
    MameKeyCode.KEYCODE_F4 = emloader.helper.KeyCode.f4;
    MameKeyCode.KEYCODE_F5 = emloader.helper.KeyCode.f5;
    MameKeyCode.KEYCODE_F6 = emloader.helper.KeyCode.f6;
    MameKeyCode.KEYCODE_F7 = emloader.helper.KeyCode.f7;
    MameKeyCode.KEYCODE_F8 = emloader.helper.KeyCode.f8;
    MameKeyCode.KEYCODE_F9 = emloader.helper.KeyCode.f9;
    MameKeyCode.KEYCODE_F10 = emloader.helper.KeyCode.f10;
    MameKeyCode.KEYCODE_F11 = emloader.helper.KeyCode.f11;
    MameKeyCode.KEYCODE_F12 = emloader.helper.KeyCode.f12;
    MameKeyCode.KEYCODE_MINUS = emloader.helper.KeyCode.subtract;
    MameKeyCode.KEYCODE_TAB = emloader.helper.KeyCode.tab;
    MameKeyCode.KEYCODE_ENTER = emloader.helper.KeyCode.enter;
    MameKeyCode.KEYCODE_BACKSLASH = emloader.helper.KeyCode.backslash;
    MameKeyCode.KEYCODE_STOP = 0;
    MameKeyCode.KEYCODE_INSERT = emloader.helper.KeyCode.insert;
    MameKeyCode.KEYCODE_END = emloader.helper.KeyCode.end;
    MameKeyCode.KEYCODE_LEFT = emloader.helper.KeyCode.leftarrow;
    MameKeyCode.KEYCODE_RIGHT = emloader.helper.KeyCode.rightarrow;
    MameKeyCode.KEYCODE_UP = emloader.helper.KeyCode.uparrow;
    MameKeyCode.KEYCODE_DOWN = emloader.helper.KeyCode.downarrow;
    MameKeyCode.KEYCODE_MINUS_PAD = 0;
    MameKeyCode.KEYCODE_ENTER_PAD = 0;
    MameKeyCode.KEYCODE_LSHIFT = emloader.helper.KeyCode.shift;
    MameKeyCode.KEYCODE_RCONTROL = 0;
    MameKeyCode.KEYCODE_SCRLOCK = 0;
    MameKeyCode.KEYCODE_ESC = emloader.helper.KeyCode.escape;
    MameKeyCode.KEYCODE_EQUALS = emloader.helper.KeyCode.equalsign;
    MameKeyCode.KEYCODE_OPENBRACE = 0;
    MameKeyCode.KEYCODE_COLON = 0;
    MameKeyCode.KEYCODE_BACKSLASH2 = 0;
    MameKeyCode.KEYCODE_SLASH = 0;
    MameKeyCode.KEYCODE_DEL = emloader.helper.KeyCode.delete;
    MameKeyCode.KEYCODE_SLASH_PAD = 0;
    MameKeyCode.KEYCODE_PLUS_PAD = 0;
    MameKeyCode.KEYCODE_PRTSCR = 0;
    MameKeyCode.KEYCODE_RSHIFT = 0;
    MameKeyCode.KEYCODE_LALT = emloader.helper.KeyCode.alt;
    MameKeyCode.KEYCODE_NUMLOCK = 0;
    MameKeyCode.KEYCODE_LWIN = 0;
    MameKeyCode.KEYCODE_RWIN = 0;
    MameKeyCode.KEYCODE_TILDE = 0;
    MameKeyCode.KEYCODE_BACKSPACE = emloader.helper.KeyCode.backspace;
    MameKeyCode.KEYCODE_CLOSEBRACE = 0;
    MameKeyCode.KEYCODE_QUOTE = emloader.helper.KeyCode.singlequote;
    MameKeyCode.KEYCODE_COMMA = emloader.helper.KeyCode.comma;
    MameKeyCode.KEYCODE_SPACE = emloader.helper.KeyCode.space;
    MameKeyCode.KEYCODE_HOME = emloader.helper.KeyCode.home;
    MameKeyCode.KEYCODE_PGUP = emloader.helper.KeyCode.pageup;
    MameKeyCode.KEYCODE_PGDN = emloader.helper.KeyCode.pageup;
    MameKeyCode.KEYCODE_ASTERISK = emloader.helper.KeyCode.multiply;
    MameKeyCode.KEYCODE_DEL_PAD = 0;
    MameKeyCode.KEYCODE_PAUSE = emloader.helper.KeyCode.pauseBreak;
    MameKeyCode.KEYCODE_LCONTROL = emloader.helper.KeyCode.ctrl;
    MameKeyCode.KEYCODE_RALT = 0;
    MameKeyCode.KEYCODE_CAPSLOCK = emloader.helper.KeyCode.capsLock;
    MameKeyCode.KEYCODE_MENU = 0;
    mamejs.MameKeyCode = MameKeyCode;
    class MameKey {
    }
    MameKey.COIN1 = MameKeyCode.KEYCODE_5;
    MameKey.COIN2 = MameKeyCode.KEYCODE_6;
    MameKey.COIN3 = MameKeyCode.KEYCODE_7;
    MameKey.COIN4 = MameKeyCode.KEYCODE_8;
    MameKey.START1 = MameKeyCode.KEYCODE_1;
    MameKey.START2 = MameKeyCode.KEYCODE_2;
    MameKey.START3 = MameKeyCode.KEYCODE_3;
    MameKey.START4 = MameKeyCode.KEYCODE_4;
    MameKey.P1_JOYSTICK_UP = MameKeyCode.KEYCODE_UP;
    MameKey.P1_JOYSTICK_RIGHT = MameKeyCode.KEYCODE_RIGHT;
    MameKey.P1_JOYSTICK_DOWN = MameKeyCode.KEYCODE_DOWN;
    MameKey.P1_JOYSTICK_LEFT = MameKeyCode.KEYCODE_LEFT;
    MameKey.P1_BUTTON1 = MameKeyCode.KEYCODE_LCONTROL;
    MameKey.P1_BUTTON2 = MameKeyCode.KEYCODE_LALT;
    MameKey.P1_BUTTON3 = MameKeyCode.KEYCODE_SPACE;
    MameKey.P1_BUTTON4 = MameKeyCode.KEYCODE_LSHIFT;
    MameKey.P1_BUTTON5 = MameKeyCode.KEYCODE_Z;
    MameKey.P1_BUTTON6 = MameKeyCode.KEYCODE_X;
    MameKey.P2_JOYSTICK_UP = MameKeyCode.KEYCODE_R;
    MameKey.P2_JOYSTICK_RIGHT = MameKeyCode.KEYCODE_G;
    MameKey.P2_JOYSTICK_DOWN = MameKeyCode.KEYCODE_F;
    MameKey.P2_JOYSTICK_LEFT = MameKeyCode.KEYCODE_D;
    MameKey.P2_BUTTON1 = MameKeyCode.KEYCODE_A;
    MameKey.P2_BUTTON2 = MameKeyCode.KEYCODE_S;
    MameKey.P2_BUTTON3 = MameKeyCode.KEYCODE_Q;
    MameKey.P2_BUTTON4 = MameKeyCode.KEYCODE_W;
    MameKey.P2_BUTTON5 = MameKeyCode.KEYCODE_E;
    MameKey.P2_BUTTON6 = MameKeyCode.KEYCODE_U;
    MameKey.UI_CONFIGURE = MameKeyCode.KEYCODE_TAB;
    MameKey.UI_PAUSE = MameKeyCode.KEYCODE_P;
    MameKey.UI_SHOW_FPS = MameKeyCode.KEYCODE_F11;
    mamejs.MameKey = MameKey;
})(mamejs || (mamejs = {}));
/// <reference path="MameKey.ts" />
var mamejs;
(function (mamejs) {
    class ControllersMapping {
    }
    ControllersMapping.player1 = {
        start: mamejs.MameKey.START1,
        coin: mamejs.MameKey.COIN1,
        up: mamejs.MameKey.P1_JOYSTICK_UP,
        right: mamejs.MameKey.P1_JOYSTICK_RIGHT,
        down: mamejs.MameKey.P1_JOYSTICK_DOWN,
        left: mamejs.MameKey.P1_JOYSTICK_LEFT,
        button1: mamejs.MameKey.P1_BUTTON1,
        button2: mamejs.MameKey.P1_BUTTON2,
        button3: mamejs.MameKey.P1_BUTTON3,
        button4: mamejs.MameKey.P1_BUTTON4,
        button5: mamejs.MameKey.P1_BUTTON5,
        button6: mamejs.MameKey.P1_BUTTON6,
    };
    ControllersMapping.player2 = {
        start: mamejs.MameKey.START2,
        coin: mamejs.MameKey.COIN2,
        up: mamejs.MameKey.P2_JOYSTICK_UP,
        right: mamejs.MameKey.P2_JOYSTICK_RIGHT,
        down: mamejs.MameKey.P2_JOYSTICK_DOWN,
        left: mamejs.MameKey.P2_JOYSTICK_LEFT,
        button1: mamejs.MameKey.P2_BUTTON1,
        button2: mamejs.MameKey.P2_BUTTON2,
        button3: mamejs.MameKey.P2_BUTTON3,
        button4: mamejs.MameKey.P2_BUTTON4,
        button5: mamejs.MameKey.P2_BUTTON5,
        button6: mamejs.MameKey.P2_BUTTON6,
    };
    mamejs.ControllersMapping = ControllersMapping;
})(mamejs || (mamejs = {}));
window.JSMESS = window.JSMESS || {};
window.JSMESS.ready = function (f) { f(); };
/// <reference path="MameKey.ts" />
var mamejs;
(function (mamejs) {
    class Ctrlr {
        static generateCfgFile() {
            let mameKeyCodeKey = {};
            for (let mameKeyCode in mamejs.MameKeyCode) {
                if (mamejs.MameKeyCode[mameKeyCode]) {
                    mameKeyCodeKey[mamejs.MameKeyCode[mameKeyCode]] = mameKeyCode;
                }
            }
            // This is the default map for the user keyboard, by default we don't map multiple key touch
            let mameKeyMameKeyCode = {};
            for (let mameKey in mamejs.MameKey) {
                if (typeof mamejs.MameKey[mameKey] === 'number') {
                    mameKeyMameKeyCode[mameKey] = mameKeyCodeKey[mamejs.MameKey[mameKey]];
                }
            }
            let cfgFile = '<mameconfig version="10">' +
                '<system name="default">' +
                '<input>';
            for (let mameKey in mameKeyMameKeyCode) {
                cfgFile += '<port type="' + mameKey + '">' +
                    '<newseq type="standard">' + mameKeyMameKeyCode[mameKey] + '</newseq>' +
                    '</port>';
            }
            cfgFile += '</input>' +
                '</system>' +
                '</mameconfig>';
            return cfgFile;
        }
    }
    mamejs.Ctrlr = Ctrlr;
})(mamejs || (mamejs = {}));
/// <reference path="../../../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="../../emloader/model/IFile.ts" />
/// <reference path="../../emloader/model/IEmloader.ts" />
/// <reference path="../../emloader/Emloader.ts" />
/// <reference path="../../emloader/helper/FileLoader.ts" />
/// <reference path="../model/IResolution.ts" />
/// <reference path="../model/Window.ts" />
/// <reference path="../mamejs.ts" />
/// <reference path="Ctrlr.ts" />
var mamejs;
(function (mamejs) {
    // Main class
    class Mame {
        /**
         * Mame emulator must be loaded before instanciate this class
         */
        constructor(_loader) {
            this._loader = _loader;
            // init the roms folder
            this.loader.FS.mkdir(Mame.ROM_PATH);
            // generate .cfg controller keymaping file, and mount it into FS
            // as this we have full controls on key
            this.loader.FS.mkdir('/ctrlr');
            this.loader.addFile({
                name: 'mamejs.cfg',
                data: emloader.helper.FileLoader.toUint8Array(mamejs.Ctrlr.generateCfgFile()),
            }, '/ctrlr');
        }
        get loader() {
            return this._loader;
        }
        get keyHandler() {
            return this.loader.keyHandler;
        }
        run(args) {
            return Promise.resolve(this.loader.module.callMain(args));
        }
        runGame(driver, resolution) {
            resolution = resolution || Mame.DEFAULT_RESOLUTION;
            return this.run([
                driver,
                '-verbose',
                '-window',
                '-rompath',
                Mame.ROM_PATH,
                '-resolution',
                [resolution.width, resolution.height].join('x'),
                '-samplerate',
                '48000',
                '-ctrlr',
                'mamejs'
            ]);
        }
        addRom(file) {
            this.loader.addFile(file, Mame.ROM_PATH);
        }
        loadRom(url, name, handler) {
            return this.loader.loadFile(url, name, Mame.ROM_PATH, handler);
        }
        loadRoms(files, handler) {
            return this.loader.loadFiles(files, Mame.ROM_PATH, handler);
        }
    }
    Mame.ROM_PATH = '/roms';
    Mame.DEFAULT_RESOLUTION = {
        width: 320,
        height: 224
    };
    mamejs.Mame = Mame;
})(mamejs || (mamejs = {}));
/// <reference path="../emloader/model/IEmloader.ts" />
/// <reference path="../emloader/model/IControls.ts" />
/// <reference path="model/IConfig.ts" />
/// <reference path="../emloader/controllers/Controllers.ts" />
/// <reference path="../emloader/Emloader.ts" />
/// <reference path="mame/ControllersMapping.ts" />
/// <reference path="mame/Mame.ts" />
var mamejs;
(function (mamejs) {
    function load(url, container) {
        return emloader.load(url, container).then((loader) => {
            let mame = new mamejs.Mame(loader);
            mamejs.controllers.setKeyHandler(mame.keyHandler);
            return mame;
        });
    }
    mamejs.load = load;
    function run(config, container) {
        return load(config.emulator, container).then(function (mame) {
            return mame.loadRoms(config.game.files).then(function () {
                return mame.runGame(config.game.driver, config.resolution).then(function () {
                    return mame;
                });
            });
        });
    }
    mamejs.run = run;
    // register available controllers
    // need to transform them into array for emloader.Controllers constructor
    let controlsMapping = Object.keys(mamejs.ControllersMapping).map((mappingName) => {
        return mamejs.ControllersMapping[mappingName];
    });
    mamejs.controllers = new emloader.Controllers(controlsMapping);
})(mamejs || (mamejs = {}));
//# sourceMappingURL=mamejs.js.map