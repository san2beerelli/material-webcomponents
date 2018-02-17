import { Easing, Duration } from './transition';
export declare const easing: Easing;
export declare const duration: Duration;
export declare const formatMs: (milliseconds: number) => string;
export declare const isString: (value: any) => boolean;
export declare const isNumber: (value: any) => boolean;
declare const _default: {
    easing: Easing;
    duration: Duration;
    create(props?: string | string[], options?: {
        prop?: string;
        duration?: number;
        easing?: string;
        delay?: number;
    }): string;
    getAutoHeightDuration(height?: number): number;
};
export default _default;
