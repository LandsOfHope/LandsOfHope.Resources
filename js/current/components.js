const CDN_RESOURCES_URL_components = new URL(document.currentScript.src).origin;

class MoneyComponent extends HTMLElement {
    money = 0;
    bold = false;
    icons = false;
    #pp = 0;
    #gp = 0;
    #sp = 0;
    #bp = 0;

    #ppParent = null;
    #ppElement = null;
    #ppIconElement = null;
    #gpParent = null;
    #gpElement = null;
    #gpIconElement = null;
    #spParent = null;
    #spElement = null;
    #spIconElement = null;
    #bpParent = null;
    #bpElement = null;
    #bpIconElement = null;

    static get observedAttributes() {
        return ['money', 'bold', 'icons'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.#ppParent) return; // already initialized

        this.classList.add('money');

        this.#ppParent = document.createElement('span');
        this.#ppParent.classList.add('money-component', "pp");
        this.#ppElement = this.#ppParent.appendChild(document.createElement('span'));
        this.#ppIconElement = this.#ppParent.appendChild(document.createElement('img'));
        this.#ppIconElement.setAttribute('src', `${CDN_RESOURCES_URL_components}/game/icons/gkp.gif`);

        this.#gpParent = document.createElement('span');
        this.#gpParent.classList.add('money-component', "gp");
        this.#gpElement = this.#gpParent.appendChild(document.createElement('span'));
        this.#gpIconElement = this.#gpParent.appendChild(document.createElement('img'));
        this.#gpIconElement.setAttribute('src', `${CDN_RESOURCES_URL_components}/game/icons/gp.gif`);

        this.#spParent = document.createElement('span');
        this.#spParent.classList.add('money-component', "sp");
        this.#spElement = this.#spParent.appendChild(document.createElement('span'));
        this.#spIconElement = this.#spParent.appendChild(document.createElement('img'));
        this.#spIconElement.setAttribute('src', `${CDN_RESOURCES_URL_components}/game/icons/sp.gif`);

        this.#bpParent = document.createElement('span');
        this.#bpParent.classList.add('money-component', "bp");
        this.#bpElement = this.#bpParent.appendChild(document.createElement('span'));
        this.#bpIconElement = this.#bpParent.appendChild(document.createElement('img'));
        this.#bpIconElement.setAttribute('src', `${CDN_RESOURCES_URL_components}/game/icons/bp.gif`);

        this.appendChild(this.#ppParent);
        this.appendChild(this.#gpParent);
        this.appendChild(this.#spParent);
        this.appendChild(this.#bpParent);

        // Re-apply observed attributes now that DOM is ready
        for (const attr of MoneyComponent.observedAttributes) {
            if (this.hasAttribute(attr)) {
                this.attributeChangedCallback(attr, null, this.getAttribute(attr));
            }
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.#ppParent) return; // DOM not yet initialized in connectedCallback
        if (name === 'money') {
            const newMoney = parseInt(newValue);
            if (!Number.isSafeInteger(newMoney)) {
                return;
            }
            this.money = newMoney;
            this.#pp = Math.floor(this.money / 1000000);
            this.#gp = Math.floor((this.money % 1000000) / 10000);
            this.#sp = Math.floor((this.money % 10000) / 100);
            this.#bp = this.money % 100;

            this.#ppElement.textContent = this.#pp;
            if (this.#pp > 0) {
                this.#ppParent.classList.remove('hidden');
            } else {
                this.#ppParent.classList.add('hidden');
            }

            this.#gpElement.textContent = this.#gp;
            if (this.#gp > 0 || this.#pp > 0) {
                this.#gpParent.classList.remove('hidden');
            } else {
                this.#gpParent.classList.add('hidden');
            }

            this.#spElement.textContent = this.#sp;
            if (this.#sp > 0 || this.#gp > 0 || this.#pp > 0) {
                this.#spParent.classList.remove('hidden');
            } else {
                this.#spParent.classList.add('hidden');
            }

            this.#bpElement.textContent = this.#bp;

            this.title = "Money: " + (this.#pp > 0 ? `${this.#pp}pp ` : '') + (this.#gp > 0 ? `${this.#gp}gp ` : '') + (this.#sp > 0 ? `${this.#sp}sp ` : '') + `${this.#bp}bp`;
        } else if (name === 'bold') {
            this.bold = newValue !== null;
            this.#ppElement.style.fontWeight = this.bold ? 'bold' : 'normal';
            this.#gpElement.style.fontWeight = this.bold ? 'bold' : 'normal';
            this.#spElement.style.fontWeight = this.bold ? 'bold' : 'normal';
            this.#bpElement.style.fontWeight = this.bold ? 'bold' : 'normal';
        } else if (name === 'icons') {
            this.icons = newValue !== null;
            this.#ppIconElement.style.display = this.icons ? 'inline' : 'none';
            this.#gpIconElement.style.display = this.icons ? 'inline' : 'none';
            this.#spIconElement.style.display = this.icons ? 'inline' : 'none';
            this.#bpIconElement.style.display = this.icons ? 'inline' : 'none';
        }
    };
};

class ImgComponent extends HTMLElement {
    imgRelativeUrl = undefined;
    imgExtension = undefined;
    width = undefined;
    height = undefined;
    title = undefined;
    slug = 'na';

    static get observedAttributes() {
        return ['slug', 'width', 'height', 'title'];
    }

    constructor(opts) {
        super();

        const { imgRelativeUrl, imgExtension = '.gif' } = opts;
        if (imgRelativeUrl === undefined) {
            throw new Error("imgRelativeUrl is required in ImgComponent constructor");
        } else if (imgExtension === undefined) {
            throw new Error("imgExtension cannot be undefined in ImgComponent constructor");
        }
        this.imgRelativeUrl = imgRelativeUrl;
        this.imgExtension = imgExtension;
    }

    connectedCallback() {
        if (this.slug === '' || this.slug === '0') {
            this.slug = 'na';
        }
        if (!Number.isSafeInteger(this.width)) {
            this.width = undefined;
        }
        if (!Number.isSafeInteger(this.height)) {
            this.height = undefined;
        }

        const img = document.createElement('img');
        img.setAttribute('src', `${CDN_RESOURCES_URL_components}/game/${this.imgRelativeUrl}/${this.slug}${this.imgExtension}`);
        img.setAttribute('alt', this.title ?? this.slug);
        img.setAttribute('title', this.title ?? this.slug);
        if (this.width !== undefined) {
            img.setAttribute('width', this.width);
        }
        if (this.height !== undefined) {
            img.setAttribute('height', this.height);
        }
        this.appendChild(img);

        this.updateImage();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'slug') {
            this.slug = newValue;
            if (this.slug === '' || this.slug === '0') {
                this.slug = 'na';
            }
            this.updateImage();
        } else if (name === 'width') {
            this.width = parseInt(newValue);
            if (!Number.isSafeInteger(this.width)) {
                this.width = undefined;
            }
            this.updateImage();
        } else if (name === 'height') {
            this.height = parseInt(newValue);
            if (!Number.isSafeInteger(this.height)) {
                this.height = undefined;
            }
            this.updateImage();
        }
    }

    updateImage() {
        const img = this.querySelector('img');
        if (img) {
            img.setAttribute('src', `${CDN_RESOURCES_URL_components}/game/${this.imgRelativeUrl}/${this.slug}${this.imgExtension}`);
            img.setAttribute('alt', this.title ?? this.slug);
            img.setAttribute('title', this.title ?? this.slug);
            if (this.width !== undefined) {
                img.setAttribute('width', this.width);
            } else {
                img.removeAttribute('width');
            }
            if (this.height !== undefined) {
                img.setAttribute('height', this.height);
            } else {
                img.removeAttribute('height');
            }
        }
    }
}

class RaceImgComponent extends ImgComponent {
    constructor() {
        super({
            imgRelativeUrl: 'r'
        });
    }
}

class IconImgComponent extends ImgComponent {
    constructor() {
        super({
            imgRelativeUrl: 'icons',
            imgExtension: '.png'
        });
    }
}

class BuildingImgComponent extends ImgComponent {
    constructor() {
        super({
            imgRelativeUrl: 'b'
        });
    }
}

class RoomImgComponent extends ImgComponent {
    constructor() {
        super({
            imgRelativeUrl: 'p'
        });
    }
}

class EquipLocationImgComponent extends ImgComponent {
    constructor() {
        super({
            imgRelativeUrl: 'l'
        });
    }
}

class ClassImgComponent extends ImgComponent {
    constructor() {
        super({
            imgRelativeUrl: 'dp'
        });
    }
}

customElements.define('landsofhope-money', MoneyComponent);
customElements.define('landsofhope-race-img', RaceImgComponent);
customElements.define('landsofhope-icon-img', IconImgComponent);
customElements.define('landsofhope-building-img', BuildingImgComponent);
customElements.define('landsofhope-room-img', RoomImgComponent);
customElements.define('landsofhope-equip-location-img', EquipLocationImgComponent);
customElements.define('landsofhope-class-img', ClassImgComponent);