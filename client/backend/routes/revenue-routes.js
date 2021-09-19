let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Revenue Model
let revenueSchema = require('../models/revenue');

// CREATE Revenue
router.route('/create-revenue').post((req, res, next) => {
  revenueSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Revenue
router.route('/').get((req, res) => {
  revenueSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Revenue
router.route('/edit-revenue/:id').get((req, res) => {
  revenueSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Revenue
router.route('/update-expense/:id').put((req, res, next) => {
  revenueSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Revenue updated successfully !')
    }
  })
})

// Delete Revenue
router.route('/delete-revenue/:id').delete((req, res, next) => {
  expenseSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
