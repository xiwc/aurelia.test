System.config({
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {
        "optional": [
            "es7.decorators",
            "es7.classProperties",
            "runtime"
        ]
    },
    paths: {
        "*": "dist/*.js",
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    map: {
        "aurelia-animator-css": "github:aurelia/animator-css@0.15.0",
        "aurelia-binding": "github:aurelia/binding@0.8.6",
        "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.16.0",
        "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
        "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
        "aurelia-fetch-client": "github:aurelia/fetch-client@0.1.2",
        "aurelia-framework": "github:aurelia/framework@0.15.0",
        "aurelia-history": "github:aurelia/history@0.6.1",
        "aurelia-history-browser": "github:aurelia/history-browser@0.7.0",
        "aurelia-http-client": "github:aurelia/http-client@0.10.3",
        "aurelia-i18next": "github:zewa666/aurelia-i18next@0.7.1",
        "aurelia-loader": "github:aurelia/loader@0.8.7",
        "aurelia-loader-default": "github:aurelia/loader-default@0.9.5",
        "aurelia-logging": "github:aurelia/logging@0.6.4",
        "aurelia-metadata": "github:aurelia/metadata@0.7.3",
        "aurelia-path": "github:aurelia/path@0.8.1",
        "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.2",
        "aurelia-router": "github:aurelia/router@0.11.0",
        "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
        "aurelia-templating": "github:aurelia/templating@0.14.1",
        "aurelia-templating-binding": "github:aurelia/templating-binding@0.14.0",
        "aurelia-templating-resources": "github:aurelia/templating-resources@0.14.0",
        "aurelia-templating-router": "github:aurelia/templating-router@0.15.0",
        "aurelia-validation": "github:aurelia/validation@0.2.8",
        "babel": "npm:babel-core@5.8.3",
        "babel-runtime": "npm:babel-runtime@5.8.3",
        "core-js": "npm:core-js@0.9.18",
        "css": "github:systemjs/plugin-css@0.1.17",
        "dragdrop": "github:kbjr/DragDrop@0.3.0",
        "dragula": "github:bevacqua/dragula@3.1.0",
        "font-awesome": "npm:font-awesome@4.4.0",
        "fullcalendar": "github:fullcalendar/fullcalendar@2.4.0",
        "jquery": "github:components/jquery@1.11.2",
        "jquery-ui": "github:components/jqueryui@1.11.4",
        "lib-api": "lib:api",
        "lib-config": "lib:config",
        "lib-fullcalendar": "lib:fullcalendar/fullcalendar.min",
        "lib-fullcalendar-lang-all": "lib:fullcalendar/lang-all",
        "lib-jquery-notification": "lib:jquery.notification",
        "lib-semantic-ui": "lib:semantic-ui/semantic",
        "moment": "npm:moment@2.10.6",
        "semantic-ui": "github:Semantic-Org/Semantic-UI@2.1.4",
        "github:Semantic-Org/Semantic-UI@2.1.4": {
            "css": "github:systemjs/plugin-css@0.1.17",
            "jquery": "github:components/jquery@1.11.2"
        },
        "github:aurelia/animator-css@0.15.0": {
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-templating": "github:aurelia/templating@0.14.4"
        },
        "github:aurelia/binding@0.8.6": {
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/bootstrapper@0.16.0": {
            "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
            "aurelia-framework": "github:aurelia/framework@0.15.0",
            "aurelia-history": "github:aurelia/history@0.6.1",
            "aurelia-history-browser": "github:aurelia/history-browser@0.7.0",
            "aurelia-loader-default": "github:aurelia/loader-default@0.9.5",
            "aurelia-logging-console": "github:aurelia/logging-console@0.6.2",
            "aurelia-router": "github:aurelia/router@0.11.0",
            "aurelia-templating": "github:aurelia/templating@0.14.4",
            "aurelia-templating-binding": "github:aurelia/templating-binding@0.14.0",
            "aurelia-templating-resources": "github:aurelia/templating-resources@0.14.0",
            "aurelia-templating-router": "github:aurelia/templating-router@0.15.0",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/dependency-injection@0.9.2": {
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/event-aggregator@0.7.0": {
            "aurelia-logging": "github:aurelia/logging@0.6.4"
        },
        "github:aurelia/fetch-client@0.1.2": {
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/framework@0.15.0": {
            "aurelia-binding": "github:aurelia/binding@0.8.6",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-loader": "github:aurelia/loader@0.8.7",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-path": "github:aurelia/path@0.8.1",
            "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
            "aurelia-templating": "github:aurelia/templating@0.14.4",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/history-browser@0.7.0": {
            "aurelia-history": "github:aurelia/history@0.6.1",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/http-client@0.10.3": {
            "aurelia-path": "github:aurelia/path@0.8.1",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/loader-default@0.9.5": {
            "aurelia-loader": "github:aurelia/loader@0.8.7",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3"
        },
        "github:aurelia/loader@0.8.7": {
            "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-path": "github:aurelia/path@0.8.1",
            "core-js": "npm:core-js@0.9.18",
            "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
        },
        "github:aurelia/logging-console@0.6.2": {
            "aurelia-logging": "github:aurelia/logging@0.6.4"
        },
        "github:aurelia/metadata@0.7.3": {
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/route-recognizer@0.6.2": {
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/router@0.11.0": {
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
            "aurelia-history": "github:aurelia/history@0.6.1",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-path": "github:aurelia/path@0.8.1",
            "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.2",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/templating-binding@0.14.0": {
            "aurelia-binding": "github:aurelia/binding@0.8.6",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-templating": "github:aurelia/templating@0.14.4"
        },
        "github:aurelia/templating-resources@0.14.0": {
            "aurelia-binding": "github:aurelia/binding@0.8.6",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
            "aurelia-templating": "github:aurelia/templating@0.14.4",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/templating-router@0.15.0": {
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-path": "github:aurelia/path@0.8.1",
            "aurelia-router": "github:aurelia/router@0.11.0",
            "aurelia-templating": "github:aurelia/templating@0.14.4"
        },
        "github:aurelia/templating@0.14.1": {
            "aurelia-binding": "github:aurelia/binding@0.8.6",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
            "aurelia-loader": "github:aurelia/loader@0.8.7",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-path": "github:aurelia/path@0.8.1",
            "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/templating@0.14.4": {
            "aurelia-binding": "github:aurelia/binding@0.8.6",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
            "aurelia-loader": "github:aurelia/loader@0.8.7",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-metadata": "github:aurelia/metadata@0.7.3",
            "aurelia-path": "github:aurelia/path@0.8.1",
            "aurelia-task-queue": "github:aurelia/task-queue@0.6.2",
            "core-js": "npm:core-js@0.9.18"
        },
        "github:aurelia/validation@0.2.8": {
            "aurelia-binding": "github:aurelia/binding@0.8.6",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.2",
            "aurelia-logging": "github:aurelia/logging@0.6.4",
            "aurelia-templating": "github:aurelia/templating@0.14.4"
        },
        "github:components/jqueryui@1.11.4": {
            "jquery": "github:components/jquery@1.11.2"
        },
        "github:jspm/nodelibs-process@0.1.1": {
            "process": "npm:process@0.10.1"
        },
        "github:zewa666/aurelia-i18next@0.7.1": {
            "Intl.js": "github:andyearnshaw/Intl.js@0.1.4",
            "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.7.0",
            "aurelia-loader-default": "github:aurelia/loader-default@0.9.5",
            "aurelia-templating": "github:aurelia/templating@0.14.4",
            "i18next": "github:i18next/i18next@1.10.2"
        },
        "npm:babel-runtime@5.8.3": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:core-js@0.9.18": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:font-awesome@4.4.0": {
            "css": "github:systemjs/plugin-css@0.1.17"
        },
        "npm:moment@2.10.6": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        }
    }
});
