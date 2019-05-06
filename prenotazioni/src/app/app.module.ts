import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InserimentoPrenotazioniComponent } from './inserimento-prenotazioni/inserimento-prenotazioni.component';

import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InserimentoPrenotazioniComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni
