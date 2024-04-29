const express = require("express")
const router = express.Router();

const {CreateTodo} = require('../controllers/CreateTodo');
const {getTodos } = require('../controllers/getTodos');
const {getTodoById} = require('../controllers/getTodoById');

router.post("/createTodos", CreateTodo);
router.get("/getTodos", getTodos);
router.get("/id/:id", getTodoById);


module.exports = router;