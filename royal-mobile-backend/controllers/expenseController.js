const Expense = require("../models/Expense");

exports.addExpense = async(req,res)=>{
  const expense = new Expense(req.body);
  await expense.save();
  res.json(expense);
};

exports.getExpenses = async(req,res)=>{
  const expenses = await Expense.find();
  res.json(expenses);
};