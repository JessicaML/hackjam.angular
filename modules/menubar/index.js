import { module } from 'angular';
import MenuComponent from './menu.component';

const menuModule = module('bookstore.module.menu', [])
     .component('bookstoreMenuBar', MenuComponent);

export default menuModule.name;
