import {
    bindable
}
from 'aurelia-framework';

export class TextTag {

    @
    bindable tags = [];

    isInputShow = false;
    isAddIconShow = true;

    @
    bindable disabled = false;

    @
    bindable onadd;

    @
    bindable ondelete;

    showInputHandler() {
        this.isInputShow = true;
        this.isAddIconShow = false;

        setTimeout(() => {
            this.input.focus();
        }, 100);

    }

    focusoutHandler() {
        this.isInputShow = false;
        this.isAddIconShow = true;
    }

    delHandler(val) {

        $.each(this.tags, (index, item) => {
            if (item.value == val) {

                if (this.ondelete) {

                    this.ondelete(val).then((data) => {

                        if (data) {
                            this.tags.splice(index, 1);
                        }
                    });

                }
                return false;
            }
        });
    }

    keyupHandler(evt) {

        if (evt.keyCode === 13) {

            var $input = $(evt.target);
            var val = $.trim($input.val());
            $input.val('');

            if (this.onadd && val) {

                this.onadd(val).then((data) => {
                    this.tags.push(data);
                });

            }
        }
    }
}
