import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private httpClient:HttpClient, private router: Router) { }
	emaill:any;
	password:any;
	
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
	  this.emaill=<HTMLInputElement> document.getElementById("emaill");
	  console.log(this.emaill.value);
	
	  // this.password=password.value;
	  // this.password=document.getElementById("password").value;
	  this.password=<HTMLInputElement> document.getElementById("password");
	  console.log(this.password.value); 
	  
	if(this.emaill.value=='dotcodtest@gmail.com' && this.password.value=='admin1234')
	{
		this.httpClient.post("https://verify.flexm.com/api/token/authenticate",
		{
			Contact_Email: this.emaill.value,
			password: this.password.value
		}
		)
		.subscribe(
			(data: any)=>
			{
				alert("Data Received");
				console.log(data);
				this.router.navigate(['/DocumentList']);
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
	else{
		alert('Credentials Mismatched');
	}
	
	
  }  
}
