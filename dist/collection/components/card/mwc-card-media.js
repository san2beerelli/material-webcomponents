import CardMediaStyle from './mwc-card-media-style';
export class MWCCardMedia {
    constructor() {
        this.mediaheight = 'auto';
    }
    componentWillLoad() {
        this.cardMediaStyle = new CardMediaStyle();
        let changeStyle = {
            rootMedia: {
                height: this.mediaheight
            }
        };
        this.cardMediaStyle.setup(changeStyle);
    }
    getClassNames() {
        let classNames = ['root', 'rootMedia'];
        return classNames;
    }
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
        return (h("img", { class: this.cardMediaStyle.getClassName(this.getClassNames()), src: this.src }));
    }
}
