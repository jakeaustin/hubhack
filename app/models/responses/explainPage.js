var AppResponses = (function(that, steps){
  that.SawExplain = new that.Response();
  that.SawExplain.setNextStep(steps.RoadMapStep);

  steps.ExplainPageStep.responses([
    that.SawExplain
    ]);

  return that;
})(AppResponses, AppSteps);
