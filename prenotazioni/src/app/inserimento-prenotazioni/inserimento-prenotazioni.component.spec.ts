import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoPrenotazioniComponent } from './inserimento-prenotazioni.component';

describe('InserimentoPrenotazioniComponent', () => {
  let component: InserimentoPrenotazioniComponent;
  let fixture: ComponentFixture<InserimentoPrenotazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserimentoPrenotazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
