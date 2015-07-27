import {EventAggregator} from 'aurelia-event-aggregator';

export class Publisher{
    static inject = [EventAggregator];
    constructor(eventAggregator){
        this.eventAggregator = eventAggregator;
    }

    publish(){
        var payload = {
        	name: 'test'
        }; //any object
        this.eventAggregator.publish('channel-test', payload);
    }
}