import { module } from 'angular';

import headerComponent from './header.component';

const headerModule  = module('bookstore.module.header', [])
.component('bookstoreHeader', headerComponent);

export default headerModule.name;
