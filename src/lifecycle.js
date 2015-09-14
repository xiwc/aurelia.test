export class Lifecycle {

    logs = [];

    created(view) {
        console.log(new Date().getTime() + ' Lifecycle created');
        this.logs.push(new Date().getTime() + ' Lifecycle created');
        $.ntf.info(' Lifecycle created');
    }

    bind(bindingContext) {
        console.log(new Date().getTime() + ' Lifecycle bind');
        this.logs.push(new Date().getTime() + ' Lifecycle bind');
        $.ntf.info(' Lifecycle bind');
    }

    unbind() {
        console.log(new Date().getTime() + ' Lifecycle unbind');
        this.logs.push(new Date().getTime() + ' Lifecycle unbind');
        $.ntf.info(' Lifecycle unbind');
    }

    attached() {
        console.log(new Date().getTime() + ' Lifecycle attached');
        this.logs.push(new Date().getTime() + ' Lifecycle attached');
        $.ntf.info(' Lifecycle attached');
    }

    detached() {
        console.log(new Date().getTime() + ' Lifecycle detached');
        this.logs.push(new Date().getTime() + ' Lifecycle detached');
        $.ntf.info(' Lifecycle detached');
    }

    canActivate(params, routeConfig, navigationInstruction) {
        console.log(new Date().getTime() + ' Lifecycle canActivate');
        this.logs.push(new Date().getTime() + ' Lifecycle canActivate');
        $.ntf.info(' Lifecycle canActivate');
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log(new Date().getTime() + ' Lifecycle activate');
        this.logs.push(new Date().getTime() + ' Lifecycle activate');
        $.ntf.info(' Lifecycle activate');
    }

    canDeactivate() {
        console.log(new Date().getTime() + ' Lifecycle canDeactivate');
        this.logs.push(new Date().getTime() + ' Lifecycle canDeactivate');
        $.ntf.info(' Lifecycle canDeactivate');
    }

    deactivate() {
        console.log(new Date().getTime() + ' Lifecycle deactivate');
        this.logs.push(new Date().getTime() + ' Lifecycle deactivate');
        $.ntf.info(' Lifecycle deactivate');
    }
}
