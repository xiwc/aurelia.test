import 'jquery';
import 'lib/jquery.notification.js';

export class Event {

    logs = [];

    click() {
        // alert('click handler...');
        this.logs.push('click handler...');
        $.ntf.info('click handler...');
    }
    keyup() {
        // alert('keyup handler...');
        this.logs.push('keyup handler...');
        $.ntf.info('keyup handler...');
    }
    change() {
        // alert('change handler...');
        this.logs.push('change handler...');
        $.ntf.info('change handler...');
    }
    focusin() {
        // alert('focusin handler...');
        this.logs.push('focusin handler...');
        $.ntf.info('focusin handler...');
    }
    mouseover() {
        // alert('mouseover handler...');
        this.logs.push('mouseover handler...');
        $.ntf.info('mouseover handler...');
    }
    mousedown() {
        // alert('mousedown handler...');
        this.logs.push('mousedown handler...');
        $.ntf.info('mousedown handler...');
    }
    scroll() {
        //alert('scroll handler...');
        this.logs.push('scroll handler...');
        $.ntf.info('scroll handler...');
    }
}
