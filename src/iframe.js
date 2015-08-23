// import {
//     inject, noView
// }
// from 'aurelia-framework';

// @inject(Element)
// @noView
export class Iframe {

    constructor() {
        console.log('constructor');
    }

    created(view: View) {
        console.log('created');
    }

    bind(bindingContext: any) {

        console.log('bind');
    }
    unbind() {
        console.log('unbind');
    }
    attached() {
        console.log('attached');

        $('#ct-frame').html('<iframe src="../index.html" width="100%" height="600" frameborder="0"></iframe>');
    }
    detached() {
        console.log('detached');
    }
}
