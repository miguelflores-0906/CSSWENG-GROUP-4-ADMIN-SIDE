const e = require('express');
const db = require('../database/db.js')
const mongoose = require('mongoose')
const Expense = require('../models/expense.js')
const mongodb = require('mongodb')

const expensesController = {
    getExpenses: function (req, res) {
        db.findMany(Expense, )
    }
}
