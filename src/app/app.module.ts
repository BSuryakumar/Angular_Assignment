import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import { DocumentListComponent } from './document-list/document-list.component';
import { Login2Component } from './login2/login2.component';
import { ScanHistoryComponent } from './scan-history/scan-history.component';
import {MatExpansionModule} from '@angular/material/expansion';

const routes: Routes = [
  {
    path:"",
    // component: LoginComponent
	component: Login2Component
  },
  {
    path:"Login2",
    // component: LoginComponent
	component: Login2Component
  },
  {
    path:"DocumentList",
    component: DocumentListComponent
  },
  {
    path:"ScanHistoryComponent",
    component: ScanHistoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentListComponent,
    Login2Component,
    ScanHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	RouterModule.forRoot(routes),
    BrowserAnimationsModule,
	MatSliderModule,
	MatGridListModule,
	MatCardModule,
	MatFormFieldModule,
	MatTabsModule,
	MatIconModule,
	MatSelectModule,
	MatInputModule,
	MatChipsModule,
	MatCheckboxModule,
	FormsModule, 
	ReactiveFormsModule,
	MatButtonModule,
	MatToolbarModule,
	MatSidenavModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRippleModule,
	MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
