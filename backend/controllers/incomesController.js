import Incomes from '../models/incomeModel.js';
// import Income from '../models/incomeModel.js'

const incomesControllers = {
    getallIncomes: async(req, res) =>{
        try {
            const income = await Incomes.find()
            return res.status(200).json({msg: 'All Incomes', data: income})
        } catch (err) {
            console.log(err.message);
            return res.status(500).json({msg:err.message})
            
        }
    },
    createIncome: async(req, res) =>{
        try {
            const{item, amount} = req.body;

            if(!item || !amount){
  return res.status(400).json({
    msg: "please fill in the fields",
  });
            }
              
                
            const newIncome = new Incomes({
                item,
                amount
            });



            await newIncome.save();

            return res.status(201).json({
                msg: 'New income created successfully',
                data: newIncome
            });
        } catch (err) {
            console.log(err.message)
            return res.status(500).json({msg:err.message});
            
        }
    },
    deleteIncome: async (req, res) => {
        try {
            const{ incomeId } = req.params;
            const id = await Incomes.findById({_id: incomeId});
            if(!id) return res.status(400).json({msg: "Income does not exist"});

            const deleteIncome = await Incomes.findByIdAndDelete(incomeId);
            return res.status(200).json({msg: "Income deleted successfully", data: deleteIncome})
        } catch (err) {
            return res.status(500).json({ msg: err});
        }
    }

}
export default incomesControllers