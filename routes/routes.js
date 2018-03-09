const dbs = require('../database/dbs');



module.exports = function (app){
	//home route
	app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/src/index.html');

    
});
	// listUsersInGoal
	app.get('/listUsersInGoal', (req, res) => {
	var groupList = [];
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
					res.json({data:"You've saved!"
					})
					
					
				})
				.catch(function(lost){
					res.json({data:"Sorry, there was an error in saving!"})
				})
				
				
			}
			
			
			
		})
    
});
	
	// delete goal
	app.post('/leaveGoal', (req, res) => {
    
});
	
	
	//youtube videos
	app.get('/youtubeScrape', (req, res) => {
    
});
	
	
	
	//chatroom 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

