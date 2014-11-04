var app = {
	name: "QA.Env",
	description: "A tool for getting environment status and deployment information"
};



// load module
if (typeof(window) != 'undefined') {
	window.app = app;
} else {
	 var exports = module.exports = app;
}

// debug output
console.log("This is " + app.name);
