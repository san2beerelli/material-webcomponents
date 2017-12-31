import { Component, Prop, Element  } from '@stencil/core';
@Component({
  tag: 'mwc-theme',
  styleUrl: 'mwc-theme.scss',
  shadow: false
})
export class MWCTheme{
  @Element() themeEl : HTMLElement;
  @Prop() theme: object = {};
  @Prop() fonts: Array<string> = [] ;
  @Prop() icons: Array<string> = [] ;
  fontsAndIcons: Array<string> = ['https://fonts.googleapis.com/css?family=Roboto:300,400,500','https://fonts.googleapis.com/icon?family=Material+Icons']
  /*
  {
      "primary" : "#8BC34A",
      "primary-light": '#DCEDC8',
      "primary-dark": '#689F38',
      "secondary": '#7C4DFF',
      "secondary-light": '#757575',
      "secondary-dark": '#212121',
      "background": '#BDBDBD'
  };
   */

  getLinkNode(fontUrl){
    var linkNode = document.createElement('link');
       linkNode.type = "text/css";
       linkNode.rel = "stylesheet";
       linkNode.href = fontUrl;
       document.head.appendChild(linkNode);
  }

  componentWillLoad(){
      const urls = [...this.fonts,...this.fontsAndIcons, ...this.icons]
       urls.forEach((font)=>{
        this.getLinkNode(font);
      })
       if(this.theme){
        Object.keys(this.theme).forEach((key)=>{
            this.themeEl.style.setProperty(`--mdc-theme-${key}`,this.theme[key]);
        })
       }
  }

  render() {
    return (
      <slot />
    )
  }
}
