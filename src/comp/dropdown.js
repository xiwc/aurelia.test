import {
    bindable, sync, processContent, noView, useView, inlineView, containerless, useShadowDOM, inject
}
from 'aurelia-framework';

@
inject(Element)
export class Dropdown {

    @
    bindable values = [];

    constructor(elem) {
        this.elem = elem;
    }

    attached() {
        this.$dd = $('.ui.dropdown', this.elem);
        this.$dd.dropdown({
            onChange: (value, text, $choice) => {
                this.values.splice(0, this.values.length);
                $.each(value, (index, val) => {
                    this.values.push(val);
                });
            }
        }).dropdown('set selected', this.values);

        Array.observe(this.values, (changes) => {
        	console.log(changes);
        	this.$dd.dropdown('set selected', this.values);
        });
    }
}
