export class MWCContainer {
    constructor() {
        this.backgroundcolor = "";
        this.flexdirection = "row";
        //row-reverse,column,column-reverse,row
        this.flexwrap = "nowrap";
        //wrap,wrap-reverse
        this.justifycontent = "flex-start";
        //flex-end,center,space-between,space-around,space-evenly
        this.alignitems = "flex-start";
        //flex-start,flex-end,center,baseline,stretch
        this.aligncontent = "flex-start";
    }
    //flex-start,flex-end,center,space-between,space-around,stretch
    componentWillLoad() {
        let containerStyle = `display : flex;`;
        if (this.height) {
            containerStyle = `${containerStyle} height:${this.height};`;
        }
        if (this.width) {
            containerStyle = `${containerStyle} width:${this.width};`;
        }
        if (this.flexdirection) {
            containerStyle = `${containerStyle} flex-direction:${this.flexdirection};`;
        }
        if (this.flexwrap) {
            containerStyle = `${containerStyle} flex-wrap:${this.flexwrap};`;
        }
        if (this.justifycontent) {
            containerStyle = `${containerStyle} justify-content:${this.justifycontent};`;
        }
        if (this.alignitems) {
            containerStyle = `${containerStyle} align-items:${this.alignitems};`;
        }
        if (this.aligncontent) {
            containerStyle = `${containerStyle} align-content:${this.aligncontent};`;
        }
        if (this.backgroundcolor) {
            containerStyle = `${containerStyle} background-color:${this.backgroundcolor};`;
        }
        this.containerEl.setAttribute('style', containerStyle);
    }
    render() {
        return (h("slot", null));
    }
}
