let express = require('express');
let cors = require('cors');
let body = require('body-parser');
var app = express();
app.use(cors())
app.use(body.urlencoded({extended: true}));
app.use(body.json());



app.route('/')
.get((req, res, next) => {
	 res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	
 res.json({Tech:["First", "second", "third"],
           Food: ["First", "second", "third"],
		   misc:["First", "second", "third"]
		   });
})
.post((req,res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

})



app.listen(3000, function (req, res){
	
	console.log('listening sir!');
})