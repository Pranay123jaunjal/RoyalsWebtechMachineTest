const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../Controllers/taskcontroller');
const authMiddleware = require('../Middleware/authmiddleware');
const router = express.Router();

router.use(authMiddleware); // Protect all routes below with authentication

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
