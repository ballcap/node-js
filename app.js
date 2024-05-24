const express = require('express');
const path = require('path');
const app = express();

// Define the port
const PORT = 8000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Routes for other pages
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
