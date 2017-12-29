import { Component, Prop, Element } from '@stencil/core';
import {MDCRadio} from '@material/radio';

@Component({
  tag: 'mwc-radio',
  styleUrl: 'mwc-radio.scss',
  shadow: false
})
export class MWCRadio{

  @Element() radioEl : HTMLElement;
  @Prop() borderlist : boolean = true;
  @Prop() checked : boolean = false;
  @Prop() dense: boolean = false;
  @Prop() ripple: boolean = true;
  @Prop() radiocolor: string;
  @Prop() name: string;

  radioRipple:any;
  mdcRadio: any;
  elStyleNode: any;

  componentWillLoad(){
      if(this.radiocolor){
        this.radioEl.style.setProperty('--mdc-theme-secondary',this.radiocolor);
      }
  }

  componentDidLoad(){
       if(this.ripple){
          this.radioRipple =  MDCRadio.attachTo(this.mdcRadio);
      //  this.radioRipple.unbounded = true
       }
  }
  componentDidUnload(){
      if(this.ripple){
        this.radioRipple.destroy()
      }
  }

   getListClassName(){
      let className: string = 'mdc-list';
      if(this.borderlist){
          className = ` ${className} webmd-bordered-list`;
      }
      if(this.dense){
          className = ` ${className} mdc-list--dense`;
      }
      return className;
  }

  getStyleNode(){
    var styleNode = document.createElement('style');
       styleNode.type = "text/css";
       var styleText = document.createTextNode(`.mdc-radio::before, .mdc-radio::after{
                    background-color: ${this.radiocolor}20 !important;
                }`);
      styleNode.appendChild(styleText);
      this.elStyleNode = styleNode;
      this.radioEl.appendChild(this.elStyleNode);
  }
  onFocus(){
    if(this.radiocolor){
     this.getStyleNode()
    }
  }
  onBlur(){
    if(this.radiocolor){
      this.radioEl.removeChild(this.elStyleNode)
    }
  }

  render() {
    return (
     <div class="mdc-radio"  ref={(mdcRadio) => { this.mdcRadio = mdcRadio; }}>
        <input class="mdc-radio__native-control"
                type="radio" checked={this.checked}
                name={this.name}
                onFocus = {(evt)=> this.onFocus()}
                onBlur = {(evt)=> this.onBlur()}/>
        <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
        </div>
    )
  }
}