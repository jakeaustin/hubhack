var AppSteps = (function(that){
  that.BusinessPlanStep = Object.create(that.Step);
  that.BusinessPlanStep.question('Do you have a business plan?');
  that.BusinessPlanStep.responses([
    'step.execute(new HasBusinessPlan())',
    'step.execute(new HasNoBusinessPlan())',
    'step.execute(new UnknownBusinessPlan())'
    ]);

  that.FinancingStep = Object.create(that.Step);
  that.FinancingStep.question("Do you have all the financing you need to complete your project?");
  that.FinancingStep.responses([
    'step.execute(new FinancingComplete())',
    'step.execute(new FinancingIncomplete())',
    'step.execute(new FinancingUnknown())'
    ]);

  that.CertificateOfOccupancyTypeStep = Object.create(that.Step);
  that.CertificateOfOccupancyTypeStep.question("Does the current Certificate of Occupancy list the use type for your business?");
  that.CertificateOfOccupancyTypeStep.responses([
    'step.execute(new CertificateOfOccupancyHasUseType())',
    'step.execute(new CertificateOfOccupancyNoUseType())',
    'step.execute(new CertificateOfOccupancyUnknownUseType())'
    ]);

  that.DecorativeMaterialsStep = Object.create(that.Step);
  that.DecorativeMaterialsStep.question("Will you have any of the following: furniture (other than metal furniture), curtains or drapes, ceiling tile, wall coverings, panel systems, floor coverings, or any other decorative materials?");
  that.DecorativeMaterialsStep.responses([
    'step.execute(new HasDecorativeMaterials())',
    'step.execute(new HasNoDecorativeMaterials())',
    'step.execute(new UnknownDecorativeMaterials())'
    ]);

  return that;
})(AppSteps);
