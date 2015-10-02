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
        this.simplemde = new SimpleMDE({
            element: this.input,
            status: false,
            initialValue: this.value,
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

        this.simplemde.value(this.value);

        this.simplemde.codemirror.on("change", () => {
            console.log(this.simplemde.value());
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
