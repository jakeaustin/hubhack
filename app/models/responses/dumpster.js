var AppResponses = (function(that, steps){
  that.NeedsDumpster = new that.Response();
  that.NeedsDumpster.responseText("You've answered yes .  Please see the information below. If you have a dumpster on-site for at least 24 hours, it must be permitted.    For temporary use (less than a year) of a dumpster that is a) on-site for at least 24 hours at a time and b) 3 cubic yards or larger, you will need to: Apply for a Dumpster Placement Permit:  http://www.cityofboston.gov/Images_Documents/dumpsterplacement_tcm3-4011.pdf ; Contact the Public Works Department (PWD) for the placement of the dumpster:  http://www.cityofboston.gov/publicworks/ If the dumpster is going to occupy a public right-of-way, you will also need to get a street occupancy permit:  http://www.cityofboston.gov/transportation/streetoccupancy.asp For on-going use (a year or more) of a dumpster 3 cubic yards or larger, you will need to: Apply for an Annual Permit:  http://www.cityofboston.gov/Images_Documents/ANNUAL%20PERMIT%20APPLICATION_tcm3-17549.pdf    Apply for a Site Cleanliness License:  http://www.cityofboston.gov/isd/pdfs/ISD_Site_Cleanliness_application9.pdf");
  that.NeedsDumpster.setNextStep(steps.SiteCleanlinessStep);
  that.NeedsDumpster.requiredPermits([
  {
    name: 'Dumpster Placement Permit',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Acquire permit',
    resource: 'http://www.cityofboston.gov/Images_Documents/dumpsterplacement_tcm3-4011.pdf'
  },
  {
    name: 'Dumpster Placement Permit',
    dept: 'Public Works Department (PWD)',
    checklist: 'Determine dumpster placement',
    resource: 'http://www.cityofboston.gov/publicworks/'
  },
  {
    name: 'Street Occupancy Permit',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Determine if dumpster will occupy public right-of-way',
    resource: 'http://www.cityofboston.gov/transportation/streetoccupancy.asp'
  },
  {
    name: 'Annual Permit',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Determine if dumpster will be in use for more than 1 year',
    resource: 'http://www.cityofboston.gov/Images_Documents/ANNUAL%20PERMIT%20APPLICATION_tcm3-17549.pdf'
  },
  {
    name: 'Site Cleanliness License',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Apply for Site Cleanliness License',
    resource: 'http://www.cityofboston.gov/isd/pdfs/ISD_Site_Cleanliness_application9.pdf'
  }
  ]);

  that.NoDumpster = new that.Response();
  that.NoDumpster.setNextStep(steps.SiteCleanlinessStep);

  that.UnknownDumpster = new that.Response();
  that.UnknownDumpster.responseText("You've answered I don't know .  Please see the information below. If you have a dumpster on-site for at least 24 hours, it must be permitted.   For temporary use (less than a year) of a dumpster that is a) on-site for at least 24 hours at a time and b) 3 cubic yards or larger, you will need to: Apply for a Dumpster Placement Permit: http://www.cityofboston.gov/Images_Documents/dumpsterplacement_tcm3-4011.pdf ; Contact the Public Works Department (PWD) for the placement of the dumpster:  http://www.cityofboston.gov/publicworks/ If the dumpster is going to occupy a public right-of-way, you will also need to get a street occupancy permit:  http://www.cityofboston.gov/transportation/streetoccupancy.asp For on-going use (a year or more) of a dumpster 3 cubic yards or larger, you will need to:  Apply for an Annual Permit: http://www.cityofboston.gov/Images_Documents/ANNUAL%20PERMIT%20APPLICATION_tcm3-17549.pdf   Apply for a Site Cleanliness License: http://www.cityofboston.gov/isd/pdfs/ISD_Site_Cleanliness_application9.pdf");
  that.UnknownDumpster.setNextStep(steps.SiteCleanlinessStep);
  that.UnknownDumpster.requiredPermits([
  {
    name: 'Dumpster Placement Permit',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Acquire permit',
    resource: 'http://www.cityofboston.gov/Images_Documents/dumpsterplacement_tcm3-4011.pdf'
  },
  {
    name: 'Dumpster Placement Permit',
    dept: 'Public Works Department (PWD)',
    checklist: 'Determine dumpster placement',
    resource: 'http://www.cityofboston.gov/publicworks/'
  },
  {
    name: 'Street Occupancy Permit',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Determine if dumpster will occupy public right-of-way',
    resource: 'http://www.cityofboston.gov/transportation/streetoccupancy.asp'
  },
  {
    name: 'Annual Permit',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Determine if dumpster will be in use for more than 1 year',
    resource: 'http://www.cityofboston.gov/Images_Documents/ANNUAL%20PERMIT%20APPLICATION_tcm3-17549.pdf'
  },
  {
    name: 'Site Cleanliness License',
    dept: 'Inspectional Services Department (ISD)',
    checklist: 'Apply for Site Cleanliness License',
    resource: 'http://www.cityofboston.gov/isd/pdfs/ISD_Site_Cleanliness_application9.pdf'
  }
  ]);



  steps.DumpsterStep.responses([
    that.NeedsDumpster,
    that.NoDumpster,
    that.UnknownDumpster
    ]);

  return that;
})(AppResponses, AppSteps);
