import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms'; //	NgModel is here
import { HttpModule }		from '@angular/http';

// imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule }	from 'angular-in-memory-web-api';
import { InMemoryDataService }	from './in-memory-data.service';

import { HeroDetailComponent }	from './hero-detail.component';
import { HeroesComponent }		from './heroes.component';
import { HeroService }			from './hero.service';
import { DashboardComponent }	from './dashboard.component';
import { AppRoutingModule }		from './app-routing.module';
import { HeroSearchComponent }	from './hero-search.component';

import { AppComponent }			from './app.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule, //	import the FormsModule before binding with [(ngModel)]
  	AppRoutingModule,
  	HttpModule
  ],
  declarations: [
  	AppComponent,
  	HeroDetailComponent,
  	HeroesComponent,
  	DashboardComponent,
  	HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
