/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Возможно, кому-то покажется, что такое решение выглядит ужасно. Но таким я отвечаю, что они просто хэйтеры
 */

interface EventTarget {
    on: (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ) => EventTarget;
    off: (
        type: string,
        callback: EventListenerOrEventListenerObject,
        options?: EventListenerOptions | boolean,
    ) => EventTarget;
    trigger: (eventName: string) => EventTarget;
}

EventTarget.prototype.on = function (...args) {
    this.addEventListener(...args);
    return this;
};

EventTarget.prototype.off = function (...args) {
    this.removeEventListener(...args);
    return this;
};

EventTarget.prototype.trigger = function (eventName) {
    this.dispatchEvent(new Event(eventName));
    return this;
};

interface Node {
    find: <T extends Element = HTMLElement>(selector: string) => T;
    findAll: <T extends Element = HTMLElement>(selectors: string) => T[];
}

Node.prototype.find = function (...args) {
    return this.querySelector(...args);
};

Node.prototype.findAll = function (...args) {
    return Array.from(this.querySelectorAll(...args));
};

interface Element {
    isVisible: (gap?: number) => boolean;
}

Element.prototype.isVisible = function (gap = 150) {
    const rect = this.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < gap || rect.top - viewHeight >= -gap);
};

declare function $<T extends Element = HTMLElement>(selector: string): T;
window.$ = selector => document.find(selector);

declare function $$<T extends Element = HTMLElement>(selector: string): T[];
window.$$ = selector => document.findAll(selector);
