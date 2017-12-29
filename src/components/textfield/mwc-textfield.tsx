import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCTextField} from '@material/textfield'
@Component({
  tag: 'mwc-textfield',
  styleUrl: 'mwc-textfield.scss',
  shadow: false
})
export class MWCTextfield{

    // TODO - styling

  @Element() switchEl : HTMLElement;
  @Prop() type : string = 'text'; //password
  @Prop() required: boolean = false;
  @Prop() minlength: number = 0;
  @Prop() label: string = 'Password';
  @Prop() value: string = '';
  @Prop() labelposition: string = 'right';
  @Prop() helpertext: string = '';
  @Prop() disabled: boolean = false;
  @Prop() showbox: boolean = false;
  @Prop() fullwidth: boolean = false;
  @Prop() textarea: boolean = false;
  @Prop() outlined: boolean = true;
  @Prop() dense: boolean = false;
  @Prop() focused: boolean = true;
  @Prop() icon : string = '';
  @Prop() iconposition : string = 'leading'; //trailing

  @Event() selected: EventEmitter;

  mdcTextfieldComponent:any;
  mdcTextfield: any;

  componentWillLoad(){
    //  if(this.switchcolor){
       // this.switchEl.style.setProperty('--mdc-theme-secondary',this.switchcolor);
     // }
  }

  componentDidLoad(){
      this.mdcTextfieldComponent = MDCTextField.attachTo(this.mdcTextfield)
  }
  renderLabel(){
      if(this.label){
          return <label htmlFor="basic-switch" class="mdc-switch-label">{this.label}</label>
      }
      return null;
  }
  getDivClassName(){
      let className = '';
      if(this.labelposition == "left"){
          className = "mdc-switch-reverse"
      }else{
          className = "mdc-switch"
      }
      return className;
  }
  getTextfieldClassName(){
      let className = 'mdc-text-field mdc-text-field--upgraded';
      if(this.showbox){
         className = `${className} mdc-text-field--box`
      }
      if(this.fullwidth){
         className = `${className} mdc-text-field--fullwidth`
      }
      if(this.textarea){
         className = `${className} mdc-text-field--textarea`
      }
      if(this.disabled){
         className = `${className}  mdc-text-field--disabled`
      }
      if(this.outlined){
         className = `${className}  mdc-text-field--outlined`
      }
      if(this.dense){
         className = `${className}  mdc-text-field--dense`
      }
      if(this.focused){
         className = `${className}  mdc-text-field--focused`
      }
      if(this.icon && this.iconposition === "leading"){
          className = `${className} mdc-text-field--with-leading-icon`
      }
      if(this.icon && this.iconposition === "trailing"){
          className = `${className} mdc-text-field--with-trailing-icon`
      }
      return className;
  }
  renderInputOrTextarea(){
      if(this.textarea){
          return(
               <textarea
                    class="mdc-text-field__input">
                </textarea>
          )
      }
      return (
          <input type={this.type}
                class="mdc-text-field__input"
                required={this.required}
                minlength={this.minlength}
                value={this.value}
                disabled = {this.disabled}
           />
      )
  }
  renderOutlined(){
      if(this.outlined){
          return(
              <div>
              <div class="mdc-text-field__outline">
                    <svg>
                    <path class="mdc-text-field__outline-path"/>
                    </svg>
                </div>
                <div class="mdc-text-field__idle-outline"></div>
              </div>
          )
      }
  }
  renderHelperText(){
      if(this.helpertext){
          return (
            <p id="my-text-field-helper-text" class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                {this.helpertext}
            </p>
          )
      }
      return null;
  }
  renderIcon(){
      if(this.icon){
          return (
              <i class="material-icons mdc-text-field__icon" tabindex="0">
              {this.icon}
              </i>
          )
      }
      return null;
  }

  render() {
    return (
        <div>
            <div class={this.getTextfieldClassName()}
            ref={(mdcTextfield) => { this.mdcTextfield = mdcTextfield; }}>
            {this.renderIcon()}
            {this.renderInputOrTextarea()}
                <label class="mdc-text-field__label mdc-text-field__label--float-above" htmlfor="pre-filled">
                 {this.label}
                </label>
                <div class="mdc-text-field__bottom-line"></div>
            </div>
            {this.renderHelperText()}
        </div>
    )
  }
}