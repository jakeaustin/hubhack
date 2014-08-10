var AppSteps = (function(that){
  that.BusinessPlanStep = new that.Step();
  that.BusinessPlanStep.question('Do you have a business plan?');

  that.FinancingStep = new that.Step();
  that.FinancingStep.question("Do you have all the financing you need to complete your project?");

  that.CertificateOfOccupancyTypeStep = new that.Step();
  that.CertificateOfOccupancyTypeStep.question("Does the current Certificate of Occupancy list the use type for your business?");

  that.DecorativeMaterialsStep = new that.Step();
  that.DecorativeMaterialsStep.question("Will you have any of the following: furniture (other than metal furniture), curtains or drapes, ceiling tile, wall coverings, panel systems, floor coverings, or any other decorative materials?");

  return that;
})(AppSteps);
