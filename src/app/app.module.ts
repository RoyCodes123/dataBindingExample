import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book.component';
import { CustomPipe } from './custom.pipe';
import { ForEmailDirective } from './for-email.directive';



@NgModule({
  declarations: [
    BookComponent,
    CustomPipe,
    ForEmailDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
