var AppResponses = (function(that, steps){
  that.HasDecorativeMaterials = new that.Response();
  that.HasDecorativeMaterials.responseText("You've answered yes .  Please see the information below. Anything in these categories must be individually approved by the Fire Department chemist.   Visit http://www.cityofboston.gov/fire/PGA.asp , and fill out all applicable permits under 'Chemist Guidelines and Applications'.");
  that.HasDecorativeMaterials.setNextStep(steps.DumpsterStep);
<<<<<<< HEAD
  that.HasDecorativeMaterials.requirePermits([
=======
  that.HasDecorativeMaterials.requiredPermits([
>>>>>>> caple3
    {
      name: 'General',
      dept: 'Boston Fire Department (BFD)',
      checklist: 'Get approval for individual decorative materials',
      resource: 'Visit http://www.cityofboston.gov/fire/PGA.asp , and fill out all applicable permits under \'Chemist Guidelines and Applications\''
    }
    ]);

  that.NoDecorativeMaterials = new that.Response();
  that.NoDecorativeMaterials.setNextStep(steps.DumpsterStep);

  that.UnknownDecorativeMaterials = new that.Response();
  that.UnknownDecorativeMaterials.responseText("You've answered I don't know .   Please see the information below. If you decide to have any of these things, they will need to be certified by the Fire Department Chemist.   To see the requirements, go to  http://www.cityofboston.gov/fire/PGA.asp and look under the section 'Chemist Guidelines and Applications'.");
  that.UnknownDecorativeMaterials.setNextStep(steps.DumpsterStep);
<<<<<<< HEAD
  that.HasDecorativeMaterials.requirePermits([
=======
  that.UnknownDecorativeMaterials.requiredPermits([
>>>>>>> caple3
    {
      name: 'General',
      dept: 'Boston Fire Department (BFD)',
      checklist: 'Determine if you will have any decorative materials',
      resource: 'To see the requirements, go to  http://www.cityofboston.gov/fire/PGA.asp and look under the section \'Chemist Guidelines and Applications\'.'
    }
    ]);

  steps.DecorativeMaterialsStep.responses([
    that.HasDecorativeMaterials,
    that.NoDecorativeMaterials,
    that.UnknownDecorativeMaterials
    ]);

  return that;
})(AppResponses, AppSteps);
