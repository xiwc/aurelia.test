import {
    bindable, sync, processContent, noView, useView, inlineView, containerless, useShadowDOM
}
from 'aurelia-framework';

// @useView('view.html')
// @noView()
export class Comp2 {

    @
    sync('.segment')
    arr = [];

    logs = [];

    btnHandler(evt) {
        // console.log(this.arr);
    }

    created(view) {
        console.log(new Date().getTime() + " Comp2 created");
        this.logs.push(new Date().getTime() + ' Comp2 created');
        $.ntf.info(' Comp2 created');
        // console.log(this.arr);
    }

    bind(bindingContext) {
        console.log(new Date().getTime() + " Comp2 bind");
        this.logs.push(new Date().getTime() + ' Comp2 bind');
        $.ntf.info(' Comp2 bind');
        // console.log(this.arr);
    }

    unbind() {
        console.log(new Date().getTime() + " Comp2 unbind");
        this.logs.push(new Date().getTime() + ' Comp2 unbind');
        $.ntf.info(' Comp2 unbind');
        // console.log(this.arr);
    }

    attached() {
        console.log(new Date().getTime() + " Comp2 attached");
        this.logs.push(new Date().getTime() + ' Comp2 attached');
        $.ntf.info(' Comp2 attached');
        // console.log(this.arr);
    }

    detached() {
        console.log(new Date().getTime() + " Comp2 detached");
        this.logs.push(new Date().getTime() + ' Comp2 detached');
        $.ntf.info(' Comp2 detached');
        // console.log(this.arr);
    }

    canActivate(params, routeConfig, navigationInstruction) {
        console.log('Comp2 canActivate');
        this.logs.push(new Date().getTime() + ' Comp2 canActivate');
        $.ntf.info(' Comp2 canActivate');
        // console.log(this.arr);
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log('Comp2 activate');
        this.logs.push(new Date().getTime() + ' Comp2 activate');
        $.ntf.info(' Comp2 activate');
        // console.log(this.arr);
    }

    canDeactivate() {
        console.log('Comp2 canDeactivate');
        this.logs.push(new Date().getTime() + ' Comp2 canDeactivate');
        $.ntf.info(' Comp2 canDeactivate');
        // console.log(this.arr);
    }

    deactivate() {
        console.log('Comp2 deactivate');
        this.logs.push(new Date().getTime() + ' Comp2 deactivate');
        $.ntf.info(' Comp2 deactivate');
        // console.log(this.arr);
    }
}
