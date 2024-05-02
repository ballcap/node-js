const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000;

// Middleware to parse incoming JSON data
app.use(express.json());
// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve JSON data
app.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading JSON file');
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

// Route to handle form submission
app.post('/post-comment', (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    res.status(400).send('Comment is required');
    return;
  }

  // Read existing comments from data.json
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading JSON file');
      return;
    }

    // Parse existing comments and append the new comment
    const comments = JSON.parse(data);
    comments.push(comment);

    // Write updated comments back to data.json
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(comments), err => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing to JSON file');
        return;
      }

      // Send response indicating success
      res.redirect('/');
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
