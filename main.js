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


application.get('/', function (request, response) {
  response.render("index", dataFileInfo);
  
})


application.get('/:userId', (request, response) => {
  
  var user = dataFile.users[request.params.userId - 1]
     response.render('singlerobot', user);

});

application.post('/singlerobot', (request, response) => {
    response.redirect('singlerobot', dataFile);
})


application.listen(3000);