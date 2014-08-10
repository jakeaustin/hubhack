var AppResponses = (function(that, steps){
  that.HasBusinessPlan = new that.Response();
  that.HasBusinessPlan.setNextStep(steps.FinancingStep);

  that.HasNoBusinessPlan = new that.Response();
  that.HasNoBusinessPlan.responseText("You've answered no. Please see the information below. For more information on what a business plan is and how to create one, take a look at: City of Boston Small Business Resource Guide:  http://www.cityofboston.gov/Images_Documents/SBRG_Regulatory_Licensing_Requirements_Steps_2008_tcm3-8300.pdf. US Small Business Administration:  www.sba.gov. SCORE Boston:  http://www.scoreboston.org . Center for Women and Enterprise:  www.cweboston.org. State Office of Minority and Women Business Assistance:  www.somwba.state.ma.us . Kirstein Business Library: http://www.bpl.org/research/kbb/kbbhome.htm.");
  that.HasNoBusinessPlan.setNextStep(steps.FinancingStep);
  that.HasNoBusinessPlan.requiredPermits([{
    name: 'General',
    dept: '',
    checklist: 'Create Business Plan',
    resource: 'City of Boston Small Business Resource Guide:  http://www.cityofboston.gov/Images_Documents/SBRG_Regulatory_Licensing_Requirements_Steps_2008_tcm3-8300.pdf. US Small Business Administration:  www.sba.gov. SCORE Boston:  http://www.scoreboston.org . Center for Women and Enterprise:  www.cweboston.org. State Office of Minority and Women Business Assistance:  www.somwba.state.ma.us . Kirstein Business Library: http://www.bpl.org/research/kbb/kbbhome.htm'
  }]);

  that.UnknownBusinessPlan = new that.Response();
  that.UnknownBusinessPlan.responseText("You've answered I don't know. Please see the information below. For more information on what a business plan is and how to create one, take a look at: City of Boston Small Business Resource Guide:  http://www.cityofboston.gov/Images_Documents/SBRG_Regulatory_Licensing_Requirements_Steps_2008_tcm3-8300.pdf. US Small Business Administration:  www.sba.gov. SCORE Boston:  http://www.scoreboston.org . Center for Women and Enterprise:  www.cweboston.org. State Office of Minority and Women Business Assistance:  www.somwba.state.ma.us . Kirstein Business Library: http://www.bpl.org/research/kbb/kbbhome.htm.");
  that.UnknownBusinessPlan.setNextStep(steps.FinancingStep);
  that.UnknownBusinessPlan.requiredPermits([{
    name: 'General',
    dept: '',
    checklist: 'Create Business Plan',
    resource: 'City of Boston Small Business Resource Guide:  http://www.cityofboston.gov/Images_Documents/SBRG_Regulatory_Licensing_Requirements_Steps_2008_tcm3-8300.pdf. US Small Business Administration:  www.sba.gov. SCORE Boston:  http://www.scoreboston.org . Center for Women and Enterprise:  www.cweboston.org. State Office of Minority and Women Business Assistance:  www.somwba.state.ma.us . Kirstein Business Library: http://www.bpl.org/research/kbb/kbbhome.htm'
  }]);

  steps.BusinessPlanStep.responses([
    that.HasBusinessPlan,
    that.HasNoBusinessPlan,
    that.UnknownBusinessPlan
    ]);

  return that;
})(AppResponses, AppSteps);
