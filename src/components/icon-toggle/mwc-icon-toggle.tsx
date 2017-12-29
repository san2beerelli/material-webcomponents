import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';
import {MDCIconToggle} from '@material/icon-toggle';

@Component({
  tag: 'mwc-icon-toggle',
  styleUrl: 'mwc-icon-toggle.scss',
  shadow: false
})
export class MWCIconToggle{

  @Prop() onicon: string;
  @Prop() oniconlabel: string = ' ';
  @Prop() officon: string;
  @Prop() officonlabel: string = ' ';
  @Prop() color: string;
  @Prop() ripple: boolean = true;
  @Prop() disabled: boolean = false;
  @Prop() toggleon:boolean = false;

  @Event() oniconchange: EventEmitter;

  mdcIconToggle: any;
  iconToggle:any;
  elStyleNode: any;
  @Element() iconToggleEl : HTMLElement;

  componentWillLoad(){
      if(this.color){
        this.iconToggleEl.style.setProperty('--mdc-theme-text-secondary-on-light',this.color);
      }
  }
  componentDidLoad(){
      if(this.ripple){
        const me = this;
        this.mdcIconToggle =  MDCIconToggle.attachTo(this.iconToggle);
        this.mdcIconToggle.listen('MDCIconToggle:change',({detail})=>{
             console.log(detail)
            me.oniconchange.emit(detail)
        })
      }
  }
  componentDidUnload(){
       if(this.ripple){
          this.mdcIconToggle.destroy()
       }
  }
  getStyleNode(){
    var styleNode = document.createElement('style');
       styleNode.type = "text/css";
       var styleText = document.createTextNode(`.mdc-icon-toggle::before, .mdc-icon-toggle::after {
                    background-color: ${this.color}20 !important;
                }`);
      styleNode.appendChild(styleText);
      this.elStyleNode = styleNode;
      this.iconToggleEl.appendChild(this.elStyleNode);
  }
  onFocus(){
    if(this.color){
     this.getStyleNode()
    }
  }
  onBlur(){
     if(this.color){
        this.iconToggleEl.removeChild(this.elStyleNode)
     }
  }

  getToggleOn(){
      return `{ "content": "${this.onicon}"}`;
  }
  getToggleOff(){
      return `{ "content": "${this.officon}"}`;
  }
  getIconClassName():string{
      let className: string = "mdc-icon-toggle material-icons";

      if(this.disabled){
          className = `${className} mdc-icon-toggle--disabled`;
      }
      return className;
  }

  render() {
    return (
        <i class={this.getIconClassName()}
            ref={(iconToggle) => { this.iconToggle = iconToggle; }}
            role="button" tabindex="-1"
            aria-pressed={this.toggleon}
            aria-disabled={this.disabled}
            onFocus = {(evt)=> this.onFocus()}
            onBlur = {(evt)=> this.onBlur()}
            data-toggle-on={this.getToggleOn()}
            data-toggle-off={this.getToggleOff()}>
            {this.officon}
        </i>
    )
  }
}
