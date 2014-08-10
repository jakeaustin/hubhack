var AppResponses = (function(that, steps){
  that.SawResultPreview = new that.Response();
  that.SawResultPreview.setNextStep(steps.LiabilityStep);

  steps.ResultPreviewStep.responses([
    that.SawResultPreview
    ]);

  return that;
})(AppResponses, AppSteps);
