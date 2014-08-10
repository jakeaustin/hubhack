var AppResponses = (function(that){
  that.FinancingComplete = new that.Response();
  that.FinancingComplete.setNextStep(AppSteps.CertificateOfOccupancyTypeStep);

  that.FinancingIncomplete = new that.Response();
  that.FinancingIncomplete.responseText("You've answered no. Please see the information below. The Boston Business Hub has compiled many helpful resources:   http://businesshub.boston.gov/ResourceResults?busType=Funding&busName=Get%20Funding . Many of these programs will only act as a secondary funding source, so be sure to talk with your local banks first.");
  that.FinancingIncomplete.setNextStep(AppSteps.CertificateOfOccupancyTypeStep);

  that.FinancingUnknown = new that.Response();
  that.FinancingUnknown.responseText("You've answered I don't know. Please see the information below. The Boston Business Hub has compiled many helpful resources:   http://businesshub.boston.gov/ResourceResults?busType=Funding&busName=Get%20Funding. Many of these programs will only act as a secondary funding source, so be sure to talk with your local banks first.");
  that.FinancingUnknown.setNextStep(AppSteps.CertificateOfOccupancyTypeStep);

  return that;
})(AppResponses);
