import BooksController from './books.controller';
import booksTemplate from './books.template.html';

const booksComponent = {
  template: booksTemplate,
  controller: BooksController,
  controllerAs: 'model',
  bindings: {
    books: '<source',
    toggle_sidebar: '<toggled',
  },
};

export default booksComponent;
