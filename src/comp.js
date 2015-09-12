export class Comp {

    created(view) {
        console.log("Comp created");
    }

    bind(bindingContext) {
        console.log("Comp bind");
    }

    unbind() {
        console.log("Comp unbind");
    }

    attached() {
        console.log("Comp attached");
    }

    detached() {
        console.log("Comp detached");
    }

    canActivate(params, routeConfig, navigationInstruction) {
        console.log('Comp canActivate');
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log('Comp activate');
    }

    canDeactivate() {
        console.log('Comp canDeactivate');
    }

    deactivate() {
        console.log('Comp deactivate');
    }
}
