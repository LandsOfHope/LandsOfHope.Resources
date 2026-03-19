import { CDN_RESOURCES_URL } from "./urls.mjs";

export class MoneyComponent extends HTMLElement {
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
        return ['money', 'format'];
    }

    constructor() {
        super();

        this.classList.add('money');

        this.#ppParent = document.createElement('span');
        this.#ppParent.classList.add('money-component-pp');
        this.#ppElement = this.#ppParent.appendChild(document.createElement('span'));
        this.#ppIconElement = this.#ppParent.appendChild(document.createElement('img'));
        this.#ppIconElement.setAttribute('src', `${CDN_RESOURCES_URL}/game/icons/gkp.gif`);

        this.#gpParent = document.createElement('span');
        this.#gpParent.classList.add('money-component-gp');
        this.#gpElement = this.#gpParent.appendChild(document.createElement('span'));
        this.#gpIconElement = this.#gpParent.appendChild(document.createElement('img'));
        this.#gpIconElement.setAttribute('src', `${CDN_RESOURCES_URL}/game/icons/gp.gif`);

        this.#spParent = document.createElement('span');
        this.#spParent.classList.add('money-component-sp');
        this.#spElement = this.#spParent.appendChild(document.createElement('span'));
        this.#spIconElement = this.#spParent.appendChild(document.createElement('img'));
        this.#spIconElement.setAttribute('src', `${CDN_RESOURCES_URL}/game/icons/sp.gif`);

        this.#bpParent = document.createElement('span');
        this.#bpParent.classList.add('money-component-bp');
        this.#bpElement = this.#bpParent.appendChild(document.createElement('span'));
        this.#bpIconElement = this.#bpParent.appendChild(document.createElement('img'));
        this.#bpIconElement.setAttribute('src', `${CDN_RESOURCES_URL}/game/icons/bp.gif`);

        this.appendChild(this.#ppParent);
        this.appendChild(this.#gpParent);
        this.appendChild(this.#spParent);
        this.appendChild(this.#bpParent);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'money') {
            const newMoney = parseInt(newValue);
            if (!Number.isSafeInteger(newMoney)) {
                return;
            }
            this.money = newMoney;
            this.#pp = Math.floor(this.money / 10000);
            this.#gp = Math.floor((this.money % 10000) / 100);
            this.#sp = Math.floor((this.money % 100) / 10);
            this.#bp = this.money % 10;

            this.#ppElement.textContent = this.#pp > 0 ? this.#pp : '';
            this.#ppParent.classList.toggle('hidden', this.#pp <= 0);

            this.#gpElement.textContent = this.#gp > 0 ? this.#gp : '';
            this.#gpParent.classList.toggle('hidden', this.#gp <= 0);

            this.#spElement.textContent = this.#sp > 0 ? this.#sp : '';
            this.#spParent.classList.toggle('hidden', this.#sp <= 0);

            this.#bpElement.textContent = this.#bp;
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