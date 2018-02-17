import { Component, Prop } from '@stencil/core';
import PaperStyle from './mwc-paper-style'

@Component({
  tag: 'mwc-paper',
  shadow: false
})
export class MWCPaper{

  @Prop() width: string = 'auto';
  @Prop() height : string = 'auto';
  @Prop() elevation : number = 2;
  @Prop() radius : number = 4;

  paperStyle:any;

  componentWillLoad(){
      this.paperStyle = new PaperStyle()
       let changeStyle: object = {
           rounded:{
               borderRadius: this.radius,
               width : this.width,
               height: this.height,
           }
      }
     this.paperStyle.setup(changeStyle)
  }
  getClassNames():Array<string>{
      let classNames:Array<string> = ['root',`shadow${this.elevation}`, 'rounded']
      return classNames
  }

  render() {
    return (
        <div class={this.paperStyle.getClassName(this.getClassNames())}>
            <slot />
        </div>
    )
  }
}
