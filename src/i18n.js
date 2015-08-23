import {
    I18N
}
from 'aurelia-i18next';
import {
    EventAggregator
}
from 'aurelia-event-aggregator';

export class I18n {
    static inject = [I18N, Element, EventAggregator];
    constructor(i18n, element, ea) {
        this.i18n = i18n;

        console.log(this.i18n.getLocale());
        console.log(this.i18n.tr('score'));

        this.element = element;

        ea.subscribe('i18n:locale:changed', payload => {
            this.i18n.updateTranslations(this.element);
        });
    }

    attached() {
        this.i18n.updateTranslations(this.element);
    }
}
