import { Component, Prop, Element } from '@stencil/core';
import {MDCSelect} from '@material/select';

@Component({
  tag: 'mwc-select',
  styleUrl: 'mwc-select.scss',
  shadow: false
})
export class MWCSelect{

  @Element() selectEl : HTMLElement;
  @Prop() borderlist : boolean = true;
  @Prop() checked : boolean = false;
  @Prop() dense: boolean = false;
  @Prop() ripple: boolean = true;
  @Prop() radiocolor: string;
  @Prop() name: string;

  mdcSelectComponent:any;
  mdcSelect: any;
  elStyleNode: any;

  componentWillLoad(){
      if(this.radiocolor){
       // this.radioEl.style.setProperty('--mdc-theme-secondary',this.radiocolor);
      }
  }

  componentDidLoad(){
      this.mdcSelectComponent = MDCSelect.attachTo(this.mdcSelect)
       if(this.ripple){
         // this.radioRipple =  MDCRadio.attachTo(this.mdcRadio);
      //  this.radioRipple.unbounded = true
       }
  }
  componentDidUnload(){
      this.mdcSelectComponent.destroy()
      if(this.ripple){
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
    //  this.radioEl.appendChild(this.elStyleNode);
  }
  onFocus(){
    if(this.radiocolor){
     this.getStyleNode()
    }
  }
  onBlur(){
    if(this.radiocolor){
     // this.radioEl.removeChild(this.elStyleNode)
     {/* <div class="mdc-radio"  ref={(mdcRadio) => { this.mdcRadio = mdcRadio; }}>
        <input class="mdc-radio__native-control"
                type="radio" checked={this.checked}
                name={this.name}
                onFocus = {(evt)=> this.onFocus()}
                onBlur = {(evt)=> this.onBlur()}/>
        <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
        </div> */}
    }
  }

  render() {
    return (
        <div class="mdc-select" role="listbox" ref={(mdcSelect) => { this.mdcSelect = mdcSelect; }}>
        <div class="mdc-select__surface mdc-ripple-upgraded" tabindex="0">
            <div class="mdc-seect__label">Pick a Food Group</div>
            <div class="mdc-select__selected-text"></div>
            <div class="mdc-select__bottom-line"></div>
        </div>
        <div class="mdc-simple-menu mdc-select__menu">
            <ul class="mdc-list mdc-simple-menu__items">
            <slot />
            {/* <li class="mdc-list-item" role="option" tabindex="0">
                Bread, Cereal, Rice, and Pasta
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
                Vegetables
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
                Fruit
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
                Milk, Yogurt, and Cheese
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
                Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
            </li>
            <li class="mdc-list-item" role="option" tabindex="0">
                Fats, Oils, and Sweets
            </li> */}
            </ul>
        </div>
        </div>

    )
  }
}