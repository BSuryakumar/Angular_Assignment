import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
// import { DocumentListComponent } from '../document-list/document-list.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  
  hide = true;
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  submit()
  {
	this.httpClient.post("https://verify.flexm.com/api/token/authenticate",
	{
		Contact_Email: "dotcodtest@gmail.com",
		password: "admin1234"
	}
	)
	.subscribe(
		(data: any)=>
		{
			console.log(data);
		}
	)
	// .fail(function(xhr)
	// {
		// switch (xhr.status)
		// {
			// case 500:
				// alert('Something went wrong. Please try again.');
				// break;
			// case 501: 
				// alert('Something went wrong. Please try again.');
				// break;
			// case 502:
				// alert('Something went wrong. Please try again.');
				// break;
			// default:
			// dialogAlert('Something went wrong. Please try again.');
		// }
	// }
  }
  
  doc()
  {
	this.router.navigate(['/DocumentList']);
  }
  
}
