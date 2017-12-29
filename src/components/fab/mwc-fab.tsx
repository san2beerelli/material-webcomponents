import { Component, Prop, Element } from '@stencil/core';
import {MDCRipple} from '@material/ripple';

@Component({
  tag: 'mwc-fab',
  styleUrl: 'mwc-fab.scss',
  shadow: false
})
export class MWCFab{

  @Prop() icon: string;
  @Prop() mini: boolean = false;
  @Prop() backgroundcolor: string;
  @Prop() color: string;
  @Prop() ripple: boolean = true;

  buttonRipple: any;
  fab:any;
  @Element() fabEl : HTMLElement;

  componentWillLoad(){

      if(this.color){
        this.fabEl.style.setProperty('--mdc-theme-text-primary-on-secondary',this.color);
      }
      if(this.backgroundcolor){
        this.fabEl.style.setProperty('--mdc-theme-secondary',this.backgroundcolor);
      }
  }
  componentDidLoad(){
      if(this.ripple){
         this.buttonRipple =  MDCRipple.attachTo(this.fab);
      }
  }
  componentDidUnload(){
       if(this.ripple){
          this.buttonRipple.destroy()
       }
  }
   getFabClassName():string{
      let className: string = 'mdc-fab material-icons';

      if(this.mini){
          className = ` ${className} mdc-fab--mini`;
      }
      return className;
  }


  render() {
    return (
        <button class={this.getFabClassName()} ref={(fab) => { this.fab = fab; }}>
            <span class="mdc-fab__icon">
                {this.icon}
            </span>
        </button>
    )
  }
}
