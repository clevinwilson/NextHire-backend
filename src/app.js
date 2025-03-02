const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/companies", companyRoutes);
// app.use("/api/applications", applicationRoutes);

module.exports = app;
