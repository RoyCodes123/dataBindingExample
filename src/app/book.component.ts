import { Component } from "@angular/core";
import { BookRepository } from "./repository.model";
import { Book } from "./book.model";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { isThisTypeNode } from "typescript";

@Component ({
    selector: "app-book",
    templateUrl: "book.component.html",
    styleUrls: ["book.component.css"]
})

//Reactive form
export class BookComponent {
    bookForm = new FormGroup({
        /*name:new FormControl('sweaters'),
        writer:new  FormControl('guykoma'),
        price:new FormControl('224')*/ 
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        writer:new  FormControl('',Validators.required),
        price:new FormControl('',Validators.required)  
    });
    
    onSubmit() {
        console.log(this.bookForm.value);
    }

    updateBook() {
        this.bookForm.patchValue({
            name:"notsweaters",
            writer:"notgkoma",
            price:"420"
        })
    }

    get name() {
        return this.bookForm.get('name');
    }

   // updateName() {
     //   this.name.setValue("my childhood");
    //}
}

/*export class BookComponent {
    model:BookRepository = new BookRepository();

    newBook:Book = new Book();
    get jsonBook() {
        return JSON.stringify(this.newBook);
    }

    addBook(b:Book) {
        console.log("New Book is"+this.jsonBook);
    }

    getFormValidationErrors(form:NgForm):string[] {
        let messages: string[] = [];
        Object.keys(form.controls).forEach(x=>{
            console.log(x);
            console.log(form.controls[x]);

            this.getValidationErrors(form.controls[x],x)
            .forEach(message => messages.push(message));
        })
        return messages;
    }

    getValidationErrors(model:any, key?:string) {
        let ctrlName:string = model.name || key;
        let messages:string[] = [];

        if(model.errors) {
            for(let errorName in model.errors) {
                switch(errorName) {
                    case "required":
                        messages.push(`You must enter a ${ctrlName}`);
                        break;
                    case "minlength":
                        messages.push('You must enter min 3 characters');
                        break;    
                }
            }
        }
        return messages;
    }

    formSubmit:boolean = false;

    submitForm(form:NgForm) {
        console.log(form);
        this.formSubmit=true;
        if(form.valid){
            this.addBook(this.newBook);
            this.newBook = new Book;
            form.reset();
            this.formSubmit=false;
        }
    }*/
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
//}