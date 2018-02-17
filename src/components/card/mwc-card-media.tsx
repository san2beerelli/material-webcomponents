import { Component, Prop } from '@stencil/core';
import CardMediaStyle from './mwc-card-media-style'

@Component({
  tag: 'mwc-card-media',
 // styleUrl: 'mwc-card-media.scss',
  shadow: false
})
export class MWCCardMedia{
  @Prop() src: string;
  @Prop() mediaheight: string = 'auto';

  cardMediaStyle:any;
  componentWillLoad(){
      this.cardMediaStyle = new CardMediaStyle()
       let changeStyle: object = {
         rootMedia:{
           height: this.mediaheight
         }
      }
     this.cardMediaStyle.setup(changeStyle)
  }
  getClassNames():Array<string>{
      let classNames:Array<string> = ['root','rootMedia']
      return classNames
  }

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
         <img class={this.cardMediaStyle.getClassName(this.getClassNames())} src={this.src}></img>
    );
  }
}