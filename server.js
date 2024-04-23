const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all requests
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'assets')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});