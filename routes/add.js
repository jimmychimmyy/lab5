var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  var name = request.query.name;
  var description = request.query.description;
  var imageURL = "http://lorempixel.com/500/500/people";
  var json = {
    'name': name,
    'description': description,
    'imageURL': imageURL
  }
  console.log(JSON.stringify(json));
  data.friends.push(json);
  return true;
 }
