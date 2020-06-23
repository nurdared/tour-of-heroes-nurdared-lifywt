import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule, ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HeroesComponent, 
    MessagesComponent, 
    HeroDetailsComponent, 
    DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService],
})
export class AppModule { }
