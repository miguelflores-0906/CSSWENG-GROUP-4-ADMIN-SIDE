let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Expense Model
let expenseSchema = require('../models/expense');

// CREATE Expense
router.route('/create-expense').post((req, res, next) => {
  expenseSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Expense
router.route('/').get((req, res) => {
  expenseSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Expense
router.route('/edit-expense/:id').get((req, res) => {
  expenseSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Expense
router.route('/update-expense/:id').put((req, res, next) => {
  expenseSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Expense updated successfully !')
    }
  })
})

// Delete Expense
router.route('/delete-expense/:id').delete((req, res, next) => {
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
