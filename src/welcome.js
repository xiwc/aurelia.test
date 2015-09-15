import {
    computedFrom
}
from 'aurelia-framework';

export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;
    selVal = "";
    val = "af";
    vals = ['css', 'design'];

    //Getters can't be observed with Object.observe, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
    //@computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    addHandler() {
        console.log(this.vals);
        this.vals.push('html');
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
    }

    chgHandler() {
        console.log('change...');
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }

    buttonCallback(info) {
        console.log(info);
    }

    created(view) {
        console.log("Welcome created");
    }

    bind(bindingContext) {
        console.log("Welcome bind");

        this.changeHandler = (arr, p1, p2) => {
            // console.log(arguments.length);
            console.log(arr + ' ' + p1 + ' ' + p2);
            console.log('test =>' + this.fullName);
        };
    }

    attached() {

        $('.ui.sidebar')
            .sidebar({
                context: $('.seg01')
            })
            .sidebar('attach events', '.item01');

        $('#dropdown').dropdown({
            onChange: (val) => {
                console.log(val);
                this.firstName = val;
                this.selVal = val;
            }
        });

        $(this.ddLan).dropdown();

    }

    // changeHandler(){
    //     console.log('test' + this.fullName);
    // }

    changeCall(evt) {
        console.log('test ' + evt + " " + this.fullName);
    }

}
