var AppResponses = (function(that, steps){
  that.HasAsbestos = new that.Response();
  that.HasAsbestos.responseText("You've answered yes .  Please see the information below. Your licensed professional contractor will need to apply for the following permits from the Boston Fire Department (BFD):  Asbestos Removal Permit:  http://www.cityofboston.gov/Images_Documents/Asbestos_tcm3-3973.pdf . Application for Erecting a Tent/Temporary Structure to secure the area where the asbestos will be removed: http://www.cityofboston.gov/Images_Documents/Erecting%20a%20Tent%20or%20Temp%20Structure%20Application_tcm3-4012.pdf .   Additionally, he or she should ensure that the company providing the tent has an up-to-date chemist certification for the temporary enclosure materials. All work must be done by a contractor licensed by the Commonwealth of Massachusetts.  For more information about the State's requirements regarding asbestos see:  http://www.mass.gov/dep/air/asbguid.htm .");
  that.HasAsbestos.setNextStep(steps.FireAlarmStep);
  that.HasAsbestos.requiredPermits([
    {
      name: 'Asbestos Removal Permit',
      dept: 'Boston Fire Department (BFD)',
      checklist: '',
      resource: ''
    },
    {
      name: 'Erecting a Tent/Temporary Structure',
      dept: 'Boston Fire Department (BFD)',
      checklist: '',
      resource: ''
    }
    ]);

  that.NoAsbestos = new that.Response();
  that.NoAsbestos.setNextStep(steps.FireAlarmStep);

  that.UnknownAsbestos = new that.Response();
  that.UnknownAsbestos.responseText("You've answered I don't know .  Please see the information below. Any work involving cutting into asbestos should be performed by a licensed professional contractor who will need to obtain an Asbestos Removal Permit from the Boston Fire Department (BFD).    If you are not sure if your planned work qualifies, you should contact your contractor. For more information about the State's requirements regarding asbestos, see:   http://www.mass.gov/dep/air/asbguid.htm .");
  that.UnknownAsbestos.setNextStep(steps.FireAlarmStep);
  that.HasAsbestos.requiredPermits([
    {
      name: 'Asbestos Removal Permit',
      dept: 'Boston Fire Department (BFD)',
      checklist: 'Confirm that asbestos exists',
      resource: "For more information about the State's requirements regarding asbestos, see:http://www.mass.gov/dep/air/asbguid.htm ."
    }
    ]);

  steps.AsbestosStep.responses([
    that.HasAsbestos,
    that.NoAsbestos,
    that.UnknownAsbestos
    ]);

  return that;
})(AppResponses, AppSteps);
