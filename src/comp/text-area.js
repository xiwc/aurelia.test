import {
    bindable
}
from 'aurelia-framework';

export class TextArea {

    @
    bindable value;

    @
    bindable onok;

    @
    bindable oncancel;

    val = '';

    isEditShow = false;
    isHeaderShow = true;
    isEditIconShow = false;

    isBlurDisabled = false;

    actionsMouseOverHandler() {
        this.isBlurDisabled = true;
    }

    actionsMouseOutHandler() {
        this.isBlurDisabled = false;
    }

    inputBlurHandler() {
        if (!this.isBlurDisabled) {
            this.okHandler();
        }
    }

    cancelHandler() {
        this.value = this.val;
        this.isHeaderShow = true;
        this.isEditShow = false;

        this.oncancel && this.oncancel(this.value);

        $.ntf.info('cancelHandler');
    }

    okHandler() {
        this.isHeaderShow = true;
        this.isEditShow = false;

        this.onok && this.onok(this.value, this.val);

        $.ntf.info('okHandler');
    }

    editHandler() {
        this.val = this.value;
        this.isHeaderShow = false;
        this.isEditShow = true;
        this.isBlurDisabled = false;
        setTimeout(() => {
            this.input.select();
            this.input.focus();
        }, 100);

    }

    headerMouseOverHandler() {
        $(this.header).addClass('mouseover');
        this.isEditIconShow = true;
    }

    headerMouseOutHandler() {
        $(this.header).removeClass('mouseover');
        this.isEditIconShow = false;
    }

}
