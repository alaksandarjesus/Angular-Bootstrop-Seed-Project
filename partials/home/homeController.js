var homeController = function($scope,$state,temporaryStorageService) {
  $scope.identifier = "I am from homeController";


}
homeController.$inject = ['$scope','$state','temporaryStorageService'];
app.controller('homeController', homeController);
