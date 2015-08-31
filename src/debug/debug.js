export class Debug {

    apiArr = [];

    filterApiArr = [];

    _searchText = '';

    content = [];

    constructor() {

        for (var name in nsAPI) {
            this.apiArr.push({
                name: name,
                value: nsAPI[name],
                isHidden: false
            });

            this.content.push({
                title: name
            });
        }

        this.filterApiArr = this.apiArr;
    }

    attached() {

        var _this = this;

        $('#md-debug').modal({
            closable: false,
            onApprove: function($elem) {

                var $chkArr = $elem.closest('.modal').find('.grid .chk-api');

                $chkArr.each(function(index, el) {
                    var isChked = $(el).checkbox('is checked');
                    $.each(_this.filterApiArr, function(index, api) {
                        if (api.name === $(el).find('input').val()) {
                            api.value.ismock = isChked;
                            return false;
                        }
                    });

                });

                $('#md-debug .grid .chk-api').checkbox();

            }
        });

        $('#search-api').search({
            source: _this.content,
            onSelect: function(result, response) {
                _this.searchText = result.title;
            }
        });

        $('#chk-select-all').checkbox({
            onChecked: function() {

                $(this).closest('.grid').find('.row:visible').find('.chk-api').checkbox('set checked');
            },
            onUnchecked: function() {

                $(this).closest('.grid').find('.row:visible').find('.chk-api').checkbox('set unchecked');
            }
        });

        $('#md-debug .grid .chk-api').each(function(index, el) {
            $.each(_this.filterApiArr, function(index, api) {
                if (api.name === $(el).find('input').val()) {
                    if (api.value.ismock) {
                        $(el).checkbox('set checked');
                    } else {
                        $(el).checkbox('set unchecked');
                    }
                    return false;
                }
            });
        });

    }

    get searchText() {
        return this._searchText;
    }
    set searchText(newValue) {

        var _this = this;
        this._searchText = newValue;

        if (newValue === '') {
            $.each(this.filterApiArr, function(index, val) {
                val.isHidden = false;
            });
        } else {

            $.each(this.filterApiArr, function(index, val) {
                if (val.name.indexOf(_this.searchText) !== -1) {
                    val.isHidden = false;
                } else {
                    val.isHidden = true;
                }
            });
        }
    }

    debugHandler(evt) {
        $('#md-debug').modal('show');
    }

}
