curr_slide = 1
curr_query = 1
running=0
curr_text = 2
curr_ticker=1
slide3=0
$(document).ready(function(){
	cloudrot=0;
	galaxyrot=0;
	timer = setInterval(moveNext, 1500000);
	tick = setInterval("tickernext()", 1000);
	bounce = setInterval("stickybounce()", 400);
	cloudtick = setInterval(function(){cloudrotate(cloudrot); changequery();	}, 2000);
	galaxy1rotate();
	//css help to make cicles i third slide height=width------------------------------------------------------------------------------------------------------------
	var div = $('.eachcircle');
	var width = div.width();
	div.css('height', width);
	
	//pulse background scroll--------------------------------------------------------------------------------------------------------------------------------------
	var scrollSpeed = 10;
    	// set the default position
    	var current = 0;
    	// set the direction
    	var direction = 'h';
   	 function bgscroll(){
		 // 1 pixel row at a time
		 current += 1; 
		 // move the background with backgrond-position css properties
		 $('div.eachpulse').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");
       }
    //Calls the scrolling function repeatedly
     setInterval(bgscroll, scrollSpeed);  
     //------------------------------------------------------------------------------------

	
	//cloudrotate(90);
	//slideoneanimation();
	$("#wipeleft").click(function(){movePrev();});
	//$(".features").click(function(){displaydescription();});
	$(".features").click(function(){$('#text1').transform({rotate: 45});});
	$("#close").click(function(){closedescription();});
	$("#wiperight").click(function(){moveNext();$('.wipe').transform({rotate: 45});});
	setTimeout(function(){$("#sticky").animate({opacity:1},200)},100);
	setTimeout(function(){stickyrotate(0);},100);
	stickyrotate(-90);
	$(".mapsingle").hover(function(){
			$(this).animate({opacity:1},"fast");
		},function(){
			$(this).animate({height:20},1,function(){maphighlight();});								 
	});
	 $('.wipe').hover( function(){
		  $(this).css('background-color', '#EEEEEE');
	   },
	   function(){
		  $(this).css('background-color', '#FFA200');
	   });
	slide1time=setInterval("changetext()",2000);
	slide1on();
	$("#map1").click(function(){
		slideto(1);
	});
	$("#map2").click(function(){
		slideto(2);
	});
	$("#map3").click(function(){
		slideto(3);
	});
	$("#map4").click(function(){
		slideto(4);
	});
	$("#map5").click(function(){
		slideto(5);
	});
	$(".flip").hover(function(){
			//alert("wfegsefgj");
			$(this).clearQueue();
			$(this).animate({top:-150, left:-150},300);
		},function(){
			$(this).clearQueue();
			$(this).animate({top:0, left:0},300);								 
	});
	//slide4 details animations--------------------------------------------------------------------------------------------------------------------------
	$(".flip").click(function(){
			if(slide3==0){	
				$(".center").animate({left:320},300);
				$(".details").animate({opacity:1},300);
				slide3=1;
			}
	});
	$("#library").click(function(){
			document.getElementById("detail1").innerHTML="Store and share lists of academic webpages, articles etc.";
			document.getElementById("detail2").innerHTML="Subscribe to your peers’ webpage streams";
			document.getElementById("detail3").innerHTML="";
	});
	$("#circles").click(function(){
			document.getElementById("detail1").innerHTML="  Manage and organize your group activities on a common platform.";
			document.getElementById("detail2").innerHTML="   Network between groups and synchronize your group activities with the planner and arena.";
			document.getElementById("detail3").innerHTML="";
	});
	$("#global").click(function(){
			document.getElementById("detail1").innerHTML=" Interact with fellow students from different countries";
			document.getElementById("detail2").innerHTML=" Analyze your opportunities across the globe; prepare yourself before you venture into one.";
			document.getElementById("detail3").innerHTML="";
	});
	$("#planner").click(function(){
			document.getElementById("detail1").innerHTML="lPlan your tasks and deadlines.";
			document.getElementById("detail2").innerHTML="Synchronize with peers";
			document.getElementById("detail3").innerHTML="Subscribe to social calendar to stay updated.";
	});
	$("#arena").click(function(){
			document.getElementById("detail1").innerHTML=" Public- discuss topics and subjects of your interest and need.";
			document.getElementById("detail2").innerHTML="  Private- hold discussions within groups and contacts.";
			document.getElementById("detail3").innerHTML="";
	});
	//links slide5 color change-----------------------------------------------------------------------------------------------------------------------------------
	$("#facebook").hover(function(){
			//alert("wfegsefgj");
			$("#facebookimg").clearQueue();
			$("#facebookimg").animate({opacity:0},300);
		},function(){
			$("#facebookimg").clearQueue();
			$("#facebookimg").animate({opacity:1},300);							 
	});
	$("#twitter").hover(function(){
			//alert("wfegsefgj");
			$("#twitterimg").clearQueue();
			$("#twitterimg").animate({opacity:0},300);
		},function(){
			$("#twitterimg").clearQueue();
			$("#twitterimg").animate({opacity:1},300);
	});
	
	
	
});

