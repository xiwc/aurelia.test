import 'lib/fullcalendar/fullcalendar.css!';
import 'jquery';
// import 'lib/fullcalendar/lib/moment.min.js';
import 'moment';
import 'jquery-ui';
// import 'lib/fullcalendar/lib/jquery-ui.custom.min.js';
import 'lib/fullcalendar/fullcalendar.min.js';
import 'lib/fullcalendar/lang-all.js';

import 'lib/semantic-ui/semantic.min.js';

import 'lib/jquery.notification.js';

// import {fullcalendar} from 'fullcalendar';
// import 'fullcalendar/dist/fullcalendar.min.css!';

export class Calendar {

    currentLangCode = 'zh-cn';
    langs = [];
    events = [{
        title: 'All Day Event',
        start: '2015-02-01'
    }, {
        title: 'Long Event',
        start: '2015-02-07',
        end: '2015-02-10'
    }, {
        id: 999,
        title: 'Repeating Event',
        start: '2015-02-09T16:00:00'
    }, {
        id: 999,
        title: 'Repeating Event',
        start: '2015-02-16T16:00:00'
    }, {
        title: 'Conference',
        start: '2015-02-11',
        end: '2015-02-13'
    }, {
        title: 'Meeting',
        start: '2015-02-12T10:30:00',
        end: '2015-02-12T12:30:00'
    }, {
        title: 'Lunch',
        start: '2015-02-12T12:00:00'
    }, {
        title: 'Meeting',
        start: '2015-02-12T14:30:00'
    }, {
        title: 'Happy Hour',
        start: '2015-02-12T17:30:00'
    }, {
        title: 'Dinner',
        start: '2015-02-12T20:00:00'
    }, {
        title: 'Birthday Party',
        start: '2015-02-13T07:00:00'
    }, {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2015-02-28'
    }];

    addedEvt = '';

    attached() {

        var _this = this;

        // build the language selector's options
        $.each($.fullCalendar.langs, function(langCode) {
            _this.langs.push(langCode);
        });

        // $.each($.fullCalendar.langs, function(langCode) {
        //     $('#lang-selector').append(
        //         $('<option/>')
        //         .attr('value', langCode)
        //         .prop('selected', langCode == _this.currentLangCode)
        //         .text(langCode)
        //     );
        // });

        // rerender the calendar when the selected option changes
        // $('#lang-selector').on('change', function() {
        //     if (this.value) {
        //         _this.currentLangCode = this.value;
        //         $('#calendar').fullCalendar('destroy');
        //         _this.renderCalendar();
        //     }
        // });

        $('#external-events .fc-event').each(function() {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });

        });

        this.renderCalendar();

        $('.ui.search')
            .search({
                source: this.events,
                searchFields: [
                    'title'
                ],
                searchFullText: false
            });

        $('.modal-add-event').modal();

    }

    activate() {

    }

    langChangeHandler() {

        if (!this.currentLangCode) {
            return;
        }

        $('#calendar').fullCalendar('destroy');
        this.renderCalendar();
    }

    renderCalendar() {

        var _this = this;

        $('#calendar')
            .fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultDate: '2015-02-12',
                lang: this.currentLangCode,
                editable: true,
                eventLimit: true,
                droppable: true,
                drop: function() {
                    if ($('#drop-remove').is(':checked')) {
                        $(this).remove();
                    }
                },
                selectable: true,
                selectHelper: true,
                select: function(start, end) {

                    $('.modal-add-event').modal({
                        // detachable:false,
                        // observeChanges:true,
                        autofocus: false,
                        onApprove: function() {
                            var eventData;
                            if (_this.addedEvt) {
                                eventData = {
                                    title: _this.addedEvt,
                                    start: start,
                                    end: end
                                };
                                $('#calendar').fullCalendar('renderEvent', eventData, true);
                                _this.events.push(eventData);
                                _this.addedEvt = '';
                                $.ntf.info('添加成功!');
                            }
                            $('#calendar').fullCalendar('unselect');
                        },
                        onDeny: function(){
                             _this.addedEvt = '';
                        },
                        onVisible: function() {
                            // $('.modal-add-event textarea').focus();
                        }
                    }).modal('show');

                },
                events: this.events
            });
    }
}
