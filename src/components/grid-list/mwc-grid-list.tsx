import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-grid-list',
  styleUrl: 'mwc-grid-list.scss',
  shadow: false
})
export class MWCGridList{

  @Element() gridListEl : HTMLElement;
  @Prop() tilewidth : string;
  @Prop() tiletitleposition : string;
  @Prop() aspectratio : string;
  /*
    1x1
    16x9
    2x3
    3x2
    4x3
    3x4
 */
  componentWillLoad(){
      if(this.tilewidth){
        this.gridListEl.style.setProperty('--mdc-grid-list-tile-width', this.tilewidth);
      }
  }

   getGridListClassName(){
      let className: string = 'mdc-grid-list';
      if(this.aspectratio){
          className = ` ${className} mdc-grid-list--tile-aspect-${this.aspectratio}`;
      }
      if(this.tiletitleposition === "top"){
          className = ` ${className} mdc-grid-list--header-caption`;
      }
      return className;
  }


  render() {
    return (
        <div class={this.getGridListClassName()}>
            <ul class="mdc-grid-list__tiles">
               <slot />
            </ul>
        </div>
    )
  }
}
