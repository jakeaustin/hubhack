var AppResponses = (function(that, steps){
  that.HasMajorRenovations = new that.Response();
  that.HasMajorRenovations.responseText("You've answered yes .  Please see the information below. To do this work, you will need: A Long Form permit from ISD.   You can apply through the following online permitting portal:  https://onlinepermitsandlicenses.cityofboston.gov/isdpermits/ . For information on other documents you will need to submit along with the permit application, see: http://www.cityofboston.gov/isd/building/boa/pdfs/isdwheredoistart.pdf (letter B). A Construction/ Demolition/ Renovation permit from the Fire Department: http://www.cityofboston.gov/Images_Documents/Construction%20Demolition%20Alteration%20Application_tcm3-4006.pdf  You may also want to review these tips for hiring a contractor: http://www.cityofboston.gov/isd/pdfs/contractors.pdf.");
  that.HasMajorRenovations.setNextStep(steps.AsbestosStep);

  that.NoMajorRenovations = new that.Response();
  that.NoMajorRenovations.setNextStep(steps.MinorRenovations);

  that.UnknownMajorRenovations = new that.Response();
  that.UnknownMajorRenovations.responseText("You've answered I don't know .  Please see the information below. Major renovations need to be permitted by the Inspectional Services Department (ISD) and the Boston Fire Department (BFD).   If you have questions about what kind of permits are required for your specific project, you can call ISD at 617-635-5900 and BFD at 617-343-3447.");
  that.UnknownMajorRenovations.setNextStep(steps.AsbestosStep);

  steps.MajorRenovationStep.responses([
    that.HasMajorRenovations,
    that.NoMajorRenovations,
    that.UnknownMajorRenovations
    ]);

  return that;
})(AppResponses, AppSteps);
