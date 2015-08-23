import {
    Validation
}
from 'aurelia-validation';

export class Validations {

    static inject = [Validation];

    constructor(validation) {
        this.heading = 'Welcome to the Aurelia Navigation App!';
        this.firstName = 'John';
        this.lastName = 'Doe';

        this.validation = validation.on(this)
            .ensure('firstName')
            .isNotEmpty()
            .hasMinLength(3)
            .hasMaxLength(10)
            .ensure('lastName')
            .isNotEmpty()
            .hasMinLength(3)
            .hasMaxLength(10);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    validate() {
        this.validation.validate() //the validate will fulfil when validation is valid, and reject if not
            .then(() => {
                alert(`Welcome, ${this.fullName}! `);
            });
    }
}
