export default function BooksController($rootScope, AppService){
  this.toggle_sidebar = true;

  AppService.getBooks().then(books => {
    this.books = books;
    this.initialBooks = books;
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
