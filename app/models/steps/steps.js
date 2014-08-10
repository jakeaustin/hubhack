var AppSteps = (function(that){

  that.LandingPageStep = new that.Step();
  that.LandingPageStep.question('Welcome to the City of Boston permitting website! We want to help you figure out what you need to do to get your project started!');

  that.ExplainPageStep = new that.Step();
  that.ExplainPageStep.question('We have a few questions which will help us determine what you will be needing');

  that.RoadMapStep = new that.Step();
  that.RoadMapStep.question('Here is your road map, where you can go back to earlier questions if you want to change your answers');

  that.FollowUpQuestionsStep = new that.Step();
  that.FollowUpQuestionsStep.question('Some questions may have followup questions - you will see the followups get added to the roadmap if they come up');

  that.ResultPreviewStep = new that.Step();
  that.ResultPreviewStep.question('These are your results. We will give you a list of the permits you are going to need, a checklist of things to do, and any resources we think will be helpful');

  that.LiabilityStep = new that.Step();
  that.LiabilityStep.question('This process is just a first step - if you have any questions about what comes next, set up an appointment with an ISD official here: http://www.cityofboston.gov/contact/?id=98');

  that.BusinessPlanStep = new that.Step();
  that.BusinessPlanStep.question('Do you have a business plan?');

  that.FinancingStep = new that.Step();
  that.FinancingStep.question("Do you have all the financing you need to complete your project?");

  that.CertificateOfOccupancyTypeStep = new that.Step();
  that.CertificateOfOccupancyTypeStep.question("Does the current Certificate of Occupancy list the use type for your business?");

  that.DecorativeMaterialsStep = new that.Step();
  that.DecorativeMaterialsStep.question("Will you have any of the following: furniture (other than metal furniture), curtains or drapes, ceiling tile, wall coverings, panel systems, floor coverings, or any other decorative materials?");

  that.DumpsterStep = new that.Step();
  that.DumpsterStep.question("Will you have a dumpster that is 3 cubic yard or larger, whether for a temporary use (such as construction debris) or on a permanent basis?");

  that.SiteCleanlinessStep = new that.Step();
  that.SiteCleanlinessStep.question("Do you have your Site Cleanliness License?");

  that.HistoricDistrictStep = new that.Step();
  that.HistoricDistrictStep.question("Are you in a historic district or landmark building?");

  that.WetlandStep = new that.Step();
  that.WetlandStep.question("Is your location within 100 feet of a wetland?");

  that.NewStructureStep = new that.Step();
  that.NewStructureStep.question("Will you be building a new structure?");

  that.MajorRenovationStep = new that.Step();
  that.MajorRenovationStep.question("Will you be doing any major renovations (e.g. removing structural support beams, constructing a deck, building an addition, or changing an exit)?");

  that.AsbestosStep = new that.Step();
  that.AsbestosStep.question("Does your construction project involve cutting into any walls, ceilings, or pipes that contain asbestos?");

  that.FireAlarmStep = new that.Step();
  that.FireAlarmStep.question("Will your construction work generate sufficient smoke or dust to potentially set off a fire alarm?");

  return that;
})(AppSteps);
