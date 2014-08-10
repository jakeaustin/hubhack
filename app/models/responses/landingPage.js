var AppResponses = (function(that, steps){
  that.SawLanding = new that.Response();
  that.SawLanding.setNextStep(steps.ExplainPageStep);

  steps.LandingPageStep.responses([
    that.SawLanding
    ]);

  return that;
})(AppResponses, AppSteps);
