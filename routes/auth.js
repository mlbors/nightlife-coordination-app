/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Routes - Auth
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const express = require('express')
const passport = require('passport')
const router = express.Router()

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

/*****/
/***** LOGIN *****/
/*****/

router.get('/twitter', passport.authenticate('twitter'))

/************************************************************/
/************************************************************/

/*****/
/***** CALLBACK *****/
/*****/

router.get('/twitter/callback', passport.authenticate('twitter', {
	'failureRedirect': '/'
}), (req, res) => {
	res.redirect(req.session.returnTo || '/');
    delete req.session.returnTo;
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = router