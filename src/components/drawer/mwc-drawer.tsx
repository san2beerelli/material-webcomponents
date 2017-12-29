import { Component, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';
import {MDCPersistentDrawer, MDCTemporaryDrawer} from '@material/drawer';

@Component({
  tag: 'mwc-drawer',
  styleUrl: 'mwc-drawer.scss',
  shadow: false
})
export class MWCDrawer{

  @Element() drawerEl : HTMLElement;
  
  @Event() ondraweropen: EventEmitter;
  @Event() ondrawerclose: EventEmitter;

  @Prop() type: String = 'persistent'; //permanent,temporary
  @Prop() toolbarspacer: boolean = true;
  @Prop() header: boolean = true;

  mdcDrawer:any;
  drawerDIV:any;

  @Method()
  open(){
    if(this.type !== 'permanent'){
    this.mdcDrawer.open = true;
    }
  }
  @Method()
  close(){
    if(this.type !== 'permanent'){
        this.mdcDrawer.open = false;
    }
  }

  componentDidLoad(){
      if(this.type === 'persistent')
      {
          this.mdcDrawer =  MDCPersistentDrawer.attachTo(this.drawerDIV)
          this.mdcDrawer.listen('MDCPersistentDrawer:open',()=>{
              this.ondraweropen.emit();
          })
          this.mdcDrawer.listen('MDCPersistentDrawer:close',()=>{
              this.ondrawerclose.emit();
          })
      }else if(this.type === 'temporary'){
          this.mdcDrawer = MDCTemporaryDrawer.attachTo(this.drawerDIV)
          this.mdcDrawer.listen('MDCTemporaryDrawer:open',()=>{
              this.ondraweropen.emit();
          })
          this.mdcDrawer.listen('MDCTemporaryDrawer:close',()=>{
              this.ondrawerclose.emit();
          })
      }
  }
  componentDidUnload(){
    if(this.type !== 'permanent'){
        this.mdcDrawer.destroy();
     }
  }
  renderToolbarSpacer(){
      if(this.toolbarspacer){
          return (
              <div class={`mdc-${this.type}-drawer__toolbar-spacer`}>
                  <slot name="toolbarspacer"/>
              </div>
          )
      }
      return null;
  }
  renderHeader(){
      if(this.header && this.type !== 'permanent'){
          return (
            <header class={`mdc-${this.type}-drawer__header`}>
               <div class={`mdc-${this.type}-drawer__header-content`}>
                    <slot name="header" />
                </div>
            </header>
          )
      }
      return null;
  }
  renderPermanentDrawer(){
      return (
          <nav class="mdc-permanent-drawer drawer-body">
            {
                this.renderToolbarSpacer()
            }
            <div class="mdc-permanent-drawer__content">
                <slot />
            </div>
          </nav>
      )
  }
  renderOtherDrawers(){
      return(
          <aside ref={(drawerDIV) => { this.drawerDIV = drawerDIV; }}
             class={`mdc-${this.type}-drawer drawer-body`}>
            <nav class={`mdc-${this.type}-drawer__drawer`}>
                {this.renderToolbarSpacer()}
                {this.renderHeader()}
                <nav class={`mdc-${this.type}-drawer__content`}>
                   <slot />
                 </nav>
            </nav>
         </aside>
      )
  }
  render() {
    if(this.type === 'permanent'){
     return this.renderPermanentDrawer()
    }
    return this.renderOtherDrawers()
  }
}
