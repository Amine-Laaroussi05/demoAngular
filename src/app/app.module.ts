import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreComponent } from './components/liste-filtre/liste-filtre.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { DateComponent } from './components/date/date.component';
import { ButtonAlertComponent } from './components/button-alert/button-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    Exo1Component,
    Exercice1Component,
    DateComponent,
    ButtonAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
