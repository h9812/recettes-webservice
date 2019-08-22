// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// For image uploading
let multer = require('multer');
let path = require('path');
let crypto = require('crypto');
let fs = require('fs');

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/recettes', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Image uploading
let form = "<!DOCTYPE HTML><html><body>" +
"<form method='post' action='/upload' enctype='multipart/form-data'>" +
"<input type='file' name='upload'/>" +
"<input type='submit' /></form>" +
"</body></html>";


app.get('/', function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(form);
  
});

storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      return crypto.pseudoRandomBytes(16, function(err, raw) {
        if (err) {
          return cb(err);
        }
        return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
      });
    }
  });

// Post files
app.post(
    "/upload",
    multer({
      storage: storage
    }).single('upload'), function(req, res) {
        // res.redirect("/uploads/" + req.file.filename);
        res.json({
            status: "success",
            filename: req.file.filename,
            path: "/uploads/" + req.file.filename
        });
    }
);
  
app.get('/uploads/:upload', function (req, res){
        file = req.params.upload;
        var img = fs.readFileSync(__dirname + "/uploads/" + file);
        res.writeHead(200, {'Content-Type': 'image/png' });
        res.end(img, 'binary');
    }
);
  
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Recettes on port " + port);
});
