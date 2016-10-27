import { module } from 'angular';
import HeaderModule from '../header';
import MenuModule from '../menubar';
import BooksModule from '../book';
import SideBarModule from '../sidebar';
import BookstoreServices from '../services';
import BookstoreComponent from './bookstore.component.js';

const deps = [
  HeaderModule,
  MenuModule,
  BooksModule,
  SideBarModule,
  BookstoreServices
];

module('bookstore', deps)
  .component('bookstore', BookstoreComponent);


