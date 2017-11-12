/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Main
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

/****************/
/***** MAIN *****/
/****************/

const Main = () => {

  /**********/
  /********** VARS **********/
  /**********/

  /*
   * @var Object _actionsHandler object that handles actions on buttons
   */

  var _actionsHandler = ActionsHandler()

  /************************************************************/
  /************************************************************/

  /**********/
  /********** LOAD **********/
  /**********/

  _load = () => {
    
    $(window).on('load', () => {
      
    })

  }

  /************************************************************/
  /************************************************************/

  /**********/
  /********** READY **********/
  /**********/

  _ready = () => {

    $(document).ready(() => {
      _actionsHandler()
    })

  }

  /************************************************************/
  /************************************************************/

  /**********/
  /********** INIT **********/
  /**********/

  return {

    init: () => {
      _load()
      _ready()
    }
      
  }

}

/************************************************************/
/************************************************************/

/****************/
/***** INIT *****/
/****************/

const main = Main()
main.init()
