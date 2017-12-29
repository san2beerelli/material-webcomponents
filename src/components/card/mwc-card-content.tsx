import { Component } from '@stencil/core';

@Component({
  tag: 'mwc-card-content',
  styleUrl: 'mwc-card-content.scss',
  shadow: false
})
export class MWCCardContent{
  render() {
    return (
       <section class="mdc-card__supporting-text">
        <slot/>
       </section>
    );
  }
}