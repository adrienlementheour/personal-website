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
	var tool = new paper.Tool();
	
	//paper.setViewSize($("#bloc-illus").width(), $("#bloc-illus").width());
	
	// Create a Paper.js Path to draw a line into it:
	var centreX = $("#bloc-illus").width()/2;
	var centreY = $("#bloc-illus").height()/2;
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
	tool.onFrame = function(event) {
		console.log("aze");
	}
	tool.onMouseMove = function(event) {
		var location = myCircle.getNearestLocation(event.point);
		var segment = location.segment;
		var point = segment.point;
		console.log("x : "+point.x+" y : "+point.y);
		if (location.distance < 20) {
			var y = event.point.y;
			point.y += (y - point.y) / 6;
			var x = event.point.x;
			point.x += (x - point.x) / 6;
		}
		
		/*if (!point.fixed && location.distance < 20) {
			var y = event.point.y;
			point.y += (y - point.y) / 6;
			var x = event.point.x;
			point.x += (x - point.x) / 6;
			if (segment.previous && !segment.previous.fixed) {
				var previous = segment.previous.point;
				previous.y += (y - previous.y) / 48;
				previous.x += (x - previous.x) / 48;
			}
			if (segment.next && !segment.next.fixed) {
				var next = segment.next.point;
				next.y += (y - next.y) / 48;
				next.x += (x - next.x) / 48;
			}
		}*/
	}
	
	// selectionné
	
	tool.onMouseDown= function(event) {
        myCircle.selected = true;
    }
    
    tool.onMouseUp= function(event) {
        myCircle.selected = false;
    }
});

$(window).resize(function() {

});