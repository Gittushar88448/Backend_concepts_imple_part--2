const Todo = require('../models/TodoSchema');

exports.getTodos = async(req,res) =>{
    try{

        const response = await Todo.find({});
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