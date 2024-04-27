const express = require("express")
const router = express.Router();

const {CreateTodo} = require('../controllers/CreateTodo');

router.post("/createTodos", CreateTodo);

module.exports = router;