const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/employee', employeeRoutes);

const PORT = process.env.PORT || 8080;
const MONGODB_URI = 'mongodb+srv://manishathakur1925:IonYWxOBvXylgjX2@cluster0.zjzv7bb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace this with your online MongoDB connection string

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.error('Error connecting to MongoDB:', err));
