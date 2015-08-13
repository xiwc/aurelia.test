// 定义API初始化全局函数
window.nsApiFunc = (function() {

    // API全局共享定义(real:真实远程调用URL, mock:自定义调试数据URL.)
    var api = {
        'user.list': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/list.json'
        }
    };

    // API 初始化函数定义
    var apiFunc = function() {

        var prop = nsConfig.isMockApi ? 'mock' : 'real';
        var ret = {};
        for (var name in api) {
            ret[name] = api[name][prop];
        }

        return ret;
    };
    // API函数初始化执行
    window.nsApi = apiFunc();

    return apiFunc;
})();
