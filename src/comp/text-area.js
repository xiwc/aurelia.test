import {
    bindable
}
from 'aurelia-framework';
import 'md-editor';
import 'md-editor/../simplemde.min.css!';
// import '//cdn.jsdelivr.net/simplemde/latest/simplemde.min.js';

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

    attached() {
        // https://github.com/NextStepWebs/simplemde-markdown-editor
        // https://codemirror.net/doc/manual.html#events
        this.simplemde = new SimpleMDE({
            element: this.input,
            // status: false,
            // autofocus: true,
            // initialValue: this.value,
            toolbar: ["bold",
                "italic",
                "strikethrough",
                "heading",
                "heading-smaller",
                "heading-bigger",
                "heading-1",
                "heading-2",
                "heading-3",
                "code",
                "quote",
                "unordered-list",
                "ordered-list",
                "link",
                "image",
                "horizontal-rule",
                "preview",
                "side-by-side",
                "fullscreen",
                "guide"
            ]
        });

        // this.simplemde.value('dfddf');

        this.simplemde.codemirror.on("change", () => {
            console.log(this.simplemde.value());
            this.value = this.simplemde.value();
        });
        this.simplemde.codemirror.on("blur", () => {
            console.log('codemirror blur');
            this.inputBlurHandler();
        });
    }

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
            // this.input.select();
            // this.input.focus();
            this.simplemde.value(this.value);
            this.simplemde.codemirror.focus();
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
