function animLoad(){TweenMax.fromTo($("#bloc-content"),.8,{y:"100px",opacity:0},{y:"0",opacity:1,delay:.8}),TweenMax.fromTo($(".categ"),1,{y:"80px"},{y:"0",delay:.8}),TweenMax.fromTo($(".categ h4"),.5,{y:"80px"},{y:"0",delay:.8})}function illus(){var e=document.getElementById("canvas-bloc-illus");paper.setup(e);var o=new paper.Tool;o.maxDistance=10;var n=$("#bloc-illus").width()/2,i=$("#bloc-illus").height()/2,t=new paper.Path.Circle(new paper.Point(n,i),150);t.rasterize(300);var a=new paper.RgbColor(250,249,219,0);t.fillColor={gradient:{stops:[["#1e32d2",0],[a,1]],radial:!0},origin:t.position,destination:t.bounds.height},t.onFrame=function(e){t.fillColor=t.bounds.height>t.bounds.width?{gradient:{stops:[["#1e32d2",0],[a,1]],radial:!0},origin:t.position,destination:t.bounds.width}:{gradient:{stops:[["#1e32d2",0],[a,1]],radial:!0},origin:t.position,destination:t.bounds.height}},o.onMouseMove=function(e){var o=t.getNearestLocation(e.point),n=o.segment,i=n.point;if(console.log("x : "+i.x+" y : "+i.y),o.distance<60){var a=e.point.y;i.y+=(a-i.y)/3;var s=e.point.x;i.x+=(s-i.x)/3}},o.onMouseDown=function(e){t.selected=!0},o.onMouseUp=function(e){t.selected=!1}}function playVideo(){$("li.project.open video").get(0).play()}var tlBlocVideo,animationEase=Cubic.easeInOut,animationTime=1;$(document).ready(function(){illus(),animLoad(),TweenMax.set($(".project-content"),{display:"none",opacity:0}),TweenMax.set($(".video-wrapper"),{opacity:0,y:"50px"}),$("a.project-link").click(function(){var e=$(this).closest("li.project");e.addClass("open"),TweenMax.set($(".project-content"),{display:"block"});var o=new TimelineMax;return o.to($(".project-content",e),.3,{opacity:1,ease:Linear.easeNone}),o.to(e,.15,{width:"100%",ease:Linear.easeNone}),o.to($(".video-wrapper",e),.3,{opacity:1,y:"0",delay:.3,ease:Linear.easeNone,onComplete:playVideo}),!1})}),$(window).resize(function(){});