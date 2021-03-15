import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
	shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private httpClient:HttpClient, private router: Router) { }
	// text_for:any;
  ngOnInit(): void {
	
	// this.text_for="SURYA";
	// alert(this.text_for);
	localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdGNvZHRlc3RAZ21haWwuY29tIiwiYWNjX2lkIjoiMSIsInVzZXJfaWQiOiI2MDQ1YmZiNjkwMGZlOTA5NDk0OTA2NzEiLCJpYXQiOjE2MTU0ODExMDYsImV4cCI6MTc3MTAwMTEwNn0.g6V0aBn_6faK_kKqVprtgMBbX9FiMfjmMzfyH0UXD5E");
	
	//header: access-token : token
	
	console.log("Token:"+localStorage.getItem("token"));
	//console.log("Headers:"+ header);
	
	const httpOptions = {  
        headers: new HttpHeaders({  
          //'Content-Type': 'application/json; charset=utf-8',
			header: localStorage.getItem("token")
			//access-token: localStorage.getItem("token")
        })  
      };  
	  
	let url = 'https://verify.flexm.com/api/scans/scanDocByTenent';  
    this.httpClient.post(url, {
		Tenant_ID:"",
		limit:"10",
		pageNo:"1",
		order:"-1",
		search:"",
		fieldName:"",
		startDate:"2021-03-11T18:30:00.000Z",
		endDate:"2021-03-13T18:30:00.000Z",
		status:""
	},httpOptions).subscribe(res =>  
    //console.log(res.json())
	console.log(res)
	);  
	
	// .subscribe(
		// (data: any)=>
		// {
			// console.log(data);
		// }
	// )
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
  
  logout()
  {
	this.router.navigate(['/Login2']);
  }
  
  scan_history()
  {
	  this.router.navigate(['/ScanHistoryComponent']);
  }

}