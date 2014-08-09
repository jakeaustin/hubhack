(function ISDApp(){
  var app = angular.module('ISDApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'indexController',
        templateUrl: 'app/views/index.html'
      })
      .otherwise({ redirectTo: '/' });
  });
})();
