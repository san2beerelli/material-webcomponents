import { Component } from '@stencil/core';

@Component({
  tag: 'mwc-dialog-body',
  styleUrl: 'mwc-dialog-body.scss',
  shadow: false
})
export class MWCDialogBody{
  render() {
    return (
        <section class="mdc-dialog__body">
         <slot />
        </section>
    );
  }
}