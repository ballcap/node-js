const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle requests to the root URL
app.get('/app1', (req, res) => {
  // Send the index.html file as the response
  res.sendFile(path.join(__dirname, 'node_app1.html'));
});

// Define routes
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Serve node_app2.html as the default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'node_app2.html'));
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
