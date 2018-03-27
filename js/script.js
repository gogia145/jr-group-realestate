/*** Document Ready Function ***/
jQuery(document).ready(function($){
	
	"use strict";
	/*** Donate Box Move Up and Down Function ***/
	$(".donate-updown").click(function(){
		$(".donate").toggleClass("down");
	});	
	
	if( $("a[rel^='prettyPhoto']").length > 0 ){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	}
	
	/*** Slider Function ***/
	if ($('#camera_wrap_1').length > 0){
	$('#camera_wrap_1').camera({
		height: '53%',
		thumbnails: true,
		time: 4000,
		transPeriod: 2000
	});
	}
	
	
	
	/*** Main Page Toggles Function ***/
	var Panels = $('.accordions > dd').hide();
	var Panel1 = $('.accordions > dd.opened').show();
	var quest = $('.accordions > dt a');
	
	$('.accordions > dt a').click(function() {
		var $this = $(this);
		var $target =  $this.parent('dt').next('dd');
	
		if(!$target.hasClass('active')){
			Panel1.removeClass('active').slideUp();
			Panels.removeClass('active').slideUp();
			$target.addClass('active').slideDown();
			quest.removeClass('activate');
			$this.addClass('activate');
		}
		return false;
	});

	$(function() {
		$('.accordions > dt:first-child a').addClass('activate');
	});

	
	
	/*** Side Bar Toggles Function ***/
	$(".sidebar-widget li").click(function(){
		$('.sub-list', this).slideToggle();
		return false;
	});
	
	
	
	/*** Responsive Menu Function ***/
		$('.ipadMenu').change(function(){
			var loc = $('option:selected', this).val();
			document.location.href = loc;
		});
	
	$(".list").click(function(){
        $(".grid").removeClass("active");
        $(".view-style").removeClass("grid-view");
        $(".view-style").addClass("list-view");
		$(this).addClass("active");
	});	
	$(".grid").click(function(){
        $(".list").removeClass("active");
        $(".view-style").removeClass("list-view");
        $(".view-style").addClass("grid-view");
		$(this).addClass("active");
		
	});	

	
/*** STICKY MENU ***/
var nav = $('.sticky');
$(window).scroll(function () {
	if ($(this).scrollTop() > 80) {
			nav.addClass("stick");
	}
	else {
			nav.removeClass("stick");
	}
});
/*** Toggle Header ***/
$(".open-header").click(function(){
	$("header .container").slideToggle();
});	

	
	/*** Side Panel Functions ***/
	$(".panel-icon").click(function(){
		$(".side-panel").toggleClass("show");
	});	
	
	
	$(".boxed-style").click( function(){
		$(".theme-layout").addClass("boxed");
		$("body").addClass('bg-body1');
	});
	$(".full-style").click( function(){
		$(".theme-layout").removeClass("boxed");
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat1").click( function(){
		$("body").addClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat2").click( function(){
		$("body").removeClass('bg-body1');
		$("body").addClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat3").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").addClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat4").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").addClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat5").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").addClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat6").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").addClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat7").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").addClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat8").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").addClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat9").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").addClass('bg-body9');
		$("body").removeClass('bg-body10');
	});
	$(".pat10").click( function(){
		$("body").removeClass('bg-body1');
		$("body").removeClass('bg-body2');
		$("body").removeClass('bg-body3');
		$("body").removeClass('bg-body4');
		$("body").removeClass('bg-body5');
		$("body").removeClass('bg-body6');
		$("body").removeClass('bg-body7');
		$("body").removeClass('bg-body8');
		$("body").removeClass('bg-body9');
		$("body").addClass('bg-body10');
	});
	
	
		
	
	/*** Carousel Function ***/
	if( $('#slider1').length > 0 ){
		$('#slider1').tinycarousel();
	}
	
	if( $('#slider2').length > 0 ){
		$('#slider2').tinycarousel(
		{
			display: 1,
			interval: true
		});
	}
	
	if( $('#slider3').length > 0 ){
		$('#slider3').tinycarousel(
		{
			display: 1,
			interval: true
		});
	}
	
	if( $('#slider4').length > 0 ){
		$('#slider4').tinycarousel(
		{
			display: 1,
			interval: false
		});
	}
	
	/*if( $('#slider5').length > 0 ){
		
		$('#slider5').tinycarousel(
		{
			display: 1,
			interval: false
		});
		
	}*/
	
	/*** Service Toggle Function ***/
	$('.toggle:first').addClass("activate");
	
	$(".toggle").mouseenter(function(){
		$(".toggle").removeClass("activate");
		$(this).addClass("activate");
	});	
	
	
	/*** Round Carousel ***/
	if($('ul.round').length !== 0){
		$('ul.round').roundabout();
	}
	
	
	$(".alertbox .close").click(function(){
		$(this).parent().fadeOut();
	});	


	/*** Make An Appointment Toggle Function ***/
	$(".make-app").click(function(){

		$(".make-app").toggleClass("click");
		$(".make-app-form").slideToggle(500);
	});	
	$(".make-app").click(function(){
		$(".make-app-toggle").toggleClass("border");
	});	
	
	
	if( $('#sb-slider').length > 0 ){
		/*** Spa Slider Function ***/
		$(function() {
			var Page = (function() {
				var $navArrows = $( '#nav-arrows' ).hide(),
				$shadow = $( '#shadow' ).hide(),
				slicebox = $( '#sb-slider' ).slicebox( {
					onReady : function() {
						$navArrows.show();
						$shadow.show();
					},
					orientation : 'r',
					cuboidsRandom : true,
					disperseFactor : 30
				} ),
				init = function() {
					initEvents();
				},
				initEvents = function() {
					// add navigation events
					$navArrows.children( ':first' ).on( 'click', function() {
					slicebox.next();
					return false;
				} );
				$navArrows.children( ':last' ).on( 'click', function() {
					slicebox.previous();
					return false;
				} );
				};
				return { init : init };
			})();
		Page.init();
		});
	}
	
});/*** Document Ready Function Ends ***/


