const express = require('express');
const cookieParser = require('cookie-parser');

const databaseConnect = require('./database/db');
const authRoutes = require('./routers/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRoutes);

databaseConnect();
app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`)
});