const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  // Send the index.html file as the response
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
