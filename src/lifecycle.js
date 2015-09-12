export class Lifecycle {

    created(view) {
        console.log("Lifecycle created");
    }

    bind(bindingContext) {
        console.log("Lifecycle bind");
    }

    unbind() {
        console.log("Lifecycle unbind");
    }

    attached() {
        console.log("Lifecycle attached");
    }

    detached() {
        console.log("Lifecycle detached");
    }

    canActivate(params, routeConfig, navigationInstruction) {
        console.log('Lifecycle canActivate');
    }

    activate(params, routeConfig, navigationInstruction) {
        console.log('Lifecycle activate');
    }

    canDeactivate() {
        console.log('Lifecycle canDeactivate');
    }

    deactivate() {
        console.log('Lifecycle deactivate');
    }
}
