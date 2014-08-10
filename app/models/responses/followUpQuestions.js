var AppResponses = (function(that, steps){
  that.SawFollowUp = new that.Response();
  that.SawFollowUp.setNextStep(steps.ResultPreviewStep);

  steps.FollowUpQuestionsStep.responses([
    that.SawFollowUp
    ]);

  return that;
})(AppResponses, AppSteps);
