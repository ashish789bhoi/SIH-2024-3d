const express = require('express');
const path = require('path');
const ejs = require('ejs');
const ejsMate = require("ejs-mate");

const app = express();
const port = 3000;

// Set EJS as the view engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.engine('ejs', ejsMate); 

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory

app.use(express.static(path.join(__dirname, 'public')));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("includes/home");
  });

app.get("/2d-to-3d", (req,res)=>{
   res.render("form");
})

app.get("/gallery",(req,res)=>{
  res.render("gallery");
})

app.get("/walkthrough",(req,res)=>{
  res.render("walkthrough");
})


















