const Todo = require('../models/TodoSchema');

exports.updateById = async(req,res) =>{
    try{
        const {Title , Description} = req.body;
        const id = req.params.id;
        const response = await Todo.findByIdAndUpdate({ _id:id ,
            Title, Description , updatedAt : Date.now()          
          });
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "data updated successfully"
            }
        ); 
    }
    catch(error){
        console.error(error)
        res.status(500).json(
            {
                success: false,
                data: "Internal server error",
                message: "Data not updated"
            }
        );
    }
}