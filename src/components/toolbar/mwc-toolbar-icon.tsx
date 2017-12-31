import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-toolbar-icon',
  styleUrl: 'mwc-toolbar-icon.scss',
  shadow: false
})
export class MWCToolbarIcon {

  @Element() toolbarIconEl : HTMLAnchorElement;

  componentWillLoad(){
      this.toolbarIconEl.className = this.getIconClassName()
  }

  getIconClassName(){
      let className = 'mdc-toolbar__menu-icon material-icons mwc-menu-icon';
      return className;
  }

  render() {
    return (
       <slot />
    )
  }
}