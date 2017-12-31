import { Component, Prop, Element  } from '@stencil/core';
@Component({
  tag: 'mwc-container',
  shadow: false
})
export class MWCContainer{
  @Element() containerEl : HTMLDivElement;
  @Prop() backgroundcolor: string = "";
  @Prop() height: string;
  @Prop() width: string;
  @Prop() flexdirection: string = "row";
  //row-reverse,column,column-reverse,row
  @Prop() flexwrap: string="nowrap";
  //wrap,wrap-reverse
  @Prop() justifycontent: string="flex-start";
  //flex-end,center,space-between,space-around,space-evenly
  @Prop() alignitems: string="flex-start";
  //flex-start,flex-end,center,baseline,stretch
  @Prop() aligncontent: string="flex-start";
  //flex-start,flex-end,center,space-between,space-around,stretch
  componentWillLoad(){
      let containerStyle = `display : flex;`
      if(this.height){
          containerStyle = `${containerStyle} height:${this.height};`
      }
      if(this.width){
          containerStyle = `${containerStyle} width:${this.width};`
      }
      if(this.flexdirection){
          containerStyle = `${containerStyle} flex-direction:${this.flexdirection};`
      }
      if(this.flexwrap){
          containerStyle = `${containerStyle} flex-wrap:${this.flexwrap};`
      }
      if(this.justifycontent){
          containerStyle = `${containerStyle} justify-content:${this.justifycontent};`
      }
      if(this.alignitems){
          containerStyle = `${containerStyle} align-items:${this.alignitems};`
      }
      if(this.aligncontent){
          containerStyle = `${containerStyle} align-content:${this.aligncontent};`
      }
      if(this.backgroundcolor){
          containerStyle = `${containerStyle} background-color:${this.backgroundcolor};`
      }
      this.containerEl.setAttribute('style',containerStyle)
  }

  render() {
    return (
        <slot />
    )
  }
}
