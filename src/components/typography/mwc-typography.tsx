import { Component, Prop, Element  } from '@stencil/core';
import TypographyStyle from './mwc-typography.style'
import { typographyType, displayType, alignType } from './mwc-typograpy-types'
import deepmerge from 'deepmerge'

@Component({
  tag: 'mwc-typography',
  shadow: false
})

export class MWCTypography {
  @Element() typographyEl : HTMLElement;
  @Prop() type: typographyType = "display1"
  @Prop() color: string;
  @Prop() display: displayType = 'block'
  @Prop() align: alignType = 'left'
  @Prop() nowrap : boolean = false
  @Prop() gutterbottom : boolean = false
  @Prop() styles : any

  componentWillLoad(){
    const typeStyle = new TypographyStyle();
    let changeStyle:object = {
      root:{
        display : this.display
      }
    }
    if(this.color){
      changeStyle[this.type] = {'color': this.color};
    }
    if(this.styles){
      if(changeStyle[this.type])
      {
       changeStyle[this.type] = deepmerge.all([changeStyle[this.type],this.styles])
      }else{
        changeStyle[this.type] = this.styles
      }
    }

    typeStyle.setup(changeStyle)
    let classNames: Array<string> = []
    classNames.push('root')
    classNames.push(this.type)
    classNames.push(`align${this.align}`)
    if(this.nowrap){
      classNames.push('nowrap')
    }
    if(this.gutterbottom){
      classNames.push('gutterbottom')
    }
    this.typographyEl.className = typeStyle.getClassName(classNames)
  }

  render() {
    return (
      <slot />
    )
  }
}
