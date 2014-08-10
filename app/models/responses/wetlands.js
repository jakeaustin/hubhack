var AppResponses = (function(that, steps){
  that.NearWetland = new that.Response();
  that.NearWetland.responseText("You've answered yes .   Please see the information below. Being in a Historic District or Landmark Building can have an impact on your construction permitting process. To verify that your business is in a historic district or a landmark building, please consult this map:  http://www.cityofboston.gov/environment/pdfs/historic_districts_and_landmarks_map.pdf . For more information on your obligations in a Historic District, visit:     http://www.cityofboston.gov/landmarks/historic/  (note the links along the left side of the page to each district's page).   For more information on your obligations in an individual Landmark Building, visit:   http://www.cityofboston.gov/landmarks/process.asp , For more information, contact the Boston Landmarks Commission at 617-635-3850 / BLC@cityofboston.gov, or visit  http://www.cityofboston.gov/landmarks/process.asp.");
  that.NearWetland.setNextStep(steps.NewStructureStep);

  that.NotNearWetland = new that.Response();
  that.NotNearWetland.setNextStep(steps.NewStructureStep);

  that.UnknownNearWetland = new that.Response();
  that.UnknownNearWetland.responseText("You've answered I don't know .   Please see the information below. Being in a Historic District or Landmark Building can have an impact on your construction permitting process. To check if your business is in a historic district or a landmark building, please consult this map:  http://www.cityofboston.gov/environment/pdfs/historic_districts_and_landmarks_map.pdf . For more information on your obligations in a Historic District, visit:     http://www.cityofboston.gov/landmarks/historic/  (note the links along the left side of the page to each district's page).   For more information on your obligations in an individual Landmark Building, visit:   http://www.cityofboston.gov/landmarks/process.asp , For more information, contact the Boston Landmarks Commission at 617-635-3850 / BLC@cityofboston.gov, or visit  http://www.cityofboston.gov/landmarks/process.asp.");
  that.UnknownNearWetland.setNextStep(steps.NewStructureStep);

  steps.WetlandStep.responses([
    that.NearWetland,
    that.NotNearWetland,
    that.UnknownNearWetland
    ]);

  return that;
})(AppResponses, AppSteps);
