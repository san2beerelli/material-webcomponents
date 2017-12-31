export class MWCViewport {
    constructor() {
        this.backgroundcolor = "";
    }
    componentWillLoad() {
        let viewportStyle = `
        height : 100vh;
        width  : 100vw;
        display : block;
        overflow: hidden;
      `;
        if (this.backgroundcolor) {
            viewportStyle = `${viewportStyle} background-color : ${this.backgroundcolor}`;
        }
        this.viewportEl.setAttribute('style', viewportStyle);
    }
    render() {
        return (h("slot", null));
    }
}
