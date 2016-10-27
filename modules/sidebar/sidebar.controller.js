export default function SideBarController($scope) {
  this.navClosed = true;
  this.toggleSideBar = function(){
    this.navClosed = !this.navClosed;
    $scope.$emit('toggle_sidebar', this.navClosed);
  };

  this.search = function(){
    $scope.$emit('search_term_changed', this.searchTerm);
  };
}
