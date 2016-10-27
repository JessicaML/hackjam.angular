import MenuController from './menu.controller';
import menuTemplate from './menu.template.html';

const MenuComponent = {
  template: menuTemplate,
  controller: MenuController,
  controllerAs: 'menu',
  bindings: {
    categories: '<',
    changeCategory: '&',
  },
};

export default MenuComponent;
