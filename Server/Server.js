const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// ✅ IMPORT your route here
const authRoutes = require('./routes/authRoutes');
const applyRoutes = require('./routes/applyRoutes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', applyRoutes);
app.use('/uploads', express.static('uploads'));
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
