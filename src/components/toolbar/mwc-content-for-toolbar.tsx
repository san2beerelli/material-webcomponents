import { Component, Element } from '@stencil/core';

@Component({
  tag: 'mwc-content-for-toolbar',
  shadow: false
})
export class MWCContentForToolbar{

  @Element() contentToolbarEl : HTMLMainElement;

  componentWillLoad(){
      this.contentToolbarEl.className = this.getIconClassName()
  }

  getIconClassName(){
      let className = 'mdc-toolbar-fixed-adjust';
      return className;
  }

  render() {
    return (
       <slot />
    )
  }
}