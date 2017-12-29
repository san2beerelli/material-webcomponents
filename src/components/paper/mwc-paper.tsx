import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-paper',
  styleUrl: 'mwc-paper.scss',
  shadow: false
})
export class MWCPaper{

  @Element() paperEl : HTMLElement;
  @Prop() width: string;
  @Prop() height : string;
  @Prop() elevation : number = 2;
  @Prop() radius : number = 2;

  paperFigure:any;

  componentDidLoad(){
      let paperStyles = '';
       if(this.width){
           paperStyles = `width:${this.width}; `;
       }
       if(this.height){
           paperStyles = `${paperStyles}height:${this.height}; `;
       }
       if(this.radius){
           paperStyles = `${paperStyles}border-radius:${this.radius}px; `;
       }
       if(paperStyles.length>0){
           this.paperFigure.setAttribute('style',paperStyles)
       }
  }

  render() {
    return (
        <figure ref={(paperFigure) => { this.paperFigure = paperFigure; }}
        class={`mdc-elevation--z${this.elevation}`}>
          <slot />
        </figure>
    )
  }
}
