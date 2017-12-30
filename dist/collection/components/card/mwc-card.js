export class MWCCard {
    componentDidLoad() {
        let cardStyles = '';
        if (this.width) {
            cardStyles = `width:${this.width}; `;
        }
        if (this.height) {
            cardStyles = `${cardStyles}height:${this.height}; `;
        }
        if (cardStyles.length > 0) {
            this.mwcCard.setAttribute('style', cardStyles);
        }
        Array.from(this.cardEl.getElementsByTagName("button")).forEach((eachButton) => {
            eachButton.className = `${eachButton.className} mdc-card__action`;
        });
    }
    renderCardSlots() {
    }
    render() {
        return (h("div", { class: "mdc-card", ref: (mwcCard) => { this.mwcCard = mwcCard; } },
            h("slot", null)));
    }
}
