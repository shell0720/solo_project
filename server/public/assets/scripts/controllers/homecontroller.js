myApp.controller("HomeController", ["$scope", "DataService", function($scope, DataService){
  //show user
  DataService.getUser();
  $scope.user = DataService.user;
  console.log($scope.userEntered);

}]);
