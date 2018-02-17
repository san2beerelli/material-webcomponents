import { getTheme } from '../util/mwc-util';
import setupJss from '../styles/setup-jss';
import deepmerge from 'deepmerge';
import createTheme from '../styles/create-theme';
const theme = createTheme(getTheme());
class CardContentStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                padding: theme.spacing.unit * 2,
                '&:last-child': {
                    paddingBottom: theme.spacing.unit * 3,
                },
            },
        };
    }
    setup(style) {
        const mergedStyles = deepmerge.all([this.defaultStyle, style]);
        this.jss = new setupJss();
        this.jss.attachStyleSheet(mergedStyles);
    }
    getClassName(type) {
        return this.jss.getClassName(type);
    }
}
export default CardContentStyle;
