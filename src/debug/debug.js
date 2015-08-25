export class Debug {

    apiArr = [];

    filterApiArr = [];

    _searchText = '';

    content = [];

    constructor() {

        for (var name in nsAPI) {
            this.apiArr.push({
                name: name,
                value: nsAPI[name]
            });

            this.content.push({
                title: name
            });
        }

        this.filterApiArr = this.apiArr;
    }

    attached() {

        var _this = this;

        $('#search-api').search({
            source: _this.content,
            onSelect: function(result, response) {
                _this.searchText = result.title;
            }
        });

        $('#chk-select-all').checkbox({
            onChecked: function() {

                $(this).closest('.grid').find('.chk-api').checkbox('set checked');

                $.each(_this.filterApiArr, function(index, api) {
                    api.value.ismock = true;
                });
            },
            onUnchecked: function() {

                $(this).closest('.grid').find('.chk-api').checkbox('set unchecked');

                $.each(_this.filterApiArr, function(index, api) {
                    api.value.ismock = false;
                });
            }
        });

    }

    get searchText() {
        return this._searchText;
    }
    set searchText(newValue) {
        this._searchText = newValue;
        if (newValue === '') {
            this.filterApiArr = this.apiArr;
        } else {
            this.filterApiArr = this.apiArr.filter(x => x.name.indexOf(this.searchText) !== -1);
        }
    }

    debugHandler(evt) {
        $('#md-debug').modal('show');
    }

    chgHandler(evt) {

        var $chk = $(evt.target);

        console.log($chk.val());
        console.log($chk.get(0).checked);

        $.each(this.filterApiArr, function(index, api) {
            if (api.name === $chk.val()) {
                api.value.ismock = $chk.get(0).checked;
                return false;
            }
        });
    }
}
