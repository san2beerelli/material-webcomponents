import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'mwc-card-media',
  styleUrl: 'mwc-card-media.scss',
  shadow: false
})
export class MWCCardMedia{
  @Prop() src: string;
  @Prop() mediaheight: string;

  getMediaClass(){
      let mediaClass = 'mdc-card__media-item';
      if(this.mediaheight){
          let mediaheight = this.mediaheight;
          if(this.mediaheight === '1x'){
             mediaheight = '1dot5x'
          }
          mediaClass = `${mediaClass}  mdc-card__media-item--${mediaheight}`
      }
      return mediaClass;
  }
  render() {
    return (
        <section class="mdc-card__media">
         <img class={this.getMediaClass()} src={this.src}></img>
        </section>
    );
  }
}