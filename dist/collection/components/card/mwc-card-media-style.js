import { getTheme } from '../util/mwc-util';
import setupJss from '../styles/setup-jss';
import deepmerge from 'deepmerge';
import createTheme from '../styles/create-theme';
const theme = createTheme(getTheme());
class CardMediaStyle {
    constructor() {
        this.defaultStyle = {
            root: {
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            },
            rootMedia: {
                width: '100%',
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
export default CardMediaStyle;
