var AppResponses = (function(that, steps){
  that.HasSiteCleanliessLicense = new that.Response();
  that.HasSiteCleanliessLicense.setNextStep(steps.HistoricDistrictStep);

  that.NoSiteCleanliessLicense = new that.Response();
  that.NoSiteCleanliessLicense.responseText("You've answered no .   Please see the information below. Site Cleanliness Licenses are required for any commercial properties that contract with private companies for waste hauling, to ensure that trash disposal is handled in a responsible manner.    To apply for a Site Cleanliness License, fill out this form:   http://www.cityofboston.gov/isd/pdfs/ISD_Site_Cleanliness_application9.pdf");
  that.NoSiteCleanliessLicense.setNextStep(steps.HistoricDistrictStep);

  that.UnknownSiteCleanlinessLicense = new that.Response();
  that.UnknownSiteCleanlinessLicense.responseText("You've answered I don't know .   Please see the information below. Site Cleanliness Licenses are required for any commercial properties that contract with private companies for waste hauling, to ensure that trash disposal is handled in a responsible manner.  To apply for a Site Cleanliness License, fill out this form: http://www.cityofboston.gov/isd/pdfs/ISD_Site_Cleanliness_application9.pdf .");
  that.UnknownSiteCleanlinessLicense.setNextStep(steps.HistoricDistrictStep);

  steps.SiteCleanlinessStep.responses([
    that.HasSiteCleanliessLicense,
    that.NoSiteCleanliessLicense,
    that.UnknownSiteCleanlinessLicense
    ]);

  return that;
})(AppResponses, AppSteps);
