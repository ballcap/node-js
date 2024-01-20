// Import the Express module
const express = require('express');
const path = require('path'); // Import the path module

// Create an instance of Express
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  // Send the entire HTML page with linked CSS file as the response
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <p>Hello world!</p>
    </body>
    </html>
  `);
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
