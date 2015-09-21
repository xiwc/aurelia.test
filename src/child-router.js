export class ChildRouter {
    heading = 'Child Router';

    configureRouter(config, router) {
        config.map([{
            route: ['', 'welcome'],
            name: 'welcome',
            moduleId: 'welcome',
            nav: true,
            title: 'Welcome'
        }, {
            route: 'event',
            name: 'event',
            moduleId: 'event',
            nav: true,
            title: 'Event'
        }, {
            route: 'calendar',
            name: 'calendar',
            moduleId: 'calendar',
            nav: true,
            title: 'Calendar'
        }, {
            route: 'users',
            name: 'users',
            moduleId: 'users',
            nav: true,
            title: 'Github Users'
        }, {
            route: 'child-router',
            name: 'child-router',
            moduleId: 'child-router',
            nav: true,
            title: 'Child Router'
        }]);

        this.router = router;
    }
}
