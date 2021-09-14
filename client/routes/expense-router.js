const Expense = require('./models/expense-model')

createExpense = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a purchase',
        })
    }

    const expense= new Expense(body)

    if (!expense) {
        return res.status(400).json({ success: false, error: err })
    }

    expense
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: expense._id,
                message: 'Expense created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Expense not created!',
            })
        })
}

updateExpense = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Expense.findOne({ _id: req.params.id }, (err, expense) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Purchase not found!',
            })
        }
        expense.name = body.name
        expense.time = body.time
        expense.rating = body.rating
        expense
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: expense._id,
                    message: 'Purchase updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Purchase not updated!',
                })
            })
    })
}

deleteExpense = async (req, res) => {
    await Expense.findOneAndDelete({ _id: req.params.id }, (err, expense) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!expense) {
            return res
                .status(404)
                .json({ success: false, error: `Expense not found` })
        }

        return res.status(200).json({ success: true, data: expense })
    }).catch(err => console.log(err))
}

getExpenseById = async (req, res) => {
    await Expense.findOne({ _id: req.params.id }, (err, expense) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!expense) {
            return res
                .status(404)
                .json({ success: false, error: `Expense not found` })
        }
        return res.status(200).json({ success: true, data: expense })
    }).catch(err => console.log(err))
}

getExpense = async (req, res) => {
    await Expense.find({}, (err, expense) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!expense.length) {
            return res
                .status(404)
                .json({ success: false, error: `Expense not found` })
        }
        return res.status(200).json({ success: true, data: expense })
    }).catch(err => console.log(err))
}

module.exports = {
    createExpense,
    updateExpense,
    deleteExpense,
    getExpense,
    getExpenseById,
}