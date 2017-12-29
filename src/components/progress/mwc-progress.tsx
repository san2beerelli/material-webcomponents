import { Component, Prop, Element, Method } from '@stencil/core';
import {MDCLinearProgress} from '@material/linear-progress'
@Component({
  tag: 'mwc-progress',
  styleUrl: 'mwc-progress.scss',
  shadow: false
})
export class MWCProgress{

  @Element() progressEl : HTMLElement;
  @Prop() width: string;
  @Prop() height : string;
  @Prop() show : boolean = true;
  @Prop() type : string = 'indeterminate';
  @Prop() reversed: boolean = false;
  @Prop() progressbarcolor : string;
  @Prop() bufferbarcolor: string ;

  @Method()
  progress(value){
    this.mdcProgress.progress= value;
  }
  @Method()
  buffer(value){
    this.mdcProgress.buffer= value;
  }
  /*
  determinate
  indeterminate
  buffer
  reversed
  indeterminatereversed
  bufferreversed
   */

  progressBar:any;
  mdcProgress:any;
  innerProgressBar:any;
  bufferProgressBar:any;

  componentWillLoad(){
      if(this.progressbarcolor){
        this.progressEl.style.setProperty('--mdc-theme-primary',this.progressbarcolor);
      }
  }

  componentDidLoad(){
      let progressStyle = '';
      let bufferStyle = '';
      if(this.progressbarcolor){
          progressStyle = `background-color: ${this.progressbarcolor};`
      }
       if(this.bufferbarcolor){
            bufferStyle = `background-color: ${this.bufferbarcolor};`
       }

       if(progressStyle.length>0){
           this.innerProgressBar.setAttribute('style',progressStyle)
       }
       if(bufferStyle.length>0){
           this.bufferProgressBar.setAttribute('style',bufferStyle)
       }

       this.mdcProgress = MDCLinearProgress.attachTo(this.progressBar)
       this.mdcProgress.progress= 0;
       this.mdcProgress.buffer = 0;
  }
  componentDidUnload(){
     this.mdcProgress.destroy()
   }

  getProgressClassName(){
       let className: string = "mdc-linear-progress";

      if(this.type === "indeterminate"){
          className = `${className} mdc-linear-progress--indeterminate`;
      }
      if(this.reversed){
          className = ` ${className} mdc-linear-progress--reversed`;
      }
      if(!this.show){
          className = ` ${className} mdc-linear-progress--closed`;
      }
      return className;
  }

  render() {
    return (
        <div role="progressbar" ref={(progressBar) => { this.progressBar = progressBar; }}
            class={this.getProgressClassName()}>
            <div class="mdc-linear-progress__buffering-dots"></div>
            <div class="mdc-linear-progress__buffer" ref={(bufferProgressBar) => { this.bufferProgressBar = bufferProgressBar;}}></div>
            <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                <span class="mdc-linear-progress__bar-inner" ref={(innerProgressBar) => { this.innerProgressBar = innerProgressBar;}}></span>
            </div>
            <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
            </div>
         </div>
    )
  }
}
