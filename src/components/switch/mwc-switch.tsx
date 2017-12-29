import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mwc-switch',
  styleUrl: 'mwc-switch.scss',
  shadow: false
})
export class MWCSwitch{

  @Element() switchEl : HTMLElement;
  @Prop() checked : boolean = false;
  @Prop() switchcolor : string = '';
  @Prop() label: string = 'on/off';
  @Prop() labelposition: string = 'right';
  @Prop() disabled: boolean = false;

  @Event() selected: EventEmitter;

  mdcMenuComponent:any;
  mdcSwitch: any;

  componentWillLoad(){
      if(this.switchcolor){
        this.switchEl.style.setProperty('--mdc-theme-secondary',this.switchcolor);
      }
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
  getSwitchClassName(){
      let className = 'mdc-switch';
      if(this.disabled){
         className = `${className} mdc-switch--disabled`
      }
      return className;
  }

  render() {
    return (
        <div class={this.getDivClassName()}>
            <div class={this.getSwitchClassName()}
            ref={(mdcSwitch) => { this.mdcSwitch = mdcSwitch; }}>
            <input type="checkbox" checked={this.checked} disabled={this.disabled}
            class="mdc-switch__native-control" />
            <div class="mdc-switch__background">
                <div class="mdc-switch__knob"></div>
            </div>
            </div>
            {this.renderLabel()}
        </div>
    )
  }
}