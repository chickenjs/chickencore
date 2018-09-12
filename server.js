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
 	var chickencore = require("chickencore");		//include main module
	var console = chickencore.logger; 			//can be used just like console
	var config = chickencore.util.getconfig();		//config, copied from standard chickencore config
	var web = chickencore.webapp();				//webapp, same usage as "express" module
	var db = chickencore.database(); 			//need "chickendb" module!!
	
	
	var port = config.web.port || 3000;
	if(web.listen(port)) {
		console.info("listening on port: " + port);
	}else {
		console.error("website failed to start!!");
	}
	
	var api = app.api({
		subdomain: "api",
		ondisabled: function(req, res) {
			console.info("api is disabled!!");
			res.send("{disabled}");
		}
	});
	
	//listen to "users" in "api" subdomain
	api.get("/users", function(req, res) {
		res.sendJSON(db.getdata("users"));
	});
	
	//configure api by config
	api.configure(JSON.parse("apiconfig.json"));
	
	//make use of the webapp
	web.get('/', function (req, res) {
		res.send('Hello World!! \n' + (db.getdata("text") || "this is a test"));
	});
*/

