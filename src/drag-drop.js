import "dragdrop";
import {
    default as dragula
}
from "dragula";
import "dragula@3.1.0/dist/dragula.min.css!";

export class MyDragDrop {


    attached() {

        dragula([document.querySelector('#todo'), document.querySelector('#doing')]);
        // dragula([document.querySelector('#doing'), document.querySelector('#checking')]);
        dragula([document.querySelector('#checking'), document.querySelector('#done')]);

        // var elem = document.getElementById('cd-item');
        // var elem2 = document.getElementById('cd-header');
        // // Make myElement drag-and-drop enabled
        // //DragDrop.bind(document.getElementById('cd-item'));

        // // A more complex version
        // var draggable = DragDrop.bind(elem, {
        //     // The anchor; myElement moves when anotherElement is dragged
        //     anchor: elem,
        //     // The draggable element will now stay bound within it's offsetParent
        //     //boundingBox: 'offsetParent',
        //     // Define a dragstart event
        //     dragstart: function(evt) {
        //         console.log('DragDrop.bind dragstart', evt);
        //     },
        //     drag: function(evt) {
        //         console.log('DragDrop.bind drag', evt);
        //     },
        //     dragend: function(evt) {
        //         console.log('DragDrop.bind dragend', evt);
        //     }
        // });

        // Change the bounding box to some manual positions
        // draggable.setBoundingBox({
        //     x: {
        //         min: 0,
        //         max: 600
        //     },
        //     y: {
        //         min: 0,
        //         max: 400
        //     }
        // });

        // Define a new dragend event
        // draggable.bindEvent('dragend', function(evt) {
        //     // ...
        // });

        // This is how you would remove a drag event (if one were defined above)
        //draggable.unbindEvent('drag', theBoundDragEventFunction);
    }
}
