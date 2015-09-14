import {
    bindable
}
from 'aurelia-framework';

export class ButtonComp {

    @
    bindable callback = null;

    clickHandler() {
        if (this.callback) {
            this.callback('test info.');
        }
    }
}
