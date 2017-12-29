import { Component, Prop, Element } from '@stencil/core';
import {MDCRipple} from '@material/ripple';

@Component({
  tag: 'mwc-list-item',
  styleUrl: 'mwc-list-item.scss',
  shadow: false
})
export class MWCListItem{

  @Element() listItemEl : HTMLElement;
  @Prop() ripple: boolean = true;
  @Prop() interactive: boolean = true;

  listItemRipple:any;
  listItem:any;

  componentWillLoad(){
     // if(this.tilewidth){
       // this.gridListEl.style.setProperty('--mdc-grid-list-tile-width', this.tilewidth);
     // }
  }

   componentDidLoad(){
       if(this.ripple){
          this.listItemRipple =  MDCRipple.attachTo(this.listItem);
      //  this.listItemRipple.unbounded = true
       }
  }
  componentDidUnload(){
      if(this.ripple){
        this.listItemRipple.destroy()
      }
  }

   getListItemClassName(){
      let className: string = 'mdc-list-item';
      if(this.interactive){
          className = ` ${className} webmd-list-item`;
      }
      return className;
  }

  render() {
    return (
       <li class={this.getListItemClassName()} ref={(listItem) => { this.listItem = listItem; }}>
         <slot />
       </li>
    )
  }
}
