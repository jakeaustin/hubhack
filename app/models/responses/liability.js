var AppResponses = (function(that, steps){
  that.SawLiability = new that.Response();
  that.SawLiability.setNextStep(steps.BusinessPlanStep);

  steps.LiabilityStep.responses([
    that.SawLiability
    ]);

  return that;
})(AppResponses, AppSteps);
