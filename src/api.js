import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Api {

    constructor(http) {
        this.http = http;
    }
    postHttpClientHandler() {

		var p = {
            name: 'lisan',
            password: 'sdfsdf'
        };
		var form = new FormData();
		 
		form.append("username", "Groucho");
		form.append("accountnum", 123456); 

		//p = form;

		p = JSON.stringify(p);

        this.http.post('/api/user/add', p).then(resp => this.user = resp.content);
    }    
    postJqueryHandler() {

		var p = {
            name: 'lisan',
            password: 'sdfsdf'
        };
		var form = new FormData();
		 
		form.append("username", "Groucho");
		form.append("accountnum", 123456); 

		//p = form;

		//p = JSON.stringify(p);

		$.post('/api/user/add', p, function(data, textStatus, xhr) {
			/*optional stuff to do after success */
			console.log(data);
		});

    }
}
