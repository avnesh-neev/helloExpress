helloExpress.service('ResourceService',['$http', function($http) {
  this.getMatchCategories = function(){
    return $http.get('../../../matchesCategory.json').success(function(data) {
      console.log(data);
      $scope.categories = data;
    }).error(function(){

    })
  }
}]);
