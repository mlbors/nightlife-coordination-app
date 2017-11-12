/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Routes - Serach
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.30
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const express = require('express')
const passport = require('passport')
const router = express.Router()

const yelpService = require('../services/yelp')

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

/*****/
/***** INDEX *****/
/*****/

router.get('/', (req, res) => {
  yelpService.getData(req.query.search).then((data) => {
    res.render('results', {
      title: 'Results', 
      auth: req.isAuthenticated(),
      results: data,
      message: '',
      error: ''
    })
  }).catch((err) => {
    res.render('results', {
      title: 'Results', 
      auth: req.isAuthenticated(),
      results: null,
      message: '',
      error: err
    })
  })
	
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = router