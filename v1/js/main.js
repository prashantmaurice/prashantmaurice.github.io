//-----------gallery big pics--------------------------------//
$(document).ready(function() {

	var $currproject = 1;
    	var $currproject_slide = 1;
	var $currslide_nums= 3;
	
    	//--------content---------------------------
    	var G_headings= new Array();
	G_headings[0] = "Leave this aside to eliminate confusion";
	G_headings[1] = "RAFTAR PROMO VIDEO";
	G_headings[2] = "3D ANIMATION";
	G_headings[3] = "SHAASTRA PROMO VIDEO";
	G_headings[4] = "VISITING CARD DESIGNS";
	G_headings[5] = "EXTRA MURAL LECTURES - POSTERS & BANNERS";
	G_headings[6] = "3D HOLOGRAM";
	G_headings[7] = "JERSEY DESIGNS";
	G_headings[8] = "SHAASTRA PROMO VIDEO";
	G_headings[9] = "EXTRA MURAL LECTURES  - PROMO VIDEO";
	G_headings[10] = "RAFTAR  LOGO & BROCHURE";
	G_headings[11] = "RAFTAR MAIN WEBSITE";
	G_headings[12] = "ROBBIN BAKERS";
	G_headings[13] = "SYNCWITS";
	G_headings[14] = "SYNCWITS";
	G_headings[15] = "WE THE CHANGE MISSION";
	G_headings[16] = "NATIONAL CENTER FOR SAFETY OF HERITAGE STRUCTURES";
	G_headings[17] = "PREPFACTOR";
	G_headings[18] = "SYNCWITS";
	G_headings[19] = "DHRUVA";
	G_headings[20] = "SHAASTRA";
	var G_desc= new Array();
	G_desc[0] = "Leave this aside to eliminate confusion";
	G_desc[1] = "<a href='https://www.youtube.com/watch?v=0g0a3xXS2Fc'>Click here to watch this video</a>";
	G_desc[2] = "<a href='https://www.youtube.com/watch?v=v1Lmo72rkcs'>Click here to watch this video</a>";
	G_desc[3] = "<a href='https://www.youtube.com/watch?v=akfriRtEPNk&feature=youtu.be'>Click here to watch this video</a>";
	G_desc[4] = "";
	G_desc[5] = "Indian Institute of Technology - Madras";
	G_desc[6] =  "<a href='https://www.youtube.com/watch?v=cIgmyGMIL_U'>Click here to watch this video</a>";
	G_desc[7] = "<a href=' '></a>";
	G_desc[8] = "<a href='https://www.youtube.com/watch?v=BDTqnlMdO2k'>Click here to watch this video</a>";
	G_desc[9] = "<a href='https://www.youtube.com/watch?v=Dq39FfJysaQ&feature=youtu.be'>Click here to watch this video</a>";
	G_desc[10] = "";
	G_desc[11] = "Official Formula SAE racing team of IIT madras";
	G_desc[12] = "Startup based in Guntur, Andhra Pradesh";
	G_desc[13] = "An online Education Portal";
	G_desc[14] = "Front End designer";
	G_desc[15] = "An NGO aimed at providing educaton to the unfortunate with more than 26 branches all over India";
	G_desc[16] = "National organisation that predicts and protects  Heritage structures from earthquakes, weather, soil sinkage";
	G_desc[17] = "<a href=''>Online Mock exam Portal</a>";
	G_desc[18] = "<a href='https://www.youtube.com/watch?v=oJsfhExoJGU'>Click here to watch this video</a>";
	G_desc[19] = "<a href='https://www.youtube.com/watch?v=JtOk8tkmu3Q'>Click here to watch this video</a>";
	G_desc[20] = "<a href='https://www.youtube.com/watch?v=skk-jFSVWK4'>Click here to watch this video</a>";
	 var G_type= new Array();
	G_type[0] = "Leave this aside to eliminate confusion";
	G_type[1] =G_type[3] =G_type[8] = G_type[9] ="MOTION";
	G_type[4] =G_type[5] =G_type[7] = G_type[10] =G_type[16] ="PRINT";
	G_type[11] =G_type[12] =G_type[13] = G_type[14] =G_type[15] ="WEB";
	G_type[6]=G_type[18]=G_type[19] =G_type[20]  ="MOTION GRAPHICS";
	G_type[2]  ="3D DESIGN";
	//-------------on start scroll to page 1----------------------------
	 $('html, body').stop().animate({
            scrollTop: $("#mainpage-intro").offset().top -40    //offset to couteract overshoot
        }, 1500, 'easeInOutExpo');

  /*  	$('ul.pics-collection li').click(function(e) {
		//alert('show..!');
		//$(document).ready(gallery););
		$("#gallery_big").show();
    		e.preventDefault();
		$currproject = $(this).attr('data-value');
		var temp='img/projects/web'+$currproject+'_';
		temp+=$currproject_slide;
		$('#gallery_big1').attr('src','img/projects/web'+$currproject+'_'+ $currproject_slide+'.jpg');
		loadheadings(G_headings[$currproject],G_desc[$currproject],G_type[$currproject]);
		
    });
	$("#rightarrow").click(function(e) {
		$currproject_slide++;
		if($currproject_slide>3)
			$currproject_slide=1;			   //alert('wow');
		$('#gallery_big1').attr('src', "img/projects/web"+$currproject+"_"+$currproject_slide+".jpg");

    });
	$("#leftarrow").click(function(e) {
		$currproject_slide--;
		if($currproject_slide<1)
			$currproject_slide=3;			   //alert('wow');
		$('#gallery_big1').attr('src', "img/projects/web"+$currproject+"_"+$currproject_slide+".jpg");

    });*/
//---------main code-----------------//

	  $('#sidebar').affix({
	      offset: {
		// top: 235
		top: $('#superheader').height()-20	//minus 10 to eliminate flicker
	      }
	});
	  //var tid = setTimeout(headeranim(), 2000);
	 
	 $('#test7').click(function(){
					mycode2();
    });
//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('.page-scroll a').bind('click', function(event) {
		 var $anchor = $(this);
		 $('html, body').stop().animate({
		     scrollTop: $($anchor.attr('href')).offset().top-100//offset to couteract overshoot
		 }, 1500, 'easeInOutExpo');
		 event.preventDefault();
	    });
	});
	
	//-----gallery-------------------------
	$(".mix").click(function() {
			$currproject = $(this).attr('data-value');
			$currslide_nums = $(this).attr('data-num');
			$currproject_slide = 1;
			$("#gallery_big").show();
			$("#projects_clickdown").hide();
			scrolltobigpics( );
			var temp='img/projects/web'+$currproject+'_';
			temp+=$currproject_slide;
			$('#gallery_big1').attr('src','img/projects/web'+$currproject+'_'+ $currproject_slide+'.png');
			loadheadings(G_headings[$currproject],G_desc[$currproject],G_type[$currproject]);
			
    	});
	$("#rightarrow").click(function(e) {
			$currproject_slide++;
			if($currproject_slide>$currslide_nums)
				$currproject_slide=1;			   //alert('wow');
			$('#gallery_big1').attr('src', "img/projects/web"+$currproject+"_"+$currproject_slide+".png");
    	});
	$("#leftarrow").click(function(e) {
			$currproject_slide--;
			if($currproject_slide<1)
				$currproject_slide=$currslide_nums;			   //alert('wow');
			$('#gallery_big1').attr('src', "img/projects/web"+$currproject+"_"+$currproject_slide+".png");
    	});


 });//document.ready
 //---------------new gallery-----------------
 $(function(){
    $('#Grid').mixitup();
});
 $('#Grid').mixitup({
    targetSelector: '.mix',
    onMixLoad: null,
    onMixStart: null,
    onMixEnd: function(){
    }
});
 function loadheadings( temp, temp2,temp3){
	document.getElementById('Gheading').innerHTML=temp;
	document.getElementById('Gdesc').innerHTML=temp2;
	document.getElementById('Gtype').innerHTML=temp3;
}
 function scrolltobigpics( ){
		 $('html, body').stop().animate({
		     scrollTop: $("#gallery_big").offset().top-100//offset to couteract overshoot
		 }, 1500, 'easeInOutExpo');
}

 
$(function()  {   //header reload
	var cars = $('.header_list');
	var index = 0;
	var index2 = 1;
	var loop = function() {
		var car = $(cars[index]);//outgoing
		var car2 = $(cars[index2]);//incoming
		car.delay(1000).animate({ 'padding-top' : 50,'opacity':0}, 1000);
		car2.delay(1000).animate({ 'padding-top' : 0,'opacity':1}, 1000, function() {
	      			index = index + 1 < cars.length ? index + 1 : 0;
				index2 = index2 + 1 < cars.length ? index2 + 1 : 0;
				loop();	
	  	});
	};
	loop();
});
$(window).scroll(function() {//--------------display scroll top icon after scrolling some down
    if ($(".navbar").offset().top > 700) {
        $("#go_to_top").show();
    } else {
        $("#go_to_top").hide();
    }
});


$( window ).resize(function() {
    $('#reel').css({
  	//	'background-position-x': '0'
	});
    //alert('asfag');
});
$(function()  {   //customers reel
 var cars = $('#reel');
	 var i=0;
	 var temp=0;
	 var temp2=0;
	var loop = function() {
			widthx=$('#reel').width()/3;
			temp=(widthx*i)+($('#reel').width()*temp2);
			cars.delay(1000).animate({ 'background-position-x': temp}, 500, function() {
				i++;
				if(i>2){
					   // $('#reel').css({'background-position-x': '0'	});
					i=0;
					temp2++;
					}
				loop();	
	  		});
	};
	loop();
});
$(function ()  { 
	     $("#test5").popover();  //enable popovers on myskills section
}); 
$(function ()  { 
	     $("#pop1").popover();  //enable popovers on myskills section
	     $("#pop2").popover();
	     $("#pop3").popover();
	     $("#pop4").popover();
}); 

