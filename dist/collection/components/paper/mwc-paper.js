export class MWCPaper {
    constructor() {
        this.elevation = 2;
        this.radius = 2;
    }
    componentDidLoad() {
        let paperStyles = '';
        if (this.width) {
            paperStyles = `width:${this.width}; `;
        }
        if (this.height) {
            paperStyles = `${paperStyles}height:${this.height}; `;
        }
        if (this.radius) {
            paperStyles = `${paperStyles}border-radius:${this.radius}px; `;
        }
        if (paperStyles.length > 0) {
            this.paperFigure.setAttribute('style', paperStyles);
        }
    }
    render() {
        return (h("figure", { ref: (paperFigure) => { this.paperFigure = paperFigure; }, class: `mdc-elevation--z${this.elevation}` },
            h("slot", null)));
    }
}
