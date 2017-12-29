import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'mwc-card',
  styleUrl: 'mwc-card.scss',
  shadow: false
})
export class MWCCard{

  @Element() cardEl : HTMLElement;
  @Prop() width: string;
  @Prop() height : string;
  mwcCard: any;

  componentDidLoad(){
      let cardStyles = '';
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
       })
  }

  renderCardSlots(){

  }
  render() {
    return (
        <div class="mdc-card" ref={(mwcCard) => { this.mwcCard = mwcCard; }}>
            <slot />
        </div>
    )
  }
}
