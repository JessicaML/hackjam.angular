import { module } from 'angular';

import SideBarComponent from './sidebar.component';

const sidebarModule = module('bookstore.module.sidebar', [])
.component('bookstoreSideBar', SideBarComponent);

export default sidebarModule.name;
