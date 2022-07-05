import { Component } from "@angular/core";
import { BookRepository } from "./repository.model";
import { Book } from "./book.model";

@Component ({
    selector: "app-book",
    templateUrl: "book.component.html",
    styleUrls: ["book.component.css"]
})

export class BookComponent {
    model: BookRepository = new BookRepository();
    book: Book = this.model.getBookId(1);

    disabled = false;

    getClassBinding(id:number): string{
        let book = this.model.getBookId(id);
        return (book.price!>= 20 ? "bg-primary":"bg-info") + " m-3";
    }

    getClassObject(id:number): object{
        let book = this.model.getBookId(id);
        return {
            "bg-primary": book.price!>=20,
            "bg-info": book.price!<20,
            "text-white": book.name=="My Childhood"

        }
    }
}