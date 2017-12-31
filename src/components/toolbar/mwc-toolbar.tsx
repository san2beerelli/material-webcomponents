import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCToolbar} from '@material/toolbar'

@Component({
  tag: 'mwc-toolbar',
  styleUrl: 'mwc-toolbar.scss',
  shadow: false
})
export class MWCToolbar {

  @Element() toolbarEl : HTMLDivElement;
  @Prop() type : string;
  //fixed,waterfall,flexible, fixed-lastrow-only
  toolbarComponent: any;

  componentWillLoad(){
    this.toolbarEl.className = this.getToolBarClassName()
  }
   componentDidLoad(){
    this.toolbarComponent = MDCToolbar.attachTo(this.toolbarEl)
  }
  getToolBarClassName(){
     let className = 'mdc-toolbar';
     if(this.type !== undefined){
         className = `${className} mdc-toolbar--fixed`
     }
      return className;
  }

  render() {
    return (
        <div class="mdc-toolbar__row">
            <slot />
         </div>
    )
  }
}