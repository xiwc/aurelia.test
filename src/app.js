import 'jquery';
import 'semantic-ui';
import 'js/jquery.notification';
import 'js/config';
import 'js/api';

export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([{
            route: ['', 'welcome'],
            name: 'welcome',
            moduleId: './welcome',
            nav: true,
            title: 'Welcome'
        }, {
            route: ['lifecycle'],
            name: 'lifecycle',
            moduleId: './lifecycle',
            nav: true,
            title: 'Lifecycle'
        }, {
            route: ['dragdrop'],
            name: 'dragdrop',
            moduleId: './drag-drop',
            nav: true,
            title: 'Dragdrop'
        }, {
            route: 'event',
            name: 'event',
            moduleId: './event',
            nav: true,
            title: 'Event'
        }, {
            route: 'calendar',
            name: 'calendar',
            moduleId: './calendar',
            nav: true,
            title: 'Calendar'
        }, {
            route: 'users',
            name: 'users',
            moduleId: './users',
            nav: true,
            title: 'Github Users'
        }, {
            route: 'api',
            name: 'api',
            moduleId: './api',
            nav: true,
            title: 'Http API'
        }, {
            route: 'iframe',
            name: 'iframe',
            moduleId: './iframe',
            nav: true,
            title: 'Iframe'
        }, {
            route: 'i18n',
            name: 'i18n',
            moduleId: './i18n',
            nav: true,
            title: 'I18N'
        }, {
            route: 'validation',
            name: 'validation',
            moduleId: './validation',
            nav: true,
            title: 'Validation'
        }, {
            route: 'child-router',
            name: 'child-router',
            moduleId: './child-router',
            nav: true,
            title: 'Child Router'
        }]);

        this.router = router;
    }
}
