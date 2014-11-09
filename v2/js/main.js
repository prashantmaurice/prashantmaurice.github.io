//-----------gallery big pics--------------------------------//
var sideswipeOpen = false;
$(document).ready(function() {
    $("#navbutton-projects").click(function(e){loadPage("projectspage.php",e);})
    $("#navbutton-skills").click(function(e){loadPage("skillspage.php",e);})
    $("#navbutton-showreel").click(function(e){loadPage("showreelpage.php",e);})
    $("#navbutton-aboutme").click(function(e){loadPage("aboutpage.php",e);})
    $("#navbutton-contact").click(function(e){loadPage("contactpage.php",e);})
    $('.mix').click(function(e){
        showSideswipe();
    })
    $("#sideswipe-shadow").click(function(e){
        hideSideswipe();
    })
});
function loadPage(location,e){
    $('.side-nav>li>a').removeClass('active');
    $(e.target).addClass('active');
    $.ajax({url:location,success:function(result){
        $("#page-wrapper").html(result);
    }});
}
function showShadow(){
    $("#sideswipe-shadow").css("display","block").animate({opacity:0.6},400);
}
function hideShadow(){
    $("#sideswipe-shadow").animate({opacity:"0"},400,function(){
        $("#sideswipe-shadow").css("display","none");
    });
}
function showSideswipe(){
    showShadow();
    $('#sideswipe-content').animate({
        left: "400"
    }, {
        duration: 400,
        specialEasing: {
            left: "swing"
        },
        complete:function(){
        }
        });
}
function hideSideswipe(){
    hideShadow();
    $('#sideswipe-content').animate({
        left: "100%"
    }, {
        duration: 400,
        specialEasing: {
            left: "swing"
        },
        complete:function(){
        }
    });
}
