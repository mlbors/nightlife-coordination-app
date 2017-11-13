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
  /********** MAKE REQUEST **********/
  /**********/

  /*
   * @var String url
   * @var String location
   * @var String action
   */

  _makeRequest = (url, location, action) => {
    return $.ajax({
      url: window.location.origin + url,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        location,
        action
      },
      succes: (result) => {
        return {error: null, data: result}
      },
      error: (err) => {
        return {error: err}
      }
    })
  }

  /************************************************************/
  /************************************************************/

  /**********/
  /********** HANDLE CLICK **********/
  /**********/

  _handleClick = () => {
    return () => {
      $(document).on('click', 'a.btn.action', (e) => {
        e.preventDefault()

        const target = $(e.currentTarget)
        const url = target.attr('href')
        const action = target.attr('data-action')
        const id = target.attr('data-id')
        const parent = $('#' + id)
        const total = parent.find('span.total')

        _makeRequest(url, id, action).then((data) => {

          switch (action) {
            
            case 'going':
              target.attr('href', '/search/not-going/')
              target.attr('data-action', 'not-going')
              target.html("I'm not going anymore!")
              total.html(data.count)
              break
    
            case 'not-going':
              target.attr('href', '/search/going/')
              target.attr('data-action', 'going')
              target.html("I'm going!")
              total.html(data.count)
              break
    
          }

          return false

        }).catch((err) => {
          console.warn('Error during registration...')
          console.error(err)
          return false
        })

      })
    }

  }

  /************************************************************/
  /************************************************************/

  /**********/
  /********** INIT **********/
  /**********/

  return {
    init: () => {
      const handler = _handleClick()
      handler()
    }
  }

}