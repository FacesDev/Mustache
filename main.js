const express = require('express');
const mustacheExpress = require('mustache-express');
const dataFile = require("./data.js");
const application = express();

application.engine('mustache', mustacheExpress());
application.set('/views', './views')
application.set('view engine', 'mustache')
application.use(express.static(__dirname + '/public'));


let dataFileInfo = {
    users:dataFile.users.slice(0, 50)
}



application.get('/', function (req, res) {
  res.render("index", dataFileInfo);
  
})

application.listen(3000, function () {
 
});