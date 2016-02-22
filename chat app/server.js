var mongo = require('mongodb').MongoClient,
	client = require('socket.io').listen(8080).sockets;

mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
		if (err) {
			throw err;
		}
		client.on('connection',function(socket){
		console.log("Someone has connected !");

		//creating the database collection(table) in mongo

		var col = db.collection('messages'),
			sendStatus = function(s){
				socket.emit('status',s);
			} ;
			// Emit all the messages
			col.find().limit(100).sort({id:1}).toArray(function(err,res){
				if (err) {throw err};
				socket.emit('output',res);
			});
		//Wait for input 
		socket.on('input' ,function(data){
			var name = data.name,
				message = data.message,
				whiteSpacePattern = /^\s*$/;

				if (whiteSpacePattern.test(name) || whiteSpacePattern.test(message)) {
					sendStatus({message:'Name and message both are required'});
					console.log('Invalid data ');
				} else{
					col.insert({name:name,message:message},function(){

						//Emit latest message to all clients
						client.emit('output',[data]);

					console.log('Data successfully inserted ..');
						sendStatus({
							message:"Message Sent",
							clear:true
						})
					});
				};

			
		})
	});
});









console.log("Node socket.io running...");
