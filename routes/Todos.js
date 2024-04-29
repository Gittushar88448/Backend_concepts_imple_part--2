const express = require("express")
const router = express.Router();

const {CreateTodo} = require('../controllers/CreateTodo');
const {getTodos } = require('../controllers/getTodos');
const {getTodoById} = require('../controllers/getTodoById');
const {updateById} = require('../controllers/update');
const {remove} = require('../controllers/delete');

router.post("/createTodos", CreateTodo);
router.get("/getTodos", getTodos);
router.get("/id/:id", getTodoById);
router.put("/update/:id", updateById);
router.delete("/remove/:id", remove);

module.exports = router;