document.addEventListener('keydown', function(event) {
    if((event.keyCode == 39)&&(running==0)) {
        movePrev();
		
    }
    else if((event.keyCode == 39)&&(running==0)) {
        moveNext();
    }
});

function moveNext(){
	if(curr_slide == 4){
		clearInterval(timer);
		return 0;
	}
	running=1;
	curr_slide+=1;
	maphighlight();
	//$(".mainbg").stop(true, true).animate({"left":"+=-10%"},"5000");
	$(".slide").stop(true, true).animate({"left":"+=-100%"},"5000", function(){
		switch(curr_slide)
		{
		case 1:
			slide1on();

			break;
		case 2:

			slide1off();
			break;
		case 3:

			//galaxy1rotate(-300);
			//slide1on();
			break;
		case 4:

			//slide1on();
			break;
		case 5:
			slide5on();
			break;
		}
		running=0;
	});
		
	
	
	return 0;
}
function movePrev(){
	if(curr_slide == 1){
		return 0;
	}
	running=1;
	curr_slide-=1;
	maphighlight();
	//$(".mainbg").stop(true, true).animate({"left":"+=10%"},"5000");
	$(".slide").stop(true, true).animate({"left":"+=100%"},"5000", function(){
		switch(curr_slide)
		{
		case 1:
			slide1on();

			//slide2offprev();	
			break;
		case 2:
			//slide1off();
			//slide2onnext();

			break;
		case 3:

			//slide1on();
			break;
		case 4:
			//slide1on();
			slide5off();

			break;
		case 5:
			//slide1on();

			break;
		}
		running=0;
	});
	
	
	return 0;
}

function wheelScroll(e){
	var evt=window.event || e //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta
    if ((delta>=120)&&(running==0)){
    	movePrev();
    	$(".slide").clearQueue();
    	return 0;
    }
    else if((running==0)&&(delta<=-120)){
    	moveNext();
       	$(".slide").clearQueue();
    	return 0;
    }
}

