const Todo = require('../models/TodoSchema');

exports.remove = async(req,res) =>{
    try{
        const id = req.params.id;
        await Todo.findByIdAndDelete({ _id:id });
        res.status(200).json(
            {
                success: true,
                message: "data removed successfully"
            }
        ); 
    }
    catch(error){
        console.error(error)
        res.status(500).json(
            {
                success: false,
                message: "Data removed successfully"
            }
        );
    }
}