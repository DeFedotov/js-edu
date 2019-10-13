/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */


module.exports = function getTimeForEducation(focus, knowsProgramming, config){
  let hoursToLearnMaster = 800;
  let hoursToLearnBasic = 500;
  let timeRequired = config[focus];
  
  if (knowsProgramming == true){
    let weeks = Math.ceil(hoursToLearnMaster/timeRequired);
    return weeks;
  } 
  else if (knowsProgramming == false){
    let weeks = Math.ceil((hoursToLearnMaster + hoursToLearnBasic)/timeRequired);
    return weeks;
  }

};
