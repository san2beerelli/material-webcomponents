import { typographyType, displayType, alignType } from './mwc-typograpy-types';
export declare class MWCTypography {
    typographyEl: HTMLElement;
    type: typographyType;
    color: string;
    display: displayType;
    align: alignType;
    nowrap: boolean;
    gutterbottom: boolean;
    styles: any;
    componentWillLoad(): void;
    render(): JSX.Element;
}
