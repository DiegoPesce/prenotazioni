import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-inserimento-prenotazioni',
  templateUrl: './inserimento-prenotazioni.component.html',
  styleUrls: ['./inserimento-prenotazioni.component.css']
})
export class InserimentoPrenotazioniComponent {
  constructor(public http: HttpClient){}

  nome: string;
  cognome: string;
  email: string;
  indirizzo: string;
  telefono: string;
  data: string;
  ora: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  insert(nome: HTMLInputElement, cognome: HTMLInputElement, email: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement) : void {
    this.nome = nome.value;
    this.cognome = cognome.value;
    this.email = email.value;
    this.indirizzo = indirizzo.value;
    this.telefono = telefono.value;
    this.data = data.value;
    this.ora = ora.value;

    this.http.post('https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni',
    JSON.stringify({
      nome : nome.value,
      cognome : cognome.value,
      email : email.value,
      indirizzo : indirizzo.value,
      telefono : telefono.value,
      data : data.value,
      ora : ora.value
    })
    ).subscribe((data)=> {console.log(data)} );
  }
}
