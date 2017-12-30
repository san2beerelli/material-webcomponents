export class MWCDialogFooter {
    componentDidLoad() {
        Array.from(this.dialogFooterEl.children[0].children).forEach((item, index) => {
            item.children[0].classList.add('mdc-dialog__footer__button');
            if (item.getAttribute('type') == "accept") {
                item.children[0].classList.add('mdc-dialog__footer__button--accept');
            }
            if (item.getAttribute('type') == "cancel") {
                item.children[0].classList.add('mdc-dialog__footer__button--cancel');
            }
        });
    }
    render() {
        return (h("footer", { class: "mdc-dialog__footer" },
            h("slot", null)));
    }
}
