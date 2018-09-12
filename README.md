# chickencore
the core for the [chickenjs](https://github.com/chickenjs) project

## what is this?
this project is created for nodejs, to easly create new nodejs projects
this module contains hulp for:
 - website;       easly listen and create website (uses express api), with binded support for:
   - web session; session support
   - websocket;   easy api, created for data sending and recieving
   - rest api;    easy api, this uses the website module to listen on api. subdomain
 - database; easy api, can use in-base suported database(JSON) or mysql database
 - shh login; just becouse

## dependents
all dependents from the chickenjs project:
- [chickenAPI](https://github.com/chickenjs)
- [chickenInfo](https://github.com/chickenjs)
- [chickenTemplates](https://github.com/chickenjs)
- [chickendb](https://github.com/chickenjs)
- [chickenGames](https://github.com/chickenjs)
- [chickenEdit](https://github.com/chickenjs)

cool idea for other module?> [create pull request](https://github.com/chickenjs/chickencore/pulls)

## usage
usage of the chickencore module:
```
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
```
