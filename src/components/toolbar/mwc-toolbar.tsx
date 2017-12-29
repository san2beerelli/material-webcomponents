import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCTab} from '@material/tabs'

@Component({
  tag: 'mwc-toolbar',
  styleUrl: 'mwc-toolbar.scss',
  shadow: false
})
export class MWCToolbar{

  @Element() toolbarEl : HTMLElement;
  @Prop() checked : boolean = false;
  @Prop() switchcolor : string = '';
  @Prop() labelposition: string = 'right';
  @Prop() active: boolean = false;
  @Prop() icon: string = '';
  @Prop() label: string = '';

  @Event() selected: EventEmitter;

  mdcTabComponent:any;
  mdcTab: any;

  componentWillLoad(){
      if(this.switchcolor){
      //  this.switchEl.style.setProperty('--mdc-theme-secondary',this.switchcolor);
      }
  }
   componentDidLoad(){
      //this.mdcTabComponent = MDCTab.attachTo(this.mdcTab)
  }
  getTabClassName(){
       let className = 'mdc-tab mdc-tab--with-icon-and-text';
      if(this.active){
         className = `${className} mdc-tab--active`
      }
      return className;

  }

  render() {
    return (
       <div class="mdc-toolbar">
        <div class="mdc-toolbar__row">

                <span class="mdc-toolbar__title">This is a super super super super long title</span>

            <section class="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit">
                <a class="material-icons search align-icons" aria-label="Search">search</a>
            </section>
        </div>
        </div>
    )
  }
}