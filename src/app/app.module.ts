import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardService } from './services/card.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
