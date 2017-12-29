import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCSimpleMenu} from '@material/menu';

@Component({
  tag: 'mwc-menu',
  styleUrl: 'mwc-menu.scss',
  shadow: false
})
export class MWCMenu{

  @Element() menuEl : HTMLElement;
  @Prop() open : boolean = false;

  @Method()
  show(focusIndex:number){
      if(focusIndex){
        this.mdcMenuComponent.show({focusIndex})
      }else{
        this.mdcMenuComponent.show()
      }
  }

  @Method()
  hide(){
    this.mdcMenuComponent.hide()
  }

  @Event() selected: EventEmitter;

  mdcMenuComponent:any;
  mdcMenu: any;

  componentDidLoad(){
      this.mdcMenuComponent = MDCSimpleMenu.attachTo(this.mdcMenu)
    if(this.open){
        this.mdcMenuComponent.open = true;
    }
    this.mdcMenu.addEventListener('MDCSimpleMenu:selected', (evt) => {
        this.selected.emit(evt)
    });
  }
  componentDidUnload(){
      this.mdcMenuComponent.destroy()
  }

  render() {
    return (
         <div class="mdc-simple-menu"
            tabindex="-1"
            ref={(mdcMenu) => { this.mdcMenu = mdcMenu; }}>
            <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
            <slot />
            </ul>
        </div>
    )
  }
}