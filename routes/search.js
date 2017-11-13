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

const dbUsers = require('../db/users')
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
  req.session.returnTo = req.protocol + '://' + req.get('host') + req.originalUrl
  yelpService.getData(req.query.search, req.user).then((data) => {
    res.render('results', {
      title: 'Results', 
      auth: req.isAuthenticated(),
      results: data,
      user: req.user,
      message: '',
      error: ''
    })
  }).catch((err) => {
    console.log(err)
    res.render('results', {
      title: 'Results', 
      auth: req.isAuthenticated(),
      results: null,
      user: req.user,
      message: '',
      error: err
    })
  })
	
})

/************************************************************/
/************************************************************/

/*****/
/***** GOING *****/
/*****/

router.post('/going', (req, res) => {
  dbUsers.isGoing(req.user, req.body.location, (errorDb, data) => {
    dbUsers.allGoingValues(req.body.location, (err, count) => {
      res.send({
        data: data,
        count: count,
        user: req.user,
        errorDb: errorDb,
        error: err
      })
    })
  })
})

/************************************************************/
/************************************************************/

/*****/
/***** NOT GOING *****/
/*****/

router.post('/not-going', (req, res) => {
  dbUsers.isNotGoing(req.user, req.body.location, (errorDb, data) => {
    dbUsers.allGoingValues(req.body.location, (err, count) => {
      res.send({
        data: data,
        count: count,
        user: req.user,
        errorDb: errorDb,
        error: err
      })
    })
  })
})

/************************************************************/
/************************************************************/

/*******************/
/***** EXPORTS *****/
/*******************/

module.exports = router