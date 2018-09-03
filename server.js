/*
 * creator: Danj (https://github.com/DanBrothers)
 * description: contextmenu, made for easy configuration
 * license: MIT, please link to this if you copy (thanks)
 * 
 * this module contains: webfunction, database, analasis(via web or local)
 * 
 * dependents: 
	chickenedit
	chickengames
	chickendb
 * 
 *
 * usage:
 	var chickencore = require("chickencore");
	var console = chickencore.logger; 			//can be used just like console
	var config = chickencore.util.getconfig();
	var web = chickencore.webapp();
	var db = chickencore.database(); 			//need chickendb
	
	
	web.get('/', function (req, res) {
		res.send('Hello World!! \n' + (db.text || "this is a test"));
	});
	
	var api = app.api({
		subdomain: "api",
		ondisabled: function(req, res) {
			console.info("api is disabled!!");
			res.send("disabled");
		}
	});

	api.get("/users", function(req, res) {
		res.sendJSON(db.users);
	});
	
	
	var port = config.web.port || 3000;
	if(web.listen(port)) {
		console.info("listening on port: " + port);
	}else {
		console.error("website failed to start!!");
	}
*/

