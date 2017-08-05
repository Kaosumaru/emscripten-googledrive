
module.exports = function(){
	(function() {
		var memoryInitializer = 'DriveApp.html.mem';
		if (typeof Module['locateFile'] === 'function') {
			memoryInitializer = Module['locateFile'](memoryInitializer);
		} else if (Module['memoryInitializerPrefixURL']) {
			memoryInitializer = Module['memoryInitializerPrefixURL'] + memoryInitializer;
		}
		var xhr = Module['memoryInitializerRequest'] = new XMLHttpRequest();
		xhr.open('GET', memoryInitializer, true);
		xhr.responseType = 'arraybuffer';
		xhr.send(null);
	})();

	var script = document.createElement('script');
	script.src = "DriveApp.js";
	document.body.appendChild(script);	
};