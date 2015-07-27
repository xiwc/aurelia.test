import 'jquery';
import 'lib/jquery.notification.js';

import {Publisher} from './publisher';
import {ASubscriber, BSubscriber} from './subscriber';

export class Event {

    static inject = [Publisher, ASubscriber, BSubscriber];

    constructor(publisher, subscriberA, subscriberB){
        this.publisher = publisher;
        this.subscriberA = subscriberA;
        this.subscriberB = subscriberB;

        this.subscriberA.subscribe();
        this.subscriberB.subscribe();
    }

    publish(){
        this.publisher.publish();
    }

    logs = [];

    click() {
        this.logs.push('click handler...');
        $.ntf.info('click handler...');
    }
    keyup() {
        this.logs.push('keyup handler...');
        $.ntf.info('keyup handler...');
    }
    change() {
        this.logs.push('change handler...');
        $.ntf.info('change handler...');
    }
    focusin() {
        this.logs.push('focusin handler...');
        $.ntf.info('focusin handler...');
    }
    mouseover() {
        this.logs.push('mouseover handler...');
        $.ntf.info('mouseover handler...');
    }
    mousedown() {
        this.logs.push('mousedown handler...');
        $.ntf.info('mousedown handler...');
    }
    scroll() {
        this.logs.push('scroll handler...');
        $.ntf.info('scroll handler...');
    }
}
