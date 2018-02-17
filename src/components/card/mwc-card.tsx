import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-card',
  //styleUrl: 'mwc-card.scss',
  shadow: false
})
export class MWCCard{

  @Element() cardEl : HTMLElement;
  @Prop() width: string = "auto";
  @Prop() height : string = "auto";
  @Prop() raised : boolean = false;
  @Prop() radius : number = 4;

  componentDidLoad(){
      /* let cardStyles = '';
       if(this.width){
           cardStyles = `width:${this.width}; `;
       }
       if(this.height){
           cardStyles = `${cardStyles}height:${this.height}; `;
       }
       if(cardStyles.length>0){
            this.mwcCard.setAttribute('style',cardStyles);
       }
       Array.from(this.cardEl.getElementsByTagName("button")).forEach((eachButton)=>{
           eachButton.className = `${eachButton.className} mdc-card__action`;
       }) */
  }
  getElevation():number{
      return this.raised ? 8 : 2
  }

  render() {
    return (
        <mwc-paper
            width={this.width}
            height={this.height}
            elevation={this.getElevation()}
            radius={this.radius}>
            <slot />
        </mwc-paper>
    )
  }
}
