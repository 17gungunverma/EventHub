const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");

dotenv.config();

// import routes
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

// database connection
mongoose.connect(process.env.MONGODB_URL) 
.then(() =>{
    console.log("MongoDB connnected");
})
.catch((error) => {
    console.log("MOngoDB connection failed:", error);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});