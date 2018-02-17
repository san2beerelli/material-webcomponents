import { getTheme } from '../util/mwc-util';
import setupJss from '../styles/setup-jss';
import deepmerge from 'deepmerge';
import createTheme from '../styles/create-theme';
const theme = createTheme(getTheme());
const shadows = {};
theme.shadows.forEach((shadow, index) => {
    shadows[`shadow${index}`] = {
        boxShadow: shadow,
    };
});
class PaperStyle {
    constructor() {
        this.defaultStyle = Object.assign({ root: {
                backgroundColor: theme.palette.background.paper,
            }, rounded: {
                borderRadius: 2,
            } }, shadows);
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
export default PaperStyle;
