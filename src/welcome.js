import {
    computedFrom, bindable, bindingMode
}
from 'aurelia-framework';

@bindable({
  name:'myProperty', //name of the property on the class
  attribute:'my-property', //name of the attribute in HTML
  changeHandler:'myPropertyChanged', //name of the method to invoke when the property changes
  defaultBindingMode: bindingMode.oneWay, //default binding mode used with the .bind command
  defaultValue: undefined //default value of the property, if not bound or set in HTML
})
export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;
    selVal = "";
    val = "af";
    vals = ['css', 'design'];
    items = [{
        name: 'Albania',
        value: 'al'
    }, {
        name: 'Afghanistan',
        value: 'af'
    }, {
        name: 'American Samoa',
        value: 'as'
    }];

    sed = 0;

    // items = ['aaa', 'bbb', 'ccc'];
    sels = ['abc'];

    //Getters can't be observed with Object.observe, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
    //@computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor() {
        // Array.observe(this.items, (changes) => {
        //     $(this.dd3).dropdown();
        //     $(this.dd3).dropdown('set selected', this.sed);
        //     $.ntf.info('Array.observe');
        // });

    }

    myPropertyChanged() {
        $(this.dd3).dropdown({allowAdditions: true});
        $(this.dd3).dropdown('set selected', this.sed);
        $.ntf.info('myPropertyChanged');
    }

    addAndSetHander() {
        // this.val = 'as';
        var i = ++this.sed;
        this.items.push({
            name: 'Item-' + i,
            value: i
        });

        this.myProperty = this.sed;

        // $(this.dd3).dropdown({allowAdditions: true});
        // $(this.dd3).dropdown('set selected', this.sed);

        // $(this.dd3).dropdown('set selected', this.sed); // 不起作用

        // // 延迟设置, 起作用
        // setTimeout(() => {
        //     $(this.dd3).dropdown('set selected', this.sed);
        // }, 5000);

        $.ntf.info('addAndSetHander');
        // $(this.dd3).dropdown('refresh');
        // $(this.dd3).dropdown('restore defaults');
    }

    addAndSetFereshHander() {
        $.ntf.info('addAndSetFereshHander');
        // $(this.dd3).dropdown('refresh');
        // $(this.dd3).dropdown('restore defaults');
        $(this.dd3).dropdown('set selected', this.sed);
    }

    // configureRouter(config, router) {
        
    //     config.map([{
    //         route: 'users',
    //         name: 'users',
    //         moduleId: 'users',
    //         nav: true,
    //         title: 'Github Users'
    //     }]);

    //     this.router = router;
    // }

    addItemHandler() {
        this.items.push(new Date().getTime());
        // this.sels = ['ccc'];
    }
    
    showHandler(evt, v, v2) {

        $.ntf.info(evt + ' ' + v + ' ' + v2)
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
        $(this.dd1).dropdown();
        $(this.dd3).dropdown({allowAdditions: true});

        // this.menu1.addEventListener('DOMNodeInserted', () => {
        //     $.ntf.info('DOMNodeInserted');

        //     $(this.dd3).dropdown('set selected', this.sed);
        // }, false);
        // this.menu1.addEventListener('DOMAttrModified', () => {
        //     $.ntf.info('DOMAttrModified');

        //     $(this.dd3).dropdown('set selected', this.sed);
        // }, false);
        // this.menu1.addEventListener('DOMNodeRemoved', () => {
        //     $.ntf.info('DOMNodeRemoved');

        //     $(this.dd3).dropdown('set selected', this.sed);
        // }, false);


    }

    // changeHandler(){
    //     console.log('test' + this.fullName);
    // }

    changeCall(evt) {
        console.log('test ' + evt + " " + this.fullName);
    }

}
