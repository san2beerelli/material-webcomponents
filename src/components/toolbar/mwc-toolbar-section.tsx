import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mwc-toolbar-section',
  shadow: false
})
export class MWCToolbarSection{

  @Element() toolbarSectionEl : HTMLElement;
  @Prop() align: string;

  componentWillLoad(){
     this.toolbarSectionEl.className = this.getSectionClassName()
  }
  
  getSectionClassName(){
      let className = 'mdc-toolbar__section';
      if(this.align === "start"){
         className = `${className} mdc-toolbar__section--align-start`
      }else if(this.align === "end"){
         className = `${className} mdc-toolbar__section--align-end`
      }
      return className;
  }

  render() {
    return (
         <slot />
    )
  }
}