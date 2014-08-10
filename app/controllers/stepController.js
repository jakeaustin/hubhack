(function stepControllerIIFE($){
  var StepController = function($scope){
    function init(step){
      $scope.resultset = [];
      reset(step);
    }

    function reset(step){
      $scope.step = step;
      $scope.question = step.question();
      $scope.responses = step.responses();
      $scope.responseText = '';
      $scope.nextStep = undefined;
      $scope.showResponse = false;
      $scope.continueButtonText = step.continueButtonText();
    }

    function setResultset(response) {
      var rp = response.requiredPermits();
      if(typeof rp !== 'undefined' && rp.length > 0) {
        for(var j = 0; j < rp.length; j++){
          var e = rp[j];
          var permit = findPermit(e.name);
          if(typeof permit === 'undefined') {
            permit = {name: e.name, checklist: [], resources: []};
            $scope.resultset.push(permit);
          }
          if(e.checklist !== '') {
            permit.checklist.push(e.checklist);
          }
          if(e.resource !== '') {
            permit.resources.push(e.resource);
          }
        }
      }
    }

    function findPermit(name) {
      for(var i = 0; i < $scope.resultset; i++){
        var target = $scope.resultset[i];
        if(target.name === name) {
          return target;
        }
      }
      return;
    }

    init(AppSteps.LandingPageStep);

    $scope.execute = function(response){
      $scope.nextStep = $scope.step.execute(response);
      $scope.responseText = response.responseText();
      $scope.showResponse = true;
      setResultset(response);
    };

    $scope.continue = function(){
      if ($scope.responses.length === 1) {
        $scope.nextStep = $scope.step.execute($scope.responses[0]);
      }
      reset($scope.nextStep);
      $(':radio').prop('checked', false);
    };
  };

  StepController.$inject = ['$scope'];
  angular.module('ISDApp').controller('stepController', StepController);
})(jQuery);
