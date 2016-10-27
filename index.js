import 'babel-polyfill';
import { module, bootstrap } from 'angular/index';
import categories from './mocks/categories';
import { mockBooks } from './mocks/books';
import HeaderModule from './modules/header';
import MenuModule from './modules/menubar';
import BooksModule from './modules/book';





function SideBarController($scope) {
  this.navClosed = true;
  this.toggleSideBar = function(){
    this.navClosed = !this.navClosed;
    $scope.$emit('toggle_sidebar', this.navClosed);
  };

  this.search = function(){
    $scope.$emit('search_term_changed', this.searchTerm);
  };
}

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

const deps = [HeaderModule, MenuModule, BooksModule];

module('bookstore', deps)
  .controller('SideBarController', SideBarController)
  .service('AppService', AppService)
  .component('bookstore', {
    templateUrl: 'template.html',
  });

bootstrap(document.body, ['bookstore']);
