var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Easing, Duration } from './transition';
export const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};
// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
export const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
};
export const formatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;
export const isString = (value) => typeof value === 'string';
export const isNumber = (value) => !Number.isNaN(parseFloat(value));
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */
export default {
    easing,
    duration,
    create(props = ['all'], options = {}) {
        const { duration: durationOption = duration.standard, easing: easingOption = easing.easeInOut, delay = 0 } = options, other = __rest(options, ["duration", "easing", "delay"]);
        return (Array.isArray(props) ? props : [props])
            .map(animatedProp => `${animatedProp} ${formatMs(durationOption)} ${easingOption} ${formatMs(delay)}`)
            .join(',');
    },
    getAutoHeightDuration(height) {
        if (!height) {
            return 0;
        }
        const constant = height / 36;
        // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
        return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    },
};
