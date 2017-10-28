var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://admin:robat12@ds035485.mlab.com:35485/devjokes';

module.exports = {
	addPost: function(title, subject, callback){
		MongoClient.connect(url, function(err, db) {
			if(err){
				console.log(err);
			}else{	db.collection('users').insertOne( {
				"title": title,
				"subject": subject
			},function(err, result){
				assert.equal(err, null);
		    	console.log("Saved the blog post details.");
		    	if(err == null){
		    		callback(true)
		    	}
		    	else{
		    		callback(false)
		    	}
			});}
		  
		});
	},
	getPost: function(callback){
		
		MongoClient.connect(url, function(err, db){
			if(err){
				console.log(err);
			}
			else{
				 db.collection('users', function (err, collection) {
		        collection.find().toArray(function (err, list) {
		            callback(list);
		        });
		     });
			}
			
		})
	}
}


