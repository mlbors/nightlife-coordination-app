/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Helpers - locations
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const usersDb = require('../db/users')

/************************************************************/
/************************************************************/


const self = module.exports = {

  /*****************************/
  /***** CHECK IF IS GOING *****/
  /*****************************/

  /*
   * @var Object data user's data
   * @var String location 
   * @return Promise
   */

  checkIfIsGoing: (data, location) => {
    return new Promise((resolve, reject) => {

      if (typeof data.going === 'undefined' || data.going === null) {
        resolve(false)
        return
      }

      if (data.going.indexOf(location) === -1) {
        resolve(false)
        return
      }

      resolve(true)
      return

    })
  }

}