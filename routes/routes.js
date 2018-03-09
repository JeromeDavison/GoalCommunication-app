var passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');

const dbs = require('../database/dbs');


// use static authenticate method of model in LocalStrategy
passport.use(Users.User.createStrategy());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(dbs.User.serializeUser());
passport.deserializeUser(dbs.User.deserializeUser());



module.exports = function (app){
	//home route
	app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/src/index.html');

    
});
app.post('/register', (req, res) => { //passport local registration 
dbs.User.register({username:req.body.username}, req.body.password, (err, succ) => {
	if (err){
		res.json({data:"Sorry, couldnt be registered!"});
	} else {
	passport.authenticate('local')(req,res, () => {
	res.json({data:"You've been signed up!"});
	});
	}
 });
});

app.post('/login', authenticate('local'), (req, res) => { //authentication for regular login 
    res.sendFile(__dirname+ '/src/index.html');

});




	// listUsersInGoal
	app.get('/listUsersInGoal', (req, res) => {
		
	/* let listUsers(){ put this in mod folder
		return new Promise((resolve, reject) =>{
			dbs.groups.find({}, (err, succ) => {
		if (err){
			reject("sorry, couldnt find the group");	
		} else {
			for (x = 0; x < succ.length; x++){
				groupList.push(succ[x].user);
			}
			resolve(groupList);
		}
		
		
		
		
		
	});
			
			
		});
		
	}
		*/
		
		
		
	var groupList = []; // list everyone in a group 
    dbs.groups.find({}, (err, succ) => {
		if (err){
			res.json({data: "Sorry, could not reteive users!"});	
		} else {
			for (x = 0; x < succ.length; x++){
				groupList.push(succ[x].user);
			}
		    res.json({data:groupList})
		}
		
		
		
		
		
	)}
	
	
	
});
	
  // add goal
	app.post('/joinGroup', (req, res) => {
		dbs.count.find({user:req.user.username}, (err, succ) => {
			if (err){
				res.json({data:"sorry, couldnt find user!"});
				
			} else if (succ[0].count > 3)
			
			{
				res.json({data:"Too many goals. Please delete one or more and resubit"});
				
				
			} else {
				let newGroup = new dbs.groups();
				newGroup.user = req.user.username;
				newGroup.goal = req.body.goal;
				newGroup.save().then(function(saved){
					res.json({data:"You've saved!"})
					
					
				})
				.catch(function(lost){
					res.json({data:"Sorry, there was an error in saving!"})
				})	
		}	
	})
});
	
	// delete goal
	app.post('/leaveGoal', (req, res) => {
    dbs.Group.find({goalId:req.body.id}, (err, succ) =>
	 if (err){
		 res.json({data:"sorry, there was no goal matching the id"});
		 
	 } else {
		 succ[0].remove((fail, win) => {
		 if (fail){
			 res.json({data:"wasnt able to remove"});
		 }
		 else {
			dbs.count.find({user:req.body.user}, (err1, succ1) => {
				if (succ1){
					succ1[0].count = succ1[0].count - 1;
					succ1[0].save().then(function(save){
					res.json({data:"congrats! youve left the goal!", info:save}); 

						
						
					});

				}
				
			});
			 
		 }
		 
		 
		 
		 
		 });
		
	 }
	
	
	
	
	
	
	});
});
	
	
	//youtube videos
	app.get('/youtubeScrape', (req, res) => {
    
});
	
	
	
	//chatroom 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
