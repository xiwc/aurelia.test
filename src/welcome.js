export class Welcome{
	heading = 'Welcome to the Aurelia Navigation App! http://aurelia.io/index.html#home';
	firstName = 'Shelley';
	lastName = 'Durniok';

	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	welcome(){
		alert(`Welcome, ${this.fullName}!`);
	}
}