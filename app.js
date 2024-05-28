const express = require('express');
const path = require('path');
const app = express();

// Define the port
const PORT = 8000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/shop', (req, res) => {
    res.render('shop');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
