// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Define User model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Signup route endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log('Signup request:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.json({ message: 'User created' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request:', req.body);

  try {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ token, user: { email: user.email } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(5001, () => {
  console.log('Server running on port 5001');
});











// // Create a basic express server

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/my-auth-app'
// // , {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // }
// );

// const userSchema = new mongoose.Schema({
//     email: String,
//     password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/api/signup', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Email already exists' });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();
//         res.json({ message: 'User created' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (user && await bcrypt.compare(password, user.password)) {
//             const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
//             res.json({ token });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// app.listen(5001, () => {
//     console.log('Server running on port 5001');
// });