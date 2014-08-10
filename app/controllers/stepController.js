(function stepControllerIIFE($){
  var StepController = function($scope){
    function init(step){
      $scope.step = step;
      $scope.question = step.question();
      $scope.responses = step.responses();
      $scope.responseText = '';
    }

    init(AppSteps.BusinessPlanStep);

    $scope.execute = function(response){
      init($scope.step.execute(response));
      $scope.responseText = response.responseText();
      $(':radio').prop('checked', false);
    };
  };

  StepController.$inject = ['$scope'];
  angular.module('ISDApp').controller('stepController', StepController);
})(jQuery);
