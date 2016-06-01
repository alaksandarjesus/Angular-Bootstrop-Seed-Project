app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      templateUrl: "partials/main/main.tpl.html",
      controller:'mainController'
    })
    .state('main.home', {
      url:'/home',
      templateUrl: "partials/home/home.tpl.html",
      controller:'homeController'
    })
});
