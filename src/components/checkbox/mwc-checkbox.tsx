import { Component, Element, Prop, Event, EventEmitter } from '@stencil/core';
import {MDCCheckbox} from '@material/checkbox';

@Component({
  tag: 'mwc-checkbox',
  styleUrl: 'mwc-checkbox.scss',
  shadow: false
})
export class MWCCheckbox{

 @Element() checkBoxEl : HTMLElement;
 @Prop() ripple: boolean = true;
 @Prop() disabled: boolean = false;
 @Prop() checkcolor: string;
 @Prop() name: string;
 @Prop() value: string;
 @Prop() checked: boolean = false;
 @Prop() indeterminate: boolean = false;
 @Prop() label : string;
 @Prop() alignlabel: string = 'left';
 @Event() change: EventEmitter;
 inputComp : any;
 checkRipple: any;
 innerStyles:any ;
 checkboxDiv: any;
 elStyleNode: any;
 formFieldDiv: any;
 componentWillLoad(){
      if(this.checkcolor){
        this.checkBoxEl.style.setProperty('--mdc-theme-secondary',`#${this.checkcolor}`);
      }
  }

  componentDidLoad(){
    if(this.ripple){
       this.checkRipple = MDCCheckbox.attachTo(this.checkboxDiv);
    }
    if(this.indeterminate){
      this.checkRipple.indeterminate = this.indeterminate;
    }
    if(this.formFieldDiv && this.alignlabel === 'right'){
      this.formFieldDiv.style.setProperty('flex-direction','row-reverse')
    }
  }
  getStyleNode(){
    var styleNode = document.createElement('style');
       styleNode.type = "text/css";
       var styleText = document.createTextNode(`.mdc-checkbox::before, .mdc-checkbox::after{
                    background-color: #${this.checkcolor}20 !important;
                }`);
      styleNode.appendChild(styleText);
      this.elStyleNode = styleNode;
      this.checkBoxEl.appendChild(this.elStyleNode);
  }
  onFocus(){
    if(this.checkcolor){
     this.getStyleNode()
    }
  }
  onBlur(){
    if(this.checkcolor){
      this.checkBoxEl.removeChild(this.elStyleNode)
    }
  }
  componentDidUnload(){
    if(this.ripple){
        this.checkRipple.destroy()
    }
  }
  renderCheckbox(){
    return(
      <div class="mdc-checkbox" ref={(cbDiv) => { this.checkboxDiv = cbDiv; }}>
        <input type="checkbox" id="my-checkbox" ref={(input) => { this.inputComp = input; }}
               disabled={this.disabled}
               checked={this.checked}
               onFocus = {(evt)=> this.onFocus()}
               onBlur = {(evt)=> this.onBlur()}
               onChange= {(evt)=> this.change.emit(evt)}
               class="mdc-checkbox__native-control"/>
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark__path"
                  fill="none"
                  stroke="white"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
    )
  }
  renderCheckboxWithLabel(){
    return(
      <div class="mdc-form-field" ref={(formFieldDiv) => {this.formFieldDiv = formFieldDiv}}>
        <label >{this.label}</label>
        {this.renderCheckbox()}
      </div>
    )
  }
  render() {
    if(this.label){
      return this.renderCheckboxWithLabel()
    }
    return this.renderCheckbox()
  }
}
