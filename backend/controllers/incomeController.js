const User = require('../models/User');
const Income = require('../models/Income');

//Add Income Source
module.exports.addIncome = async (req,res) =>{
    const userId = req.user.id;

    const{icon,source,amount,date} = req.body;

    //check if missing fields
    if(!source || !amount || !date){
        return res.status(400).json({msg:'Please fill all fields'});
    }

    try {
        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date
        });

        const income = await newIncome.save();
        res.json(income);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'Server Error'});
    }
}
//Get Income Sources
module.exports.getIncomes = async (req,res) =>{
}
//Delete Income Source
module.exports.deleteIncome = async (req,res) =>{
}
//Download Income Source
module.exports.downloadIncomeExcel = async (req,res) =>{
}