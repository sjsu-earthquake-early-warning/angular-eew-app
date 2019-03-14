import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './home/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { TwitterfeedComponent } from './home/twitterfeed/twitterfeed.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    ChartComponent,
    TwitterfeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
