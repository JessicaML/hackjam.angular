export default function MenuController($scope, AppService){

  AppService.getCategories().then(categories => {
    this.categories = categories;
  });

  this.changeCategory = function(selectedCategory){
    this.categories = this.categories.map(category => {
      if(category.name === selectedCategory.name) {
        category.selected = true;
      } else {
        category.selected = false;
      }
      return category;
    });

    $scope.$emit('category_changed', selectedCategory);
  };
}
