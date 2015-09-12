import {
    bindable, sync, processContent, noView, useView, inlineView, containerless, useShadowDOM
}
from 'aurelia-framework';

// @useView('view.html')
// @noView()
export class CustomElem {

    @
    sync('div')
    arr = [];

    attached() {
        console.log(this.arr);
    }

    btnHandler(evt) {
        console.log(this.arr);
    }
}
