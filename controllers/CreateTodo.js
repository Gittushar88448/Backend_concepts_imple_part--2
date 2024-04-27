const Todo = require('../models/TodoSchema');

exports.CreateTodo = async(req,res) =>{
    try{
        const {Title , Description} = req.body;

        const response = await Todo.create({Title, Description});
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "data send successfully"
            }
        ); 
    }
    catch(error){
        console.error(error)
        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: "error occurred !"
            }
        );
    }
}