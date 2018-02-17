import { Component } from '@stencil/core';
import CardContentStyle from './mwc-card-content-style'

@Component({
  tag: 'mwc-card-content',
  shadow: false
})
export class MWCCardContent{
  cardContentStyle:any;
  componentWillLoad(){
      this.cardContentStyle = new CardContentStyle()
       let changeStyle: object = {
      }
     this.cardContentStyle.setup(changeStyle)
  }
  getClassNames():Array<string>{
      let classNames:Array<string> = ['root']
      return classNames
  }
  render() {
    return (
       <section class={this.cardContentStyle.getClassName(this.getClassNames())}>
         <slot/>
       </section>
    );
  }
}