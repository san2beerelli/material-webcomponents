import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-grid-list-tile',
  styleUrl: 'mwc-grid-list-tile.scss',
  shadow: false
})
export class MWCGridListTile{

  @Element() gridListTileEl : HTMLElement;
  @Prop() titlebackgroundcolor : string;
  tileTitle:any;

  componentWillLoad(){
      if(this.titlebackgroundcolor){
          this.gridListTileEl.style.setProperty('--mdc-theme-primary', `${this.titlebackgroundcolor}`);
      }
  }
  componentDidLoad(){
      this.tileTitle.style.setProperty('height', 'auto');
  }

  render() {
    return (
        <li class="mdc-grid-tile">
            <div class="mdc-grid-tile__primary">
            <div class="mdc-grid-tile__primary-content">
               <slot name="tile-content" />
            </div>
            </div>
            <span class="mdc-grid-tile__secondary" ref={(tileTitle) => { this.tileTitle = tileTitle; }}>
                <slot name="tile-title" />
            </span>
        </li>
    )
  }
}
