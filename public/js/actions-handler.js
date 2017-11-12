/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Actions Handler
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

/****************/
/***** MAIN *****/
/****************/

const ActionsHandler = () => {

  /**********/
  /********** VARS **********/
  /**********/

  /************************************************************/
  /************************************************************/

  /**********/
  /********** HANDLE CLICK **********/
  /**********/

  _handleClick = () => {

    $('a.btn.action').click((e) => {
      e.preventDefault()

      const action = $(this).attr('data-action')

      switch (action) {

        case 'going':
          console.log('going')
          break

        case 'not-going':
          console.log('not going')
          break

      }

      return false
    })

  }

  /************************************************************/
  /************************************************************/

  /**********/
  /********** INIT **********/
  /**********/

  return function() {
      _handleClick()
  }

}

/************************************************************/
/************************************************************/
