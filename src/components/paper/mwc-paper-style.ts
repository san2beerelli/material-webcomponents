import {getTheme} from '../util/mwc-util'
import setupJss from '../styles/setup-jss'
import deepmerge from 'deepmerge'
import createTheme from '../styles/create-theme'

const theme = createTheme(getTheme())

const shadows = {};
  theme.shadows.forEach((shadow, index) => {
    shadows[`shadow${index}`] = {
      boxShadow: shadow,
    };
});

class PaperStyle{
   defaultStyle: object = {
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    rounded: {
      borderRadius: 2,
    },
    ...shadows
   }

  jss:any;
  setup(style:object){
    const mergedStyles = deepmerge.all([this.defaultStyle,style])
    this.jss = new setupJss()
    this.jss.attachStyleSheet(mergedStyles)
  }
  getClassName(type:Array<string>):string{
    return this.jss.getClassName(type)
  }

}

export default PaperStyle;