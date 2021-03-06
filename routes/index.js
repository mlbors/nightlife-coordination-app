/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Routes - Index
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

var express = require('express')
var router = express.Router()

const auth = require('./auth')
const logout = require('./logout')
const search = require('./search')

/************************************************************/
/************************************************************/

/****************/
/***** HOME *****/
/****************/

router.get('/', (req, res, next) => {
  req.session.returnTo = req.protocol + '://' + req.get('host') + req.originalUrl
  res.render('index', {
    auth: req.isAuthenticated()
  })
})

/************************************************************/
/************************************************************/

/****************/
/***** AUTH *****/
/****************/

router.use('/auth', auth)

/************************************************************/
/************************************************************/

/******************/
/***** LOGOUT *****/
/******************/

router.use('/logout', logout)

/************************************************************/
/************************************************************/

/******************/
/***** SEARCH *****/
/******************/

router.use('/search', search)

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = router
