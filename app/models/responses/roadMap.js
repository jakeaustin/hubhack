var AppResponses = (function(that, steps){
  that.SawRoadMap = new that.Response();
  that.SawRoadMap.setNextStep(steps.FollowUpQuestionsStep);

  steps.RoadMapStep.responses([
    that.SawRoadMap
    ]);

  return that;
})(AppResponses, AppSteps);