function maphighlight(){
	if(curr_slide==1){
		$(".mapsingle").clearQueue();
		$(".mapsingle").animate({opacity:0.3},10,function(){
			$("#map1").animate({opacity:1},10);
		});}
	if(curr_slide==2){
		$(".mapsingle").clearQueue();
		$(".mapsingle").animate({opacity:0.3},10,function(){
			$("#map2").animate({opacity:1},10);
		});}
	if(curr_slide==3){
		$(".mapsingle").clearQueue();
		$(".mapsingle").animate({opacity:0.3},10,function(){
			$("#map3").animate({opacity:1},10);
		});}
	if(curr_slide==4){
		$(".mapsingle").clearQueue();
		$(".mapsingle").animate({opacity:0.3},10,function(){
			$("#map4").animate({opacity:1},10);
		});}
	if(curr_slide==5){
		$(".mapsingle").clearQueue();
		$(".mapsingle").animate({opacity:0.3},10,function(){
			$("#map5").animate({opacity:1},10);
		});}
}
function slideto(i){
	if(i>curr_slide){
		//alert("dsdjg")
		while(i!=curr_slide){
			moveNext();
			//delay(0.1);
		}
		while(running==1){
			delay(1);
		}
		delay(50);
		maphighlight();
	}
	else if(i<curr_slide){
		//alert("dsdjg")
		while(i!=curr_slide){
			movePrev();
			//delay(0.1);
		}
		while(running==1){
			delay(1);
		}
		delay(50);
		maphighlight();
	}
	
}

function slide1on(){
	$("#syncwitslogo").clearQueue();
	$("#wipeleft").animate({opacity:0},100);
	curr_text=1;
	clearInterval(slide1time);
	slide1time=setInterval("changetext()",4000);
	$("#syncwitslogo").animate({right:0},500);
	$("#qline1").animate({opacity:1},300,function(){$("#qline2").animate({opacity:1},300,function(){$("#qline3").animate({opacity:1},300);});});
}
function slide1off(){
	$("#syncwitslogo").clearQueue();
	$("#qline1").clearQueue();
	$("#qline2").clearQueue();
	$("#qline3").clearQueue();
	
	$("#wipeleft").animate({opacity:1},100);
	$("#syncwitslogo").animate({right:-700},1);
	$("#qline1").animate({opacity:0},1);
	$("#qline2").animate({opacity:0},1);
	$("#qline3").animate({opacity:0},1);
}
function slide5on(){
	$("#wiperight").animate({opacity:0},100);
}
function slide5off(){
	$("#wiperight").animate({opacity:1},100);
}


