import { module } from 'angular';
import HeaderModule from '../header';
import MenuModule from '../menubar';
import BooksModule from '../book';
import SideBarModule from '../sidebar';
import BookstoreServices from '../services';
// import BookstoreManager from '..'
import bookstoreTemplate from './template.html';

const deps = [
  // BookstoreManager,
  HeaderModule,
  MenuModule,
  BooksModule,
  SideBarModule,
  BookstoreServices
];

module('bookstore', deps)
  .component('bookstore', {
    template: bookstoreTemplate,
  });


