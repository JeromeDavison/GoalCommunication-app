let express = require('express');
let cors = require('cors');
let body = require('body-parser');
var app = express();
let mongoose = require('mongoose');
 // mongoose.connect fill this shit in 
app.use(cors())
app.use(body.urlencoded({extended: true}));
app.use(body.json());

// Setup Middleware

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./routes/routes')(app);








app.listen(3000, function (req, res){
	
	console.log('listening sir!');
})
