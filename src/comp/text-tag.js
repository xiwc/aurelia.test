export class TextTag {

    tags = [{
        name: '1111111',
        value: '1111111'
    }, {
        name: '222222',
        value: '222222'
    }, {
        name: '333333',
        value: '333333'
    }, {
        name: '444444',
        value: '444444'
    }];

    delHandler(val) {

        $.each(this.tags, (index, item) => {
            if (item.value == val) {
                this.tags.splice(index, 1);
                return false;
            }
        });
    }

    keyupHandler(evt) {

        if (evt.keyCode === 13) {

            var $input = $(evt.target);

            this.tags.push({
                name: $input.val(),
                value: $input.val()
            });

            $input.val('');
        }
    }
}
