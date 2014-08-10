var AppResponses = (function(that, steps){
  that.CertificateOfOccupancyHasUseType = new that.Response();
  that.CertificateOfOccupancyHasUseType.responseText("You've answered yes .  Please see the information below. You may want to verify your understanding of the allowed use for your space by calling the Inspectional Services Department_x0019_s document room at 617-961-3370.   There may be additional allowances not specified in your current Certificate of Occupancy, or restrictions that you may not be aware of.");
  that.CertificateOfOccupancyHasUseType.setNextStep(steps.DecorativeMaterialsStep);
  that.CertificateOfOccupancyHasUseType.requiredPermits([
    {
      name: 'General',
      dept: 'Inspectional Services Department (ISD)',
      checklist: 'Verify allowed use',
      resource: 'the Inspectional Services Department_x0019_s document room at 617-961-3370'
    }
  ]);

  that.CertificateOfOccupancyNoUseType = new that.Response();
  that.CertificateOfOccupancyNoUseType.responseText("You've answered no .  Please see the information below. A Certificate of Occupancy (CO) is required after new construction or major renovations, and for changes of occupancy.   Your building owner may already have a CO on file; if you are not doing any major renovations or changing the type of business in the space, this should be sufficient.   To find a current Certificate of Occupancy, you may ask the property owner for it, or go to   http://www.cityofboston.gov/isd/permitsearch and look up the address and retrieve the Long Form applications.   If you have trouble finding the current Certificate of Occupancy, you can call the Inspectional Services Department's (ISD) document room at 617-961-3370 for help. To apply for a new Certificate of Occupancy you will need to go to the ISD Building Department and fill out a Certificate of Occupancy Permit application  once all construction work is completed .   ISD is located at 1010 Massachusetts Avenue, and is open from 8am-4pm Monday through Friday, and until 7PM on Thursdays. For information on what documents you will need to submit along with the permit application, see: http://www.cityofboston.gov/isd/building/boa/pdfs/isdwheredoistart.pdf (letter I). The Boston Fire Department (BFD) will also review your CO application, and has additional requirements separate from those for ISD.   Y ou can begin submitting documents to BFD as soon as you have a permit number from ISD, and should begin the process with BFD as early as possible, to ensure that your CO application is reviewed in a timely manner.  For a list of documents that may be required by BFD, see:  http://www.cityofboston.gov/Images_Documents/Certificate%20of%20Occupancy%20Testing%20and%20Acceptance%20Criteria_tcm3-15934.pdf . You can bring these to BFD's Fire Prevention Division, on the 4th floor of 1010 Massachusetts Avenue, along with your CO permit number from ISD.  For more information on the COO process, see:  http://www.cityofboston.gov/isd/building/boa/coo.asp . For more information on BFD's requirements, visit  http://www.cityofboston.gov/fire/prevention/coo_plans.asp , or call 617-343-3034.");
  that.CertificateOfOccupancyNoUseType.setNextStep(steps.DecorativeMaterialsStep);
  that.CertificateOfOccupancyNoUseType.requiredPermits([
    {
      name: 'General',
      dept: 'Inspectional Services Department (ISD) and Boston Fire Department (BFD)',
      checklist: 'Find or Acquire certificate of occupancy',
      resource: 'For information on what documents you will need to submit along with the permit application, see: http://www.cityofboston.gov/isd/building/boa/pdfs/isdwheredoistart.pdf (letter I). For a list of documents that may be required by BFD, see:  http://www.cityofboston.gov/Images_Documents/Certificate%20of%20Occupancy%20Testing%20and%20Acceptance%20Criteria_tcm3-15934.pdf. For more information on the COO process, see:  http://www.cityofboston.gov/isd/building/boa/coo.asp . For more information on BFD\'s requirements, visit  http://www.cityofboston.gov/fire/prevention/coo_plans.asp , or call 617-343-3034.'
    }
  ]);

  that.CertificateOfOccupancyUnknownUseType = new that.Response();
  that.CertificateOfOccupancyUnknownUseType.responseText("You've answered I don't know .   Please see the information below. You must have a Certificate of Occupancy (CO) before you may legally open for business.  It is therefore important to figure out early on if your business is covered under a current Certificate of Occupancy, or if you will need to apply for a new one. If you are opening a new business in a location that was previously used in the exact same way, you may not need to apply for a new CO.   If you are changing the use, or doing major renovations or construction, you will need a new CO.   To find a current Certificate of Occupancy, you may ask the property owner for it, or go to   http://www.cityofboston.gov/isd/permitsearch and look up the address and retrieve the Long Form applications.   If you have trouble finding the Certificate of Occupancy, you can call the Inspectional Services Department's document room at 617-961-3370 for help.");
  that.CertificateOfOccupancyUnknownUseType.setNextStep(steps.DecorativeMaterialsStep);
  that.CertificateOfOccupancyUnknownUseType.requiredPermits([
    {
      name: 'General',
      dept: 'Inspectional Services Department (ISD)',
      checklist: 'Find or acquire certificate of occupancy',
      resource: 'If you have trouble finding the Certificate of Occupancy, you can call the Inspectional Services Department\'s document room at 617-961-3370 for help.'
    }
  ]);

  steps.CertificateOfOccupancyTypeStep.responses([
    that.CertificateOfOccupancyHasUseType,
    that.CertificateOfOccupancyNoUseType,
    that.CertificateOfOccupancyUnknownUseType
    ]);

  return that;
})(AppResponses, AppSteps);
