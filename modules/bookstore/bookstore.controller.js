export default class BookstoreController{

  title = 'Bookstore by Hackages';
  toggled = true;
  searchTerm = '';
  static $inject = ['AppService'];

  constructor(AppService) {
    this.AppService = AppService;
  }

  $onInit(){
    this.AppService.getCategories().then(categories => {
      this.categories = categories;
    });

    this.AppService.getBooks().then(books => {
      this.books = books;
      this.initialBooks = books;
    });
  }

  changeCategory(selectedCategory){
    this.categories = this.categories.map(category => {
      if(category.name === selectedCategory.name) {
        category.selected = true;
      } else {
        category.selected = false;
      }
      return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category) {
    if(category.name === 'All') {
      this.books = this.initialBooks;
      return;
    }

    this.books = this.initialBooks.filter(book => book.category == category.name);
  }

  search() {
    this.books = this.initialBooks.filter(book => {
      return book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
             || book.category.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  toggleSideBar(){
    this.toggled = !this.toggled;
  }
}

// async function getBooks() {
//   const books = await AppService.getBooks();
//   this.initialBooks = books;
//   this.books = books;
//   $scope.$digest();
// }
// getBooks.call(this);


