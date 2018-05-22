import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  private readonly apiLink = 'https://randomuser.me/api/';

  constructor(private http: Http) {
   }

   fetchCardDetails(): Observable<any> {
    return this.http.get(this.apiLink, {params: 'results=10'})
    .map(data => data.json().results)/* .filter(data => {
      return data.nat === 'CA';
    }) */;
   }
}
