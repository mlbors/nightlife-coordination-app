/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Services - Yelp
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

const Yelp = require('yelp-api-v3')

const usersDb = require('../db/users')
const locationsHelper = require('../helpers/locations')

require('dotenv').config()

/************************************************************/
/************************************************************/

/****************/
/***** INIT *****/
/****************/

const yelpApi = new Yelp({
  app_id: process.env.YELP_CLIENT_ID,
  app_secret: process.env.YELP_CLIENT_SECRET
})

/************************************************************/
/************************************************************/

const self = module.exports = {

  /********************/
  /***** GET DATA *****/
  /********************/

  /*
   * @var String location
   * @var String user id
   * @return Promise
   */

  getData: (location, user) => {
    return new Promise((resolve, reject) => {
      yelpApi.search({location: location, limit: 30})
      .then((data) => {

        const parsedData = JSON.parse(data)

        let mappedData = parsedData.businesses.map((value) => {

          return new Promise((resolve, reject) => {

            usersDb.allGoingValues(value.id, (err, total) => {
              
              if (err) reject(err)
              value.totalGoing = total
  
              if (typeof user !== 'undefined' && user) {
                usersDb.findById(user, (err, userData) => {
                  if (err) reject(err)
                  locationsHelper.checkIfIsGoing(userData, value.id).then((result) => {
                    value.currentUserIsGoing = result
                    resolve(value)
                    return
                  }).catch((err) => {
                    reject(err)
                  })
                })
              } else {
                resolve(value)
                return
              }
  
            })

          })

        })

        Promise.all(mappedData).then((results) => {
          resolve(results)
        })

      })
      .catch((err) => {
        reject(err)
      })
    })
  }

}