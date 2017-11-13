/**
 * freeCodeCamp - Back End Development Certification - Dynamic Web Application Projects
 * Db - Users
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.11.11
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const mongodb = require('mongodb')
const shortid = require('shortid')

const dbInfo = require('./db')

/************************************************************/
/************************************************************/

/********************/
/***** DATABASE *****/
/********************/

const MongoClient = mongodb.MongoClient
const dbUrl = dbInfo.info.url

/************************************************************/
/************************************************************/

const self = module.exports = {

  /**********************/
  /***** FIND BY ID *****/
  /**********************/

  /*
   * @var String id user's id
   * @var Function callback a callback function
   */

  findById: (id, callback) => {
    
    MongoClient.connect(dbUrl, (err, db) => {

      if (err) {
        return callback(err)
      } 
      
      db.collection('users').findOne({
        _id: id
      }, (err, result) => {
        
        if (err) {
          return callback(err)
        }

        db.close()
        return callback(null, result)
      })

    })

  },

  /************************************************************/
  /************************************************************/

  /****************************/
  /***** ALL GOING VALUES *****/
  /****************************/

  /*
   * @var String location location's id
   * @var Function callback a callback function
   */

  allGoingValues: (location, callback) => {

    MongoClient.connect(dbUrl, (err, db) => {

      if (err) return callback(err)

      const count = db.collection('users').count({going: location}, (err, count) => {
        if (err) return callback(err)
        db.close()
        return callback(null, count)
      })
    })
  },
    
  /************************************************************/
  /************************************************************/

  /********************/
  /***** IS GOING *****/
  /********************/

  /*
   * @var String id user's id
   * @var String location location's id
   * @var Function callback a callback function
   */

  isGoing: (id, location, callback) => {
    
    MongoClient.connect(dbUrl, (err, db) => {

      if (err) return callback(err)
      
      db.collection('users').update(
        {
          "_id": id
        },
        {
          $addToSet: {
            going: location
          }
        },
        (err, res) => {
          db.close()
          return callback(err, res)
        }
      )
    })
  },

  /************************************************************/
  /************************************************************/

  /************************/
  /***** IS NOT GOING *****/
  /************************/

  /*
   * @var String id user's id
   * @var String location location's id
   * @var Function callback a callback function
   */

  isNotGoing: (id, location, callback) => {
    
    MongoClient.connect(dbUrl, (err, db) => {

      if (err) return callback(err)
      
      db.collection('users').update(
        {
          "_id": id
        },
        {
          $pull: {
            going: location
          }
        },
        (err, res) => {
          db.close()
          return callback(err, res)
        }
      )
    })
  },

}