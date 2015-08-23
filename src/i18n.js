import {
    I18N
}
from 'aurelia-i18next';

export class I18n {
    static inject = [I18N];
    constructor(i18n) {
        this.i18n = i18n;
        console.log(this.i18n.getLocale());
    }
}
