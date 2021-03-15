import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-history',
  templateUrl: './scan-history.component.html',
  styleUrls: ['./scan-history.component.css']
})
export class ScanHistoryComponent implements OnInit {
	shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private httpClient:HttpClient, private router: Router) { }
array:any;
  ngOnInit(): void {
	  
	  this.array=['1','2','3','4'];
	  console.log(this.array);
  }
  
  logout()
  {
	this.router.navigate(['/Login2']);
  }
}
