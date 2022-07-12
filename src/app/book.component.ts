import { Component } from "@angular/core";
import { BookRepository } from "./repository.model";
import { Book } from "./book.model";

@Component ({
    selector: "app-book",
    templateUrl: "book.component.html",
    styleUrls: ["book.component.css"]
})

export class BookComponent {
    model:BookRepository = new BookRepository();

    newBook:Book = new Book();
    get jsonBook() {
        return JSON.stringify(this.newBook);
    }

    addBook(b:Book) {
        console.log("New Book is"+this.jsonBook);
    }


//     bookName:string = this.model.getBookId(1).name!;
//     addBook () {
//         this.model.addBook(new Book(4, 'Anna Karanira', 'Tolstoy', 20))
//     }

//     deleteBook(book:Book) {
//         this.model.deleteBook(book);
//     }

//     updateBook(book:Book) {
//         book.name="updated";
//     }
// }
// export class BookComponent {
//     model: BookRepository = new BookRepository();
//     book: Book = this.model.getBookId(1);

//     disabled = false;

//     getClassBinding(id:number): string{
//         let book = this.model.getBookId(id);
//         return (book.price!>= 20 ? "bg-primary":"bg-info") + " m-3";
//     }

//     getClassObject(id:number): object{
//         let book = this.model.getBookId(id);
//         return {
//             "bg-primary": book.price!>=20,
//             "bg-info": book.price!<20,
//             "text-white": book.name=="My Childhood"

//         }
//     }

//     color:string = "yellow";

//     getStyleBinding(id:number): object{
//         let book = this.model.getBookId(id);
//         return {
//             fontSize: "40px",
//             color: "yellow"
//         };
//     }

//     onClick(even:Event) {
//         console.log(event);
//         console.log("button was clicked")
//     }

//     name="john";
//     description ="this is random text for testing purposes";

//     onKeyUp() {
//         console.log(this.name); //13 is the keycode for the enter key 
//     }
}