function changetext(){
	//setTimeout(function(){$("#qline1").animate({left:-700},200)},600);
	setTimeout(function(){$("#qline2").animate({left:-700},200)},700);
	setTimeout(function(){$("#qline3").animate({left:-700},200)},800);
	setTimeout(function(){nexttext()},1000);
	setTimeout(function(){$("#qline1").animate({left:10},200)},900);
	setTimeout(function(){$("#qline2").animate({left:10},200)},1000);
	setTimeout(function(){$("#qline3").animate({left:10},200)},1100);	//setTimeout(function(){$("#qline1").animate({left:10},200,function(){$("#qline2").animate({left:10},200,function(){$("#qline3").animate({left:10},200);});});	},600);
	
}
function nexttext(){
	if(curr_text>2){curr_text=1;};
	switch(curr_text)
	{
		case 1:
			document.getElementById("qline1").innerHTML="";
			document.getElementById("qline2").innerHTML="CONNECTING YOU WITH THE";
			document.getElementById("qline3").innerHTML="STUDENT COMMUNITY";
			break;
		case 2:
			document.getElementById("qline1").innerHTML="";
			document.getElementById("qline2").innerHTML="PORTAL FOR FLOW OF ";
			document.getElementById("qline3").innerHTML="INFORMATION";
			break;
		case 3:
			document.getElementById("qline1").innerHTML="connects students who are about to take";
			document.getElementById("qline2").innerHTML="portal for flow of information";
			document.getElementById("qline3").innerHTML="who already took it";
			break;
		case 4:
			document.getElementById("qline1").innerHTML="WE BRIDGE ";
			document.getElementById("qline2").innerHTML="THE KNOWLEDGE";
			document.getElementById("qline3").innerHTML="GAP";
			break;
	};
	curr_text++;
	
}
function tickernext(){
	if(curr_ticker>5){curr_ticker=1;};
	switch(curr_ticker)
	{
		case 1:
			document.getElementById("ticker2").innerHTML="a HIGH SCHOOL STUDENT ";
			break;
		case 2:
			document.getElementById("ticker2").innerHTML="an UNDER GRAD";
			break;
		case 3:
			document.getElementById("ticker2").innerHTML="a POST GRAD";
			break;
		case 4:
			document.getElementById("ticker2").innerHTML="a PROFESSIONALS";
			break;
		case 5:
			document.getElementById("ticker2").innerHTML="an ACADEMIA ";
			break;
	};
	curr_ticker++;
}
function displaydescription(){
	$("#featuredetail").animate({opacity:1},500);
}
function closedescription(){
	$("#featuredetail").animate({opacity:0},100);
}
function stickyrotate(d){
	$('#sticky').animate(
    {
        myRotationProperty: d
    },
    {
        step: function(now, tween) {
            if (tween.prop === "myRotationProperty") {
                $(this).css('-webkit-transform','rotate('+now+'deg)');
                $(this).css('-moz-transform','rotate('+now+'deg)'); 
                // add Opera, MS etc. variants
                $(this).css('transform','rotate('+now+'deg)');  
            }
        }
    },1000);
}
function cloudrotate(d){
	$('#cloud').animate(
    {
        myRotationProperty: d
    },
    {
        step: function(now, tween) {
            if (tween.prop === "myRotationProperty") {
                $(this).css('-webkit-transform','rotate('+now+'deg)');
                $(this).css('-moz-transform','rotate('+now+'deg)'); 
                // add Opera, MS etc. variants
                $(this).css('transform','rotate('+now+'deg)');  
            }
        }
    },1000);
	cloudrot+=120;
}
function galaxyrotate(d){
	$('#galaxy1').animate(
    {
        myRotationProperty: d
    },
    {
        step: function(now, tween) {
            if (tween.prop === "myRotationProperty") {
                $(this).css('-webkit-transform','rotate('+now+'deg)');
                $(this).css('-moz-transform','rotate('+now+'deg)'); 
                // add Opera, MS etc. variants
                $(this).css('transform','rotate('+now+'deg)');  
            }
        }
    }, 1000);
	galaxyrot+=120;
}
function changequery(){
	//setTimeout(function(){$("#qline1").animate({left:-700},200)},600);
	setTimeout(function(){$("#query").animate({right:-700},200)},0);
	setTimeout(function(){nextquery()},200);
	setTimeout(function(){$("#query").animate({right:0},200)},200);
//setTimeout(function(){$("#qline1").animate({left:10},200,function(){$("#qline2").animate({left:10},200,function(){$("#qline3").animate({left:10},200);});});	},600);
	
}
function nextquery(){
	if(curr_query>6){curr_query=1;};
	switch(curr_query)
	{
		case 1:
			document.getElementById("query").innerHTML="choice of university ?";
			break;
		case 2:
			document.getElementById("query").innerHTML="choice of major ?";
			break;
		case 3:
			document.getElementById("query").innerHTML="course details ?";
			break;
		case 4:
			document.getElementById("query").innerHTML="competitive exams ?";
			break;
		case 5:
			document.getElementById("query").innerHTML="post-grad details ?";
			break;
		case 6:
			document.getElementById("query").innerHTML="programs abroad ?";
			break;
	};
	curr_query++;
	
}

function stickybounce(){
	setTimeout(function(){$("#sticky2").animate({top:-60},200)},0);
	setTimeout(function(){$("#sticky2").animate({top:-70},200)},200);
	
}
function galaxy1rotate(){
    var interval = null;    var counter = 0;    var $this = $(this);    clearInterval(interval);
 	interval = setInterval(function(){
        if (counter != 1) {
            counter -= 4;
            $("#galaxy1").css({
                MozTransform: 'rotate(-' + -counter + 'deg)',
                WebkitTransform: 'rotate(' + -counter + 'deg)',
                transform: 'rotate(' + -counter + 'deg)'
            });
        }
    }, 40);
};


var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
 
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, wheelScroll)
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, wheelScroll, false)