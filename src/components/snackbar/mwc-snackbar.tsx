import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCSnackbar} from '@material/snackbar';

@Component({
  tag: 'mwc-snackbar',
  styleUrl: 'mwc-snackbar.scss',
  shadow: false
})
export class MWCSnackbar{

  @Element() snackBarEl : HTMLElement;
  @Prop() message : string = '';
  @Prop() timeout : number = 1000;
  @Prop() actiontext : string = '';
  @Prop() multiline : boolean = false;
  @Prop() actiononbutton : boolean = false;
  @Prop() dismissesonaction: boolean = true;
  @Prop() backgroundcolor: string = "#000000";
  @Prop() actioncolor: string = "#ff0ff0";
  @Prop() messagecolor: string = "#ffffff";

  @Event() actionhandler: EventEmitter;

  @Method()
  show(){
      const dataObj = {
            message: this.message,
            actionText: this.actiontext,
            multiline: this.multiline,
            timeout: this.timeout,
            actionOnBottom : this.multiline && this.actiononbutton ,
            actionHandler: () => {
                this.actionhandler.emit()
            }
        };
    this.mdcSnackComponent.show(dataObj)

  }

  @Event() selected: EventEmitter;

  mdcSnackComponent:any;
  mdcSnackBar: any;
  elStyleNode:any;


  getStyleNode(){
    var styleNode = document.createElement('style');
       styleNode.type = "text/css";
       let bgClass;
       if(this.backgroundcolor){
        bgClass = `.webmd-snackbar{
                    background-color: ${this.backgroundcolor} !important;
                }`
       }
       if(this.messagecolor){
           bgClass = `${bgClass} .mdc-snackbar__text{
                 color: ${this.messagecolor} !important
            }`
       }
       var styleText = document.createTextNode(bgClass);
      styleNode.appendChild(styleText);
      this.elStyleNode = styleNode;
      this.snackBarEl.appendChild(this.elStyleNode);
  }

  componentWillLoad(){
      if(this.actioncolor){
        this.snackBarEl.style.setProperty('--mdc-theme-secondary',this.actioncolor);
      }
  }

  componentDidLoad(){
      this.mdcSnackComponent = MDCSnackbar.attachTo(this.mdcSnackBar)
      this.mdcSnackComponent.dismissesOnAction = this.dismissesonaction;
      if(this.backgroundcolor || this.messagecolor){
          this.getStyleNode()
      }
  }
  componentDidUnload(){
      if(this.backgroundcolor || this.messagecolor){
        this.snackBarEl.removeChild(this.elStyleNode);
      }
  }

  render() {
    return (
        <div class="mdc-snackbar webmd-snackbar"
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden="true" ref={(mdcSnackBar) => { this.mdcSnackBar = mdcSnackBar; }}>
            <div class="mdc-snackbar__text"></div>
            <div class="mdc-snackbar__action-wrapper">
                <button type="button" class="mdc-snackbar__action-button">
                </button>
            </div>
        </div>
    )
  }
}