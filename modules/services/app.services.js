import categories from './mocks/categories';
import { mockBooks } from './mocks/books';

export default class AppService {
  constructor($q) {
    this.$q = $q;
  }

  getBooks() {
    const defer = this.$q.defer();
    defer.resolve(mockBooks);
    return defer.promise;
  }

  getCategories() {
    const defer = this.$q.defer();
    defer.resolve(categories);
    return defer.promise;
  }
}
