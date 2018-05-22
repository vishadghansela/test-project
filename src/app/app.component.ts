import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cardDetailsArray: any;

  constructor(private cardService: CardService) {
    cardService.fetchCardDetails().subscribe((data: Array<any>) => {
      this.cardDetailsArray = data;
    });
  }
}
