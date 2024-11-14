const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);



// Allow requests from frontend domain
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
