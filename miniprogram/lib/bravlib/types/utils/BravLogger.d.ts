import BravLibType from '../typings';
export declare class BravLogger {
    static LOG_LEVEL_NONE: number;
    static LOG_LEVEL_ERROR: number;
    static LOG_LEVEL_ALL: number;
    static loggerLevel: number;
    static loggerDelegate: BravLibType.BravLoggerDelegate | undefined;
    static log(tag: string, ...args: any): void;
    static error(tag: string, ...args: any): void;
}
