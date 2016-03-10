///////////////
// variables //
///////////////
var tlBlocVideo;
var animationEase = Cubic.easeInOut;
var animationTime = 1;

/////////////////////////////
// Animation au chargement //
/////////////////////////////
function animLoad(){
	TweenMax.to($("#bloc-content"), 0.8, {y: "0", opacity: 1, delay: 0.8});
	//TweenMax.to($(".categ"), 1, {y: "0", delay: 0.8});
	//TweenMax.to($(".categ h2"), 0.5, {y: "0", delay: 0.8});

	TweenMax.staggerTo($(".categ"), 1, {y: "0", delay: 0.8, force3D:true}, 0.2);
	TweenMax.staggerTo($(".categ h2"), 0.5, {y: "0", delay: 0.8, force3D:true}, 0.2);
}

///////////////////////
// Animation paperjs //
///////////////////////
function illus(){
	var canvas = document.getElementById('canvas-bloc-illus');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	var tool = new paper.Tool();
	tool.maxDistance = 10;
	//paper.setViewSize($("#bloc-illus").width(), $("#bloc-illus").width());
	
	// Create a Paper.js Path to draw a line into it:
	var centreX = $("#bloc-illus").width()/2;
	var centreY = $("#bloc-illus").height()/2;
	/*var myCircle = new paper.Path.Circle(new paper.Point(350, 200), 50);
	myCircle.strokeColor = 'black';
	myCircle.selected = true;*/
	var myCircle = new paper.Path.Circle(new paper.Point(centreX, centreY), 150);
	myCircle.rasterize(300);
	var jauneFolioTransparent = new paper.RgbColor(250, 249, 219, 0);
	myCircle.fillColor = {
	    gradient: {
	        stops: [['#1e32d2', 0], [jauneFolioTransparent, 1]],
	        radial: true
	    },
	    origin: myCircle.position,
	    destination: myCircle.bounds.height
	};
	myCircle.onFrame = function(event) {
		if(myCircle.bounds.height>myCircle.bounds.width){
			myCircle.fillColor = {
			    gradient: {
			        stops: [['#1e32d2', 0], [jauneFolioTransparent, 1]],
			        radial: true
			    },
			    origin: myCircle.position,
			    destination: myCircle.bounds.width
			};
		}else {
			myCircle.fillColor = {
			    gradient: {
			        stops: [['#1e32d2', 0], [jauneFolioTransparent, 1]],
			        radial: true
			    },
			    origin: myCircle.position,
			    destination: myCircle.bounds.height
			};
		}
	}
	/*tool.onMouseMove = function(event) {
		var location = myCircle.getNearestLocation(event.point);
		var segment = location.segment;
		var point = segment.point;
		console.log("x : "+point.x+" y : "+point.y);
		
		if (location.distance < 60) {
			var y = event.point.y;
			point.y += (y - point.y) / 3;
			var x = event.point.x;
			point.x += (x - point.x) / 3;
		}
	
	}*/
	
	
	
	/*tool.onMouseDown= function(event) {
		// selectionné
	    myCircle.selected = true;
	}
	
	tool.onMouseUp= function(event) {
	    myCircle.selected = false;
	}*/
	
}

function parallaxProject(){
	$(".project-link").mousemove(function(e){
		var xParallax = -(e.pageX + this.offsetLeft) / 20;
		var yParallax = -(e.pageY-($(this).parent().index()*63) + this.offsetTop) / 20;
		TweenMax.set($(".action", this), {x: xParallax+"px", y: yParallax+"px"});
	});

	/*$(".plus-link").mousemove(function(e){
		var xParallax = -(e.pageX + this.offsetLeft) / 20;
		var yParallax = -(e.pageY + this.offsetTop) / 20;
		TweenMax.set($(".plus", this), {x: xParallax+"px", y: yParallax+"px"});
	});*/
}

$(document).ready(function(){
	illus();
	TweenMax.set($(".project-content"), {display: "none"});
	TweenMax.set($(".video-wrapper"), {opacity: 0, y: "50px"});
	parallaxProject();
});


$(window).load(function() {
	animLoad();
});


$(window).resize(function() {

});
