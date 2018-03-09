const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// set schema for each user
const UserData = new Schema({
	  username: String,
	  password: String
	
});
 //associate each user with a group, push pull where neccessary
const groupData = new Schema  ({
	user: [String],
	goal: String,
	goalId: Number
});

const goalCount = new Schema({ // associate goal amounts w users
	user: String, 
	count: Number
});

UserData.plugin(passportLocalMongoose); // export accordingly
var User = mongoose.model('User', UserData);
let groups = mongoose.model('groups', groupData);
let counter = mongoose.model('counter', goalCount);
module.exports = {
	User: User,
	Group: groups,
	count:counter
	
}
