var mainController = function($scope,$state,temporaryStorageService) {
  $scope.identifier = "I am from main Controller";


}
mainController.$inject = ['$scope','$state','temporaryStorageService'];
app.controller('mainController', mainController);
