import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-list',
  styleUrl: 'mwc-list.scss',
  shadow: false
})
export class MWCList{

  @Element() listEl : HTMLElement;
  @Prop() borderlist : boolean = true;
  @Prop() dense: boolean = false;

   getListClassName(){
      let className: string = 'mdc-list';
      if(this.borderlist){
          className = ` ${className} webmd-bordered-list`;
      }
      if(this.dense){
          className = ` ${className} mdc-list--dense`;
      }
      return className;
  }

  render() {
    return (
     <ul class={this.getListClassName()}>
         <slot />
     </ul>
    )
  }
}
