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

    init(AppSteps.LandingPageStep);

    $scope.execute = function(response){
      $scope.nextStep = $scope.step.execute(response);
      $scope.responseText = response.responseText();
      $scope.showResponse = true;
    };

    $scope.continue = function(){
      if ($scope.responses.length === 1) {
        $scope.nextStep = $scope.step.execute($scope.responses[0]);
      }
      init($scope.nextStep);
      $(':radio').prop('checked', false);
    };
  };

  StepController.$inject = ['$scope'];
  angular.module('ISDApp').controller('stepController', StepController);
})(jQuery);
