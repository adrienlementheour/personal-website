///////////////
// variables //
///////////////
var tlBlocVideo;
var animationEase = Cubic.easeInOut;
var animationTime = 1;

$(document).ready(function(){
	// Simple way to attach js code to the canvas is by using a function
	//function sketchProc(pjs) {
		// mode colorimetrique
	//	pjs.colorMode(pjs.RGB);
		// taille du canvas
	//	pjs.size($("#bloc-illus").width(), $("#bloc-illus").height(), pjs.WEBGL);
			
	//	};
		
	//}
	
	//var canvas = document.getElementById("canvas-bloc-illus");
	//var p = new Processing(canvas, sketchProc);

	var canvas = document.getElementById('canvas-bloc-illus');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	
	//paper.setViewSize($("#bloc-illus").width(), $("#bloc-illus").width());
	
	// Create a Paper.js Path to draw a line into it:
	var centreX = $("#bloc-illus").width()/2;
	var centreY = $("#bloc-illus").height()/2;
	console.log("--- CENTREX : "+centreX+" --- CENTREY : "+centreY+"---");
	/*var myCircle = new paper.Path.Circle(new paper.Point(350, 200), 50);
	myCircle.strokeColor = 'black';
	myCircle.selected = true;*/
	var myCircle = new paper.Path.Circle(new paper.Point(centreX, centreY), 150);
	var jauneFolioTransparent = new paper.RgbColor(250, 249, 219, 0);
	myCircle.fillColor = {
	    gradient: {
	        stops: [['#1e32d2', 0], [jauneFolioTransparent, 1]],
	        radial: true
	    },
	    origin: myCircle.position,
	    destination: myCircle.bounds.rightCenter
	};
	
	// selectionné
	//myCircle.selected = true;
});

$(window).resize(function() {

});