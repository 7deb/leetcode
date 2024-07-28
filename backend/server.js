const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const authRoutes = require('./routes/authRoutes');
const problemRoutes = require('./routes/problemRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const databaseConnect = require('./database/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes); 
app.use('/api/submissions', submissionRoutes);
app.use('/api/discussions', discussionRoutes);

databaseConnect();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
