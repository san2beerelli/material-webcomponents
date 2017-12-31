import { Component, Prop, Element  } from '@stencil/core';
@Component({
  tag: 'mwc-viewport',
  shadow: false
})
export class MWCViewport{
  @Element() viewportEl : HTMLDivElement;
  @Prop() backgroundcolor: string = "";
  mwcTypograpyDiv: any;
  componentWillLoad(){
      let viewportStyle = `
        height : 100vh;
        width  : 100vw;
        display : block;
        overflow: hidden;
      `
      if(this.backgroundcolor){
          viewportStyle = `${viewportStyle} background-color : ${this.backgroundcolor}`
      }
      this.viewportEl.setAttribute('style',viewportStyle)
  }

  render() {
    return (
            <slot />
    )
  }
}
