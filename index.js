import angular from 'angular/index';
import categories from './mocks/categories';
import { mockBooks } from './mocks/books';

function NavController(){
  this.title = "Books by Hackages";
}

function MenuController($scope){
  this.categories = categories;
  this.changeCategory = function(selectedCategory){
    this.categories = categories.map(category => {
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

function BooksController($rootScope){
  this.books = mockBooks;
  this.toggle_sidebar = true;

  $rootScope.$on('category_changed', ($event, category) => {
    if(category.name === 'All') {
      this.books = mockBooks;
      return;
    }

    this.books = mockBooks.filter(book => book.category == category.name);
  });

  $rootScope.$on('toggle_sidebar', ($event, toggle_sidebar) => {
    this.toggle_sidebar = toggle_sidebar;
  });

  $rootScope.$on('search_term_changed', ($event, searchTerm) => {
    this.books = mockBooks.filter(book => {
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

const deps = [];

angular.module('bookstore', deps)
  .controller('NavController', NavController)
  .controller('MenuController', MenuController)
  .controller('BooksController', BooksController)
  .controller('SideBarController', SideBarController)

angular.bootstrap(document.body, ['bookstore']);
