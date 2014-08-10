var AppResponses = (function(that, steps){
  that.NewStructure = new that.Response();
  that.NewStructure.responseText("You've answered yes .  Please see the information below. If you are building a new structure, you will need the following  at minimum: An Erect Permit from the Inspectional Services Department (ISD).   You can apply for this permit in-person, at 1010 Massachusetts Avenue, 5th floor.   For information on other documents you will need to submit along with the permit applications, see: http://www.cityofboston.gov/isd/building/boa/pdfs/isdwheredoistart.pdf (letters B and C). A Construction/ Demolition/ Renovation Permit from the Boston Fire Department (BFD): http://www.cityofboston.gov/Images_Documents/Construction%20Demolition%20Alteration%20Application_tcm3-4006.pdf You may also want to review these tips for hiring a contractor:  http://www.cityofboston.gov/isd/pdfs/contractors.pdf.");
  that.NewStructure.setNextStep(steps.AsbestosStep);

  that.NotNewStructure = new that.Response();
  that.NotNewStructure.setNextStep(steps.MajorRenovationStep);

  that.UnknownNewStructure = new that.Response();
  that.UnknownNewStructure.responseText("You've answered I don't know .  Please see the information below. Any new structure that you decide to build will need to be permitted by the Inspectional Services Department (ISD) and the Boston Fire Department (BFD).  If you are building a new structure, you will need the following  at minimum: An Erect Permit from ISD.    You can apply for this permit in-person, at 1010 Massachusetts Avenue, 5th floor.    For information on other documents you will need to submit along with the permit applications, see:  http://www.cityofboston.gov/isd/building/boa/pdfs/isdwheredoistart.pdf  (letters B and C). A Construction/ Demolition/ Renovation Permit from BFD:   http://www.cityofboston.gov/Images_Documents/Construction%20Demolition%20Alteration%20Application_tcm3-4006.pdf .   You may also want to review these tips for hiring a contractor:   http://www.cityofboston.gov/isd/pdfs/contractors.pdf.");
  that.UnknownNewStructure.setNextStep(steps.AsbestosStep);

  steps.NewStructureStep.responses([
    that.NewStructure,
    that.NotNewStructure,
    that.UnknownNewStructure
    ]);

  return that;
})(AppResponses, AppSteps);
