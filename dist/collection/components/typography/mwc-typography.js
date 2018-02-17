import TypographyStyle from './mwc-typography.style';
import { typographyType, displayType, alignType } from './mwc-typograpy-types';
import deepmerge from 'deepmerge';
export class MWCTypography {
    constructor() {
        this.type = "display1";
        this.display = 'block';
        this.align = 'left';
        this.nowrap = false;
        this.gutterbottom = false;
    }
    componentWillLoad() {
        const typeStyle = new TypographyStyle();
        let changeStyle = {
            root: {
                display: this.display
            }
        };
        if (this.color) {
            changeStyle[this.type] = { 'color': this.color };
        }
        if (this.styles) {
            if (changeStyle[this.type]) {
                changeStyle[this.type] = deepmerge.all([changeStyle[this.type], this.styles]);
            }
            else {
                changeStyle[this.type] = this.styles;
            }
        }
        typeStyle.setup(changeStyle);
        let classNames = [];
        classNames.push('root');
        classNames.push(this.type);
        classNames.push(`align${this.align}`);
        if (this.nowrap) {
            classNames.push('nowrap');
        }
        if (this.gutterbottom) {
            classNames.push('gutterbottom');
        }
        this.typographyEl.className = typeStyle.getClassName(classNames);
    }
    render() {
        return (h("slot", null));
    }
}
