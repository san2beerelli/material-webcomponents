export class MWCTheme {
    constructor() {
        this.type = "display1";
        this.color = "";
        this.display = "block"; //inherit
    }
    componentWillLoad() {
        if (this.color) {
            this.typographyEl.style.setProperty(`color`, this.color);
        }
        /* if(this.display !== "block"){
          this.typographyEl.style.setProperty(`--mwc-typography-dislpay`,this.display);
        } */
    }
    getTypographyClassName() {
        return `mdc-typography--${this.type} mwc-typography`;
    }
    render() {
        return (h("div", { class: this.getTypographyClassName(), ref: (mwcTypograpyDiv) => { this.mwcTypograpyDiv = mwcTypograpyDiv; } },
            h("slot", null)));
    }
}
