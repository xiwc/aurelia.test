import {
    I18N
}
from 'aurelia-i18next';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-animator-css')
        .globalResources(['debug/debug'])
        .plugin('aurelia-i18next', (instance) => {
            // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
            instance.setup({
                resGetPath: 'locale/__lng__/__ns__.json',
                lng: 'zh',
                attributes: ['t', 'i18n'],
                getAsync: true,
                sendMissing: false,
                fallbackLng: 'zh',
                debug: false
            });
        })
        .plugin('aurelia-validation', (config) => {
            config.useLocale('zh-CN')
        }); //Add this line to load the plugin

    aurelia.start().then(a => a.setRoot());
}
