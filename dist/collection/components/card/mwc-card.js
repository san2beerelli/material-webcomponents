export class MWCCard {
    constructor() {
        this.width = "auto";
        this.height = "auto";
        this.raised = false;
        this.radius = 4;
    }
    componentDidLoad() {
        /* let cardStyles = '';
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
         }) */
    }
    getElevation() {
        return this.raised ? 8 : 2;
    }
    render() {
        return (h("mwc-paper", { width: this.width, height: this.height, elevation: this.getElevation(), radius: this.radius },
            h("slot", null)));
    }
}
