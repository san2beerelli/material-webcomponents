import { Component, Prop, Element,  Method, Event, EventEmitter } from '@stencil/core';
import {MDCTabBar, MDCTabBarScroller} from '@material/tabs'

@Component({
  tag: 'mwc-tabbar',
  styleUrl: 'mwc-tabbar.scss',
  shadow: false
})
export class MWCTabbar{

  @Element() tabBarEl : HTMLElement;
  @Prop() activeindex: number = 0;
  @Prop() scroller: boolean = false;
  @Prop() tabs: Array<any> = [
      {label:'Recents',icon:'phone'},
      {label:'Favorites',icon:'favorite'},
      {label:'Nearby',icon:'person_pin'}
  ]

  @Event() change: EventEmitter;

  mdcTabBarComponent:any;
  mdcTabBar: any;
  mdcTabBarScroller: any;
  iconTabBar: boolean = false;
  textTabBar: boolean = false;

  componentWillLoad(){
      if(this.tabs[0].icon){
          this.iconTabBar = true;
      }
      if(this.tabs[0].label){
          this.textTabBar = true;
      }

  }
  componentDidLoad(){
      if(this.scroller){
        this.mdcTabBarComponent = MDCTabBarScroller.attachTo(this.mdcTabBarScroller)
      }else{
        this.mdcTabBarComponent = MDCTabBar.attachTo(this.mdcTabBar)
      }
      this.mdcTabBarComponent.listen('MDCTabBar:change', ({detail: tabs}) => {
          this.change.emit(tabs)
      });
  }
  getTabBarClassName(){
       let className = 'mdc-tab-bar';
      if(this.iconTabBar){
         className = `${className} mdc-tab-bar--icons-with-text`
      }
      if(this.scroller){
          className = `${className} mdc-tab-bar-scroller__scroll-frame__tabs`
      }
      return className;
  }
  getTabClassName(index){
        let className = 'mdc-tab';
      if(this.iconTabBar && this.textTabBar){
         className = `${className} mdc-tab--with-icon-and-text`
      }else if(this.iconTabBar){
         className = `${className} mdc-tab-bar--icon-tab-bar`
      }
      if(index === this.activeindex){
          className = `${className} mdc-tab--active`
      }

      return className;
  }
  renderText(tab){
      if(this.iconTabBar){
          return(
             <span class="mdc-tab__icon-text">{tab.label}</span>
          )
      }
      return tab.label;
  }
  renderIcon(tab){
      if(this.iconTabBar){
          return(
                <i class="material-icons mdc-tab__icon" aria-hidden="true">{tab.icon}</i>
          )
      }
      return null;
  }

  renderNavigation(){
      return(
          <nav
         class={this.getTabBarClassName()} ref={(mdcTabBar) => { this.mdcTabBar = mdcTabBar; }}>
           {
               this.tabs.map((tab,index)=> {
                   return(
                       <a class={this.getTabClassName(index)}>
                            {this.renderIcon(tab)}
                            {this.renderText(tab)}
                        </a>
                   )
               })
           }
            <span class="mdc-tab-bar__indicator"></span>
        </nav>
      )
  }

  renderScrollerNavigation(){
      if(this.scroller){
        return(
            <div class="mdc-tab-bar-scroller" ref={(mdcTabBarScroller) => { this.mdcTabBarScroller = mdcTabBarScroller; }}>
                <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
                    <a class="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
                    navigate_before
                    </a>
                </div>
                <div class="mdc-tab-bar-scroller__scroll-frame">
                {this.renderNavigation()}
                </div>
                <div class="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
                    <a class="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
                    navigate_next
                    </a>
                </div>
                </div>
        )
      }
      return this.renderNavigation();
  }

  render() {
    return this.renderScrollerNavigation()
  }
}