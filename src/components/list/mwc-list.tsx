import { Component, Prop, Element } from '@stencil/core';
import ListStyle from './mwc-list-style'

@Component({
  tag: 'mwc-list',
  //styleUrl: 'mwc-list.scss',
  shadow: false
})
export class MWCList{

  @Element() listEl : HTMLElement;
  @Prop() borderlist : boolean = true;
  @Prop() dense: boolean = false;
  listStyle : any;

  componentWillLoad(){
      this.listStyle = new ListStyle()
       let changeStyle: object = {

      }
     this.listStyle.setup(changeStyle)
  }
  getClassNames():Array<string>{
      let classNames:Array<string> = ['root']
      return classNames
  }

  render() {
    return (
     <ul class={this.listStyle.getClassName(this.getClassNames())}>
         <slot />
     </ul>
    )
  }
}
