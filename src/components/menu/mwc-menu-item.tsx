import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mwc-menu-item',
  styleUrl: 'mwc-menu-item.scss',
  shadow: false
})
export class MWCMenuItem{
  @Prop() disabled: boolean = false;
  @Prop() role: string = "menuitem";  //option

  render() {
    return (
        <li class="mdc-list-item"
        role={this.role}
        tabindex={this.disabled ? -1 : 0}
        aria-disabled={this.disabled}>
           <slot />
       </li>
    )
  }
}