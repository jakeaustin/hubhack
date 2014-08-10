var AppResponses = (function(that, steps){
  that.InHistoricDistrict = new that.Response();
  that.InHistoricDistrict.responseText("You've answered yes .   Please see the information below. Being in a Historic District or Landmark Building can have an impact on your construction permitting process. To verify that your business is in a historic district or a landmark building, please consult this map:  http://www.cityofboston.gov/environment/pdfs/historic_districts_and_landmarks_map.pdf . For more information on your obligations in a Historic District, visit:     http://www.cityofboston.gov/landmarks/historic/  (note the links along the left side of the page to each district's page).   For more information on your obligations in an individual Landmark Building, visit:   http://www.cityofboston.gov/landmarks/process.asp , For more information, contact the Boston Landmarks Commission at 617-635-3850 / BLC@cityofboston.gov, or visit  http://www.cityofboston.gov/landmarks/process.asp.");
  that.InHistoricDistrict.setNextStep(steps.WetlandStep);

  that.NotInHistoricDistrict = new that.Response();
  that.NotInHistoricDistrict.setNextStep(steps.WetlandStep);

  that.UnknownHistoricDistrict = new that.Response();
  that.UnknownHistoricDistrict.responseText("You've answered I don't know .   Please see the information below. Being in a Historic District or Landmark Building can have an impact on your construction permitting process. To check if your business is in a historic district or a landmark building, please consult this map:  http://www.cityofboston.gov/environment/pdfs/historic_districts_and_landmarks_map.pdf . For more information on your obligations in a Historic District, visit:     http://www.cityofboston.gov/landmarks/historic/  (note the links along the left side of the page to each district's page).   For more information on your obligations in an individual Landmark Building, visit:   http://www.cityofboston.gov/landmarks/process.asp , For more information, contact the Boston Landmarks Commission at 617-635-3850 / BLC@cityofboston.gov, or visit  http://www.cityofboston.gov/landmarks/process.asp.");
  that.UnknownHistoricDistrict.setNextStep(steps.WetlandStep);

  steps.HistoricDistrictStep.responses([
    that.InHistoricDistrict,
    that.NotInHistoricDistrict,
    that.UnknownHistoricDistrict
    ]);

  return that;
})(AppResponses, AppSteps);
