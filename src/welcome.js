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

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
    }

    chgHandler(){
        console.log('change...');
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }

    buttonCallback(info){
        console.log(info);
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
    }

}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}
