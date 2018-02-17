import { getTheme } from '../util/mwc-util';
import setupJss from '../styles/setup-jss';
import deepmerge from 'deepmerge';
import createTheme from '../styles/create-theme';
const theme = createTheme(getTheme());
class ListStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                flex: '1 1 auto',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                position: 'relative',
            },
            padding: {
                paddingTop: theme.spacing.unit,
                paddingBottom: theme.spacing.unit,
            },
            dense: {
                paddingTop: theme.spacing.unit / 2,
                paddingBottom: theme.spacing.unit / 2,
            },
            subheader: {
                paddingTop: 0,
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
export default ListStyle;
