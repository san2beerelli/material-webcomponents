import { Component, Prop, Element  } from '@stencil/core';
@Component({
  tag: 'mwc-typography',
  styleUrl: 'mwc-typography.scss',
  shadow: false
})
export class MWCTheme{
  @Element() typographyEl : HTMLElement;
  @Prop() type: string = "display1";
  @Prop() color: string = "";
  @Prop() display: string = "block"; //inherit
  /*
  display4
  display3
  display2
  display1
  headline
  title
  subheading2
  subheading1
  body2
  body1
  caption
  button
  adjust-margin
   */
  mwcTypograpyDiv: any;
  componentWillLoad(){
      if(this.color){
        this.typographyEl.style.setProperty(`color`,this.color);
      }
      /* if(this.display !== "block"){
        this.typographyEl.style.setProperty(`--mwc-typography-dislpay`,this.display);
      } */
  }

  getTypographyClassName(){
       return `mdc-typography--${this.type} mwc-typography`
  }

  render() {
    return (
     <div class={this.getTypographyClassName()} ref={(mwcTypograpyDiv) => { this.mwcTypograpyDiv = mwcTypograpyDiv; }}>
        <slot />
     </div>
    )
  }
}
