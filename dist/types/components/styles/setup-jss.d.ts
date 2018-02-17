declare class SetupJss {
    jss: any;
    sheet: any;
    constructor();
    attachStyleSheet(styles: any): void;
    getClassName(style: string | Array<string>): any;
}
export default SetupJss;
