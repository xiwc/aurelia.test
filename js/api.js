// 定义API初始化全局函数
window.nsApiFunc = (function() {

    // API全局共享定义(real:真实远程调用URL, mock:自定义调试数据URL.)
    var api = {
        'user.list': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/list.json',
            ismock: false
        },
        'user.update': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/update.json',
            ismock: false
        },
        'user.delete': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/delete.json',
            ismock: false
        },
        'event.list': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/list.json',
            ismock: false
        },
        'event.update': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/update.json',
            ismock: false
        },
        'event.delete': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/delete.json',
            ismock: false
        },
        'task.list': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/list.json',
            ismock: false
        },
        'task.update': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/update.json',
            ismock: false
        },
        'task.delete': {
            real: 'https://api.github.com/users',
            mock: '/mock/user/delete.json',
            ismock: false
        }
    };

    // API 初始化函数定义
    var apiFunc = function() {

        var prop = nsConfig.ismockApi ? 'mock' : 'real';
        var ret = {};
        for (var name in api) {
            ret[name] = api[name][prop];
        }

        window.nsApi = ret;
    };
    // API函数初始化执行
    apiFunc();
    window.nsAPI = api;

    return apiFunc;
})();
