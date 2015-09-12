export class Comp {

    logs = [];

    created(view) {
        console.log(new Date().getTime() + " Comp created");
        this.logs.push(new Date().getTime() + ' Comp created');
        $.ntf.info(' Comp created');
    }

    bind(bindingContext) {
        console.log(new Date().getTime() + " Comp bind");
        this.logs.push(new Date().getTime() + ' Comp bind');
        $.ntf.info(' Comp bind');
    }

    unbind() {
        console.log(new Date().getTime() + " Comp unbind");
        this.logs.push(new Date().getTime() + ' Comp unbind');
        $.ntf.info(' Comp unbind');
    }

    attached() {
        console.log(new Date().getTime() + " Comp attached");
        this.logs.push(new Date().getTime() + ' Comp attached');
        $.ntf.info(' Comp attached');
    }

    detached() {
        console.log(new Date().getTime() + " Comp detached");
        this.logs.push(new Date().getTime() + ' Comp detached');
        $.ntf.info(' Comp detached');
    }

    canActivate(params, routeConfig, navigationInstruction) {
        console.log('Comp canActivate');
        this.logs.push(new Date().getTime() + ' Comp canActivate');
        $.ntf.info(' Comp canActivate');
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log('Comp activate');
        this.logs.push(new Date().getTime() + ' Comp activate');
        $.ntf.info(' Comp activate');
    }

    canDeactivate() {
        console.log('Comp canDeactivate');
        this.logs.push(new Date().getTime() + ' Comp canDeactivate');
        $.ntf.info(' Comp canDeactivate');
    }

    deactivate() {
        console.log('Comp deactivate');
        this.logs.push(new Date().getTime() + ' Comp deactivate');
        $.ntf.info(' Comp deactivate');
    }
}
