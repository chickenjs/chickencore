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
-[chickendb](https://github.com/chickenjs)
-[chickengames](https://github.com/chickenjs)
-[chickenedit](https://github.com/chickenjs)
-[chickenanalysis](https://github.com/chickenjs)

maybe more in future?> [create pull request](https://github.com/chickenjs/chickencore/pulls)

## usage
example:
```
var chickencore = require("chickencore");
var config = chickencore.util.getconfig();
var app = chickencore.webapp();
var db = chickencore.database()

app.listen();

var api = app.api({
    subdomain: "api2",
	ondisabled: function(req, res) {
	    res.send("disabled");
	}
});

api.get("/users", function(req, res) {
    res.sendJSON(object);
});

//make use of the webapp
app.get("/", function(req, res) {
    res.send("you are on the main page");
}).post("/", function(req, res) {
    res.send("you posted something");
});
```
