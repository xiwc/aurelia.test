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

    configureRouter(config, router) {

        config.map([{
            route: '',
            name: 'comp',
            moduleId: 'comp',
            nav: true,
            title: 'Comp'
        }]);

        this.router = router;
    }
}
