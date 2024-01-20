// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  // Send the "Hello world!" HTML as the response
  res.send(`
  <p>Hello world!</p>
  `);
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
