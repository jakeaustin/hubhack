(function ISDApp(){
  var app = angular.module('ISDApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'stepController',
        templateUrl: 'app/views/step.html'
      })
      .otherwise({ redirectTo: '/' });
  });
})();
