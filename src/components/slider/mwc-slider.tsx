import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCSlider} from '@material/slider';

@Component({
  tag: 'mwc-slider',
  styleUrl: 'mwc-slider.scss',
  shadow: false
})
export class MWCSlider{

  @Element() sliderEl : HTMLElement;
  @Prop() value : number = 50;
  @Prop() min : number = 0;
  @Prop() max : number = 100;
  @Prop() step : number = 0;
  @Prop() disabled : boolean = false;
  @Prop() discrete : boolean = false;
  @Prop() slidercolor : string = "#000000";

  @Method()
  stepup(amount:number = 1){
    this.mdcSlider.stepUp(amount)
  }

  @Method()
  stepdown(amount:number = 1){
    this.mdcSlider.stepDown(amount)
  }

  @Event() change: EventEmitter;
  @Event() inputchange: EventEmitter;

  mdcSlider: any;
  elStyleNode:any;

  getStyleNode(){
    var styleNode = document.createElement('style');
       styleNode.type = "text/css";
       var styleText = document.createTextNode(`.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{
                    background-color: ${this.slidercolor}20 !important;
                }`);
      styleNode.appendChild(styleText);
      this.elStyleNode = styleNode;
      this.sliderEl.appendChild(this.elStyleNode);
  }

   componentWillLoad(){
      if(this.slidercolor){
        this.sliderEl.style.setProperty('--mdc-theme-secondary',this.slidercolor);
      }
  }

  componentDidLoad(){
      this.mdcSlider = MDCSlider.attachTo(this.mdcSlider)
      this.mdcSlider.listen('MDCSlider:change', () => {
          this.change.emit(this.mdcSlider.value);
      });
      this.mdcSlider.listen('MDCSlider:input', () => {
          this.inputchange.emit(this.mdcSlider.value);
      });
      this.getStyleNode()
  }
  componentDidUnload(){
      this.mdcSlider.destroy()
      this.sliderEl.removeChild(this.elStyleNode)
  }

  // Todo Discrete  // mdc-slider--display-markers

  getGridListClassName(){
      let className: string = 'mdc-grid-list';
      if(this.discrete){
          className = ` ${className} mdc-grid-list--tile-aspect-${this.discrete}`;
      }
      return className;
  }

  render() {
    return (
         <div class="mdc-slider mdc-slider--discrete"
         tabindex="0" role="slider" ref={(mdcSlider) => { this.mdcSlider = mdcSlider; }}
            aria-valuemin={this.min}
            aria-valuemax={this.max}
            aria-valuenow={this.value}
            data-step= {this.step}
            aria-label="Select Value">
        <div class="mdc-slider__track-container">
            <div class="mdc-slider__track"></div>
        </div>
        <div class="mdc-slider__thumb-container">
            <div class="mdc-slider__pin">
            <span class="mdc-slider__pin-value-marker"></span>
            </div>
            <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
            </svg>
            <div class="mdc-slider__focus-ring"></div>
        </div>
        </div>
    )
  }
}