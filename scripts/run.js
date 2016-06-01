app.run(['$rootScope','$state','$stateParams', function($rootScope,$state,$stateParams) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
        $rootScope.$state =$state;
     })

 }]);
