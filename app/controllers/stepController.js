(function stepControllerIIFE($){
  var StepController = function($scope){
    function init(step){
      $scope.step = step;
      $scope.question = step.question();
      $scope.responses = step.responses();
      $scope.responseText = '';
      $scope.nextStep = undefined;
      $scope.showResponse = false;
      $scope.continueButtonText = step.continueButtonText();
    }

    init(AppSteps.BusinessPlanStep);

    $scope.execute = function(response){
      $scope.nextStep = $scope.step.execute(response);
      $scope.responseText = response.responseText();
      $scope.showResponse = true;
    };

    $scope.continue = function(){
      init($scope.nextStep);
      $(':radio').prop('checked', false);
    };
  };

  StepController.$inject = ['$scope'];
  angular.module('ISDApp').controller('stepController', StepController);
})(jQuery);
