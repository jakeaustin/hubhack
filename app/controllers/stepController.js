(function stepControllerIIFE(){
  var StepController = function($scope){
    function init(){
      $scope.step = AppSteps.BusinessPlanStep;
    }

    init();

    $scope.execute = function($scope, response){
      $scope.step = $scope.step.execute(response);
    };
  };

  StepController.$inject = ['$scope'];
  angular.module('ISDApp').controller('stepController', StepController);
})();
