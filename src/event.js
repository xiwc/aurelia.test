export class Event {

    logs = [];

    click() {
        // alert('click handler...');
        this.logs.push('click handler...');
    }
    keyup() {
        // alert('keyup handler...');
        this.logs.push('keyup handler...');
    }
    change() {
        // alert('change handler...');
        this.logs.push('change handler...');
    }
    focusin() {
        // alert('focusin handler...');
        this.logs.push('focusin handler...');
    }
    mouseover() {
        // alert('mouseover handler...');
        this.logs.push('mouseover handler...');
    }
    mousedown() {
        // alert('mousedown handler...');
        this.logs.push('mousedown handler...');
    }
    scroll() {
        //alert('scroll handler...');
        this.logs.push('scroll handler...');
    }
}
