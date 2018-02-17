import {getTheme} from '../util/mwc-util'
import setupJss from '../styles/setup-jss'
import deepmerge from 'deepmerge'

const typography = getTheme()['typography']
class TypographyStyle{
  defaultStyle: object = {
    root: {
      display: 'block',
      margin: 0,
     },
    display4: typography['display4'],
    display3: typography['display3'],
    display2: typography['display2'],
    display1: typography['display1'],
    headline: typography['headline'],
    title: typography['title'],
    subheading: typography['subheading'],
    body2: typography['body2'],
    body1: typography['body1'],
    caption: typography['caption'],
    button: typography['button'],
    alignleft: {
      textAlign: 'left',
    },
    aligncenter: {
       textAlign: 'center',
    },
    alignright: {
      textAlign: 'right',
    },
    alignjustify: {
      textAlign: 'justify',
    },
    nowrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    gutterbottom: {
      marginBottom: '0.35em',
    },
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
export default TypographyStyle