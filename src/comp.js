import {
    bindable, sync, processContent, noView, useView, inlineView, containerless, useShadowDOM
}
from 'aurelia-framework';

// @useView('view.html')
// @noView()
export class Comp {

    @
    sync('.segment')
    arr = [];

    logs = [];

    btnHandler(evt) {
        console.log(this.arr);
    }

    created(view) {
        console.log(new Date().getTime() + " Comp created");
        this.logs.push(new Date().getTime() + ' Comp created');
        $.ntf.info(' Comp created');
        console.log(this.arr);
    }

    bind(bindingContext) {
        console.log(new Date().getTime() + " Comp bind");
        this.logs.push(new Date().getTime() + ' Comp bind');
        $.ntf.info(' Comp bind');
        console.log(this.arr);
    }

    unbind() {
        console.log(new Date().getTime() + " Comp unbind");
        this.logs.push(new Date().getTime() + ' Comp unbind');
        $.ntf.info(' Comp unbind');
        console.log(this.arr);
    }

    attached() {
        console.log(new Date().getTime() + " Comp attached");
        this.logs.push(new Date().getTime() + ' Comp attached');
        $.ntf.info(' Comp attached');
        console.log(this.arr);
    }

    detached() {
        console.log(new Date().getTime() + " Comp detached");
        this.logs.push(new Date().getTime() + ' Comp detached');
        $.ntf.info(' Comp detached');
        console.log(this.arr);
    }

    canActivate(params, routeConfig, navigationInstruction) {
        console.log('Comp canActivate');
        this.logs.push(new Date().getTime() + ' Comp canActivate');
        $.ntf.info(' Comp canActivate');
        console.log(this.arr);
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log('Comp activate');
        this.logs.push(new Date().getTime() + ' Comp activate');
        $.ntf.info(' Comp activate');
        console.log(this.arr);
    }

    canDeactivate() {
        console.log('Comp canDeactivate');
        this.logs.push(new Date().getTime() + ' Comp canDeactivate');
        $.ntf.info(' Comp canDeactivate');
        console.log(this.arr);
    }

    deactivate() {
        console.log('Comp deactivate');
        this.logs.push(new Date().getTime() + ' Comp deactivate');
        $.ntf.info(' Comp deactivate');
        console.log(this.arr);
    }
}
