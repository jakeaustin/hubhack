var AppSteps = (function(that){
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
