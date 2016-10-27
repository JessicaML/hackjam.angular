import SideBarController from './sidebar.controller';
import sidebarTemplate from './sidebar.template.html';

const SideBarComponent = {
  template: sidebarTemplate,
  controller: SideBarController,
  controllerAs: 'sidebar',
  bindings: {
    toggleSideBar: '&',
    toggled: '<',
    // searchTerm: '=',
    search: '&',
  }
};

export default SideBarComponent;
