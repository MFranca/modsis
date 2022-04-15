//import { HttpClientModule } from '@angular/common/http'; // REST client - vamos precisar mais tarde...

// Internationalization (PT-BR)
import { NgModule, LOCALE_ID } from '@angular/core'; //import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr) 

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// UI
import { MaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

// Meus Componententes
import { HomeComponent } from './components/home/home.component';

// Meus Serviços...
//import { TestsService } from './shared/services/tests.service';

@NgModule({  
  declarations: [ // declarations são para componentes...
    AppComponent,
    HomeComponent
  ],
  imports: [ // imports são para módulos...
    BrowserModule,
    AppRoutingModule, // Navigation routes in app-routing.module.ts (routing table) - best practice to have it in a separated module
    BrowserAnimationsModule, 
    MaterialModule,
    //HttpClientModule, // obviously, to make HTTP calls (added by Angular CLI).
    FormsModule, ReactiveFormsModule // to work with (template) forms
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' } // force to use locale pt-BR
    //TestsService,
  ], // providers são para serviços...
  bootstrap: [AppComponent]
})
export class AppModule { }
//------------------------