var AppSteps = (function(that){
  that.BusinessPlanStep = new that.Step();
  that.BusinessPlanStep.question('Do you have a business plan?');
  that.BusinessPlanStep.responses([
    'eval(this, AppResponses.HasBusinessPlan)',
    'eval(this, AppResponses.HasNoBusinessPlan)',
    'eval(this, AppResponses.UnknownBusinessPlan)'
    ]);

  that.FinancingStep = new that.Step();
  that.FinancingStep.question("Do you have all the financing you need to complete your project?");
  that.FinancingStep.responses([
    'eval(this, AppResponses.FinancingComplete)',
    'eval(this, AppResponses.FinancingIncomplete)',
    'eval(this, AppResponses.FinancingUnknown)'
    ]);

  that.CertificateOfOccupancyTypeStep = new that.Step();
  that.CertificateOfOccupancyTypeStep.question("Does the current Certificate of Occupancy list the use type for your business?");
  that.CertificateOfOccupancyTypeStep.responses([
    'eval(this, AppResponses.CertificateOfOccupancyHasUseType)',
    'eval(this, AppResponses.CertificateOfOccupancyNoUseType)',
    'eval(this, AppResponses.CertificateOfOccupancyUnknownUseType)'
    ]);

  that.DecorativeMaterialsStep = new that.Step();
  that.DecorativeMaterialsStep.question("Will you have any of the following: furniture (other than metal furniture), curtains or drapes, ceiling tile, wall coverings, panel systems, floor coverings, or any other decorative materials?");
  that.DecorativeMaterialsStep.responses([
    'eval(this, AppResponses.HasDecorativeMaterials)',
    'eval(this, AppResponses.HasNoDecorativeMaterials)',
    'eval(this, AppResponses.UnknownDecorativeMaterials)'
    ]);

  return that;
})(AppSteps);
