const Task = require('../Models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createTask = async (req, res) => {
  const { task } = req.body;

  try {
    const newTask = new Task({ task, user: req.userId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, completed },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
