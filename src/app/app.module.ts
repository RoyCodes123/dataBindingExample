import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book.component';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
