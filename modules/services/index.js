import { module } from 'angular';
import AppService from './app.services';

const bookstoreServiceModule = module('bookstore.services', [])
.service('AppService', AppService);

export default bookstoreServiceModule.name;
