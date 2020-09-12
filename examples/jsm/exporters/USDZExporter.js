var child_process = require("child_process");

const cmd = `
        cd /Users/gulcesirvanci/Desktop/three.js/gltf2usd/Source/
        python gltf2usd.py --gltf /Users/gulcesirvanci/Desktop/sample.gltf --output /Users/gulcesirvanci/Desktop/scene.usdz
        `;

child_process.exec(cmd, function (err, output) {
	if (err) {
		console.log("child processes failed with error code: " + err.code);
	}
	console.log(output);
});
