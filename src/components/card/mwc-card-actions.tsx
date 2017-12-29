import { Component } from '@stencil/core';

@Component({
  tag: 'mwc-card-actions',
  styleUrl: 'mwc-card-actions.scss',
  shadow: false
})
export class MWCCardActions{
  render() {
    return (
        <section class="mdc-card__actions">
         <slot />
       </section>
    )
  }
}
