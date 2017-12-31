import { Component, Prop, Element } from '@stencil/core';
import {MDCRipple} from '@material/ripple';
@Component({
  tag: 'mwc-button',
  styleUrl: 'mwc-button.scss',
  shadow: false
})
export class MWCButton{

  @Prop() icon: string;
  @Prop() raised: boolean = false;
  @Prop() unelevated: boolean = false;
  @Prop() stroked: boolean = false;
  @Prop() dense: boolean = false;
  @Prop() compact: boolean = false;
  @Prop() color: string;
  @Prop() backgroundcolor: string;
  @Prop() disabled: boolean = false;
  @Prop() ripple: boolean = true;
  @Prop() href: string;
  buttonRipple: any;
  mwcButton:any;
  @Element() btnEl : HTMLElement;

  getButtonClassName():string{
      let className: string = "mdc-button";
      if(this.raised){
          className = `${className} mdc-button--raised`;
      }
      if(this.unelevated){
          className = `${className} mdc-button--unelevated`;
      }
      if(this.stroked){
          className = `${className} mdc-button--stroked`;
      }
      if(this.dense){
          className = `${className} mdc-button--dense`;
      }
      if(this.compact){
          className = `${className} mdc-button--compact`;
      }
      return className;
  }
  componentWillLoad(){
      if(this.color && this.raised){
        this.btnEl.style.setProperty('--mdc-theme-text-primary-on-primary',this.color);
      }else if(this.color){
        this.btnEl.style.setProperty('--mdc-theme-primary',this.color);
      }
      if(this.backgroundcolor){
        this.btnEl.style.setProperty('--mdc-theme-primary',this.backgroundcolor);
      }
  }
  componentDidLoad(){
      if(this.ripple){
         this.buttonRipple =  MDCRipple.attachTo(this.mwcButton);
      }
  }
  componentDidUnload(){
       if(this.ripple){
          this.buttonRipple.destroy()
       }
  }
  renderIcon(){
      if(this.icon){
          return(
              <i class="material-icons mwc-icon">{this.icon}</i>
          )
      }
      return null;
  }
  renderButton(){
      if(this.href){
          return(
             <a href={this.href} class={this.getButtonClassName()}>
                <slot />
             </a>
          )
      }
      return (
           <button disabled={this.disabled} ref={(mwcButton) => { this.mwcButton = mwcButton; }}
           class={this.getButtonClassName()}>
            {this.renderIcon()}
            <slot />
          </button>
      )
  }

  render() {
    return this.renderButton()
  }
}
