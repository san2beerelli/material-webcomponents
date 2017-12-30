export class MWCCardMedia {
    getMediaClass() {
        let mediaClass = 'mdc-card__media-item';
        if (this.mediaheight) {
            let mediaheight = this.mediaheight;
            if (this.mediaheight === '1x') {
                mediaheight = '1dot5x';
            }
            mediaClass = `${mediaClass}  mdc-card__media-item--${mediaheight}`;
        }
        return mediaClass;
    }
    render() {
        return (h("section", { class: "mdc-card__media" },
            h("img", { class: this.getMediaClass(), src: this.src })));
    }
}
