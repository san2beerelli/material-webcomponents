import { Component } from '@stencil/core';

@Component({
  tag: 'mwc-dialog-header',
  styleUrl: 'mwc-dialog-header.scss',
  shadow: false
})

export class MWCDialogHeader{
  render() {
    return (
         <header class="mdc-dialog__header">
            <h2 class="mdc-dialog__header__title">
                <slot />
            </h2>
        </header>
    )
  }
}
