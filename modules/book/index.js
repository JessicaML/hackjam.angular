import { module } from 'angular';
import BooksComponent from './books.component';

const booksModule = module('bookstore.module.books', [])
.component('bookstoreBooks', BooksComponent);

export default booksModule.name;
