///////////////
// variables //
///////////////
var tlBlocVideo;
var animationEase = Cubic.easeInOut;
var animationTime = 1;
var isFF = !!window.sidebar;

/////////////////////////////
// Animation au chargement //
/////////////////////////////
function animLoad(){
	var tlAnimLoad = new TimelineMax();
	tlAnimLoad.add(
		TweenMax.to($("#bloc-content"), 0.8, {y: "0", opacity: 1}),
		TweenMax.staggerTo($(".categ"), 1, {y: "0", force3D:true}),
		TweenMax.staggerTo($(".categ h2"), 0.5, {y: "0", force3D:true}),
		TweenMax.to($(".wrapper-img-illus"), 0.5, {y: "0", opacity: 1, force3D:true, delay: 0.2})
	);
	tlAnimLoad.set($("#stroke-bottom"), {display: "block"});
	tlAnimLoad.fromTo($("#path-stroke-bottom"), 0.5, {drawSVG:"0%"}, {drawSVG:"100%", immediateRender:false});
	tlAnimLoad.set($("#stroke-top"), {display: "block"});
	tlAnimLoad.fromTo($("#path-stroke-top"), 0.5, {drawSVG:"0%"}, {drawSVG:"100%", immediateRender:false});
}

function parallaxProject(){
	$(".project-link").mousemove(function(e){
		var xParallax = -(e.pageX + this.offsetLeft) / 20;
		var yParallax = -(e.pageY-($(this).parent().index()*63) + this.offsetTop) / 20;
		TweenMax.set($(".action", this), {x: xParallax+"px", y: yParallax+"px"});
	});
	if(!isFF){
		$("body").mousemove(function(e){
			var xParallax = -(e.pageX + this.offsetLeft) / 30;
			var yParallax = -(e.pageY + this.offsetTop) / 30;
			var xParallax2 = (e.pageX/2 + this.offsetLeft) / 20;
			var yParallax2 = (e.pageY/2 + this.offsetTop) / 20;
			TweenMax.set($("#stroke-top"), {x: xParallax+"px", y: yParallax+"px", z: "0", force3D:true});
			TweenMax.set($("#stroke-bottom"), {x: xParallax2+"px", y: yParallax2+"px", z: "0", force3D:true});
		});
	}else{
		$("body").addClass("is-ff");
	}
}

$(document).ready(function(){
	TweenMax.set($(".project-content"), {display: "none"});
	TweenMax.set($(".video-wrapper"), {opacity: 0, y: "50px"});
	parallaxProject();
});


$(window).load(function() {
	animLoad();
});


$(window).resize(function() {

});
