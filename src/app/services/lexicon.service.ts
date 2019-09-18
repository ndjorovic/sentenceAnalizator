import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LexiconService {

  constructor() { }

  getLexicon() {
    const lexicon = localStorage.getItem('lexicon');
    return new Observable((observer) => {
      observer.next(JSON.parse(lexicon));
    });
  }

  saveLexicon(model) {
    localStorage.setItem('lexicon', JSON.stringify(model));
    return new Observable((observer) => {
      observer.next('afsdas');
    });
  }

}
