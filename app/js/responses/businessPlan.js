var AppResponses = (function(that){
  that.HasBusinessPlan = Object.create(that.Response);
  that.HasBusinessPlan.setNextStep(new FinancingStep());

  that.HasNoBusinessPlan = Object.create(that.Response);
  that.HasNoBusinessPlan.responseText("You've answered no. Please see the information below. For more information on what a business plan is and how to create one, take a look at: City of Boston Small Business Resource Guide:  http://www.cityofboston.gov/Images_Documents/SBRG_Regulatory_Licensing_Requirements_Steps_2008_tcm3-8300.pdf. US Small Business Administration:  www.sba.gov. SCORE Boston:  http://www.scoreboston.org . Center for Women and Enterprise:  www.cweboston.org. State Office of Minority and Women Business Assistance:  www.somwba.state.ma.us . Kirstein Business Library: http://www.bpl.org/research/kbb/kbbhome.htm.");
  that.HasNoBusinessPlan.setNextStep(new FinancingStep());

  that.UnknownBusinessPlan = Object.create(that.Response);
  that.UnknownBusinessPlan.responseText("You've answered I don't know. Please see the information below. For more information on what a business plan is and how to create one, take a look at: City of Boston Small Business Resource Guide:  http://www.cityofboston.gov/Images_Documents/SBRG_Regulatory_Licensing_Requirements_Steps_2008_tcm3-8300.pdf. US Small Business Administration:  www.sba.gov. SCORE Boston:  http://www.scoreboston.org . Center for Women and Enterprise:  www.cweboston.org. State Office of Minority and Women Business Assistance:  www.somwba.state.ma.us . Kirstein Business Library: http://www.bpl.org/research/kbb/kbbhome.htm.");
  that.UnknownBusinessPlan.setNextStep(new FinancingStep());

  return that;
})(AppResponses);
