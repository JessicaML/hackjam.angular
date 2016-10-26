import 'babel-polyfill';
import { module, bootstrap } from 'angular/index';
import categories from './mocks/categories';
import { mockBooks } from './mocks/books';

// function NavController(){
//   this.title = "Books by Hackages";
// }

class NavController{
  title = "Bowdsdklfjsqfldooks By Hackages";

  constructor(s, a){
    console.log(a);
  }
}

NavController.$inject = ['$scope', 'AppService'];


function MenuController($scope, AppService){
  AppService.getCategories().then(categories => {
    this.categories = categories;
    $scope.$digest();
  });

  this.changeCategory = function(selectedCategory){
    this.categories = this.categories.map(category => {
      if(category.name === selectedCategory.name) {
        category.selected = true;
      } else {
        category.selected = false;
      }
      return category;
    });

    $scope.$emit('category_changed', selectedCategory);
  };
}

function BooksController($rootScope, AppService){
  this.toggle_sidebar = true;

  AppService.getBooks().then(books => {
    this.books = books;
    this.initialBooks = books; // use for filtering books
    // $sope.$digest();
  });

  // async function getBooks() {
  //   const books = await AppService.getBooks();
  //   this.initialBooks = books;
  //   this.books = books;
  //   $scope.$digest();
  // }
  // getBooks.call(this);

  $rootScope.$on('category_changed', ($event, category) => {
    if(category.name === 'All') {
      this.books = this.initialBooks;
      return;
    }

    this.books = this.initialBooks.filter(book => book.category == category.name);
  });

  $rootScope.$on('toggle_sidebar', ($event, toggle_sidebar) => {
    this.toggle_sidebar = toggle_sidebar;
  });

  $rootScope.$on('search_term_changed', ($event, searchTerm) => {
    this.books = this.initialBooks.filter(book => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase())
             || book.category.toLowerCase().includes(searchTerm.toLowerCase());

    });
  });
}

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
    // return Promise.resolve(mockBooks);
  };

  this.getCategories = function() {
    return Promise.resolve(categories);
  };
}

const deps = [];

module('bookstore', deps)
  // .controller('NavController', NavController)
  .controller('MenuController', MenuController)
  .controller('BooksController', BooksController)
  .controller('SideBarController', SideBarController)
  .service('AppService', AppService)
  .component('bookstore', {
    templateUrl: 'template.html',
  })
  .component('bookstoreHeader', {
    templateUrl: 'header.html',
    controller: NavController,
    controllerAs: 'nav'
  })

bootstrap(document.body, ['bookstore']);
