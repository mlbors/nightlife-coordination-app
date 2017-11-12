/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Helpers - locations
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

const self = module.exports = {

  /*****************************/
  /***** CHECK IF IS GOING *****/
  /*****************************/

  /*
   * @var Object userData
   * @var String location 
   * @return Promise
   */

  checkIfIsGoing: (userData, location) => {
    return new Promise((resolve, reject) => {
      if (userData.going.indexOf(location) === -1) {
        resolve(false)
        return
      }
      resolve(true)
    })
  }

}