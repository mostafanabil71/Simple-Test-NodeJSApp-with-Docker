//The first part of the file will create the Express application and Router objects,and 
// define the base directory and port as constants:
const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 4000;

//This section of the file also sets a couple of constants, path and port:
//So, lets set the routes for the application using the router object:

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/devops', function(req,res){
  res.sendFile(path + 'devops.html');
});

//Finally, mount the router middleware and the application’s static assets and tell the app to listen on port 8080:
app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('app is listening on port 4000!')
})

