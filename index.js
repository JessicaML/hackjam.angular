import 'babel-polyfill';
import { module, bootstrap } from 'angular/index';
import categories from './mocks/categories';
import { mockBooks } from './mocks/books';
import HeaderModule from './modules/header';
import MenuModule from './modules/menubar';
import BooksModule from './modules/book';
import SideBarModule from './modules/sidebar';







function AppService($q){
  this.getBooks = function(){
    const defer = $q.defer();
    defer.resolve(mockBooks);
    return defer.promise;
  };

  this.getCategories = function() {
    const defer = $q.defer();
    defer.resolve(categories);
    return defer.promise;
  };
}

const deps = [HeaderModule, MenuModule, BooksModule, SideBarModule];

module('bookstore', deps)
  .service('AppService', AppService)
  .component('bookstore', {
    templateUrl: 'template.html',
  });

bootstrap(document.body, ['bookstore']);
