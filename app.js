const express = require('express');
const path = require('path');

const app = express();

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public'))); // Assuming your CSS file is in the 'public' directory

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Assuming your index.ejs is in a 'views' folder

      // Render the index.ejs page after sending the email
      res.render('index');
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Now listening on localhost:${PORT}`);
});
