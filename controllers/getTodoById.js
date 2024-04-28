const Todo = require('../models/TodoSchema');

exports.getTodoById = async(req,res) =>{
    try{
        const id = req.params.id;
        const response = await Todo.findById({_id:id});
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "data fetched successfully"
            }
        ); 
    }
    catch(error){
        console.error(error)
        res.status(404).json(
            {
                success: false,
                data: "Data not fetched",
                message: "Data not found!"
            }
        );
    }
}