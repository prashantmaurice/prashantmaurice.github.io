//-----------gallery big pics--------------------------------//
var sideswipeOpen = false;
$(document).ready(function() {
    reloadFunctions();
});
function reloadFunctions(){
    $("#navbutton-visualprojects").click(function(e){loadPage("visualprojectspage.php",e);})
    $("#navbutton-codeprojects").click(function(e){loadPage("codeprojectspage.php",e);})
    $("#navbutton-skills").click(function(e){loadPage("skillspage.php",e);})
    $("#navbutton-showreel").click(function(e){loadPage("showreelpage.php",e);})
    $("#navbutton-aboutme").click(function(e){loadPage("aboutpage.php",e);})
    $("#navbutton-contact").click(function(e){loadPage("contactpage.php",e);})
    $('.mix').click(function(e){
        showSideswipe(e);
    });
    $("#sideswipe-shadow").click(function(e){
        hideSideswipe();
    });
    $(".codeProject").click(function(e){
        $('.codeProject').removeClass('active');
        $(e.target).addClass('active');
        var link = $(e.currentTarget).data("link");
        $('#scaled-frame').attr('src',link)
    });
    $('#mobileiframeWrapper').width($('#mobileiframeWrapper').height()*0.50);
    $(".androidProject").click(function(e){
        $('.androidProject').removeClass('active');
        $(e.target).addClass('active');
        var link = $(e.currentTarget).data("link");
        var video = $(e.currentTarget).data("video");
        $('#androidProjectVideo').show();
        $('#mobileiframeWrapper').show();
        if(video==""){
            $('#androidProjectVideo').css('display','none');
        }
        if(link==""){
            $('#mobileiframeWrapper').css('display','none');
        }
        $('#androidProjectVideo').attr('src',video);
        $('#androidProjectMobiframe').attr('src',link);
    });

    setwebpageIframeScales();
}
function loadPage(location,e){
    $('.side-nav>li>a').removeClass('active');
    $(e.target).addClass('active');
    $.ajax({url:location,success:function(result){
        $("#page-wrapper").html(result);
        reloadFunctions();
    }});
}
function loadSideSwipe(e){
    var projectId = $(e.currentTarget).data("value");
    var location = "sideSwipeProject.php?projectId="+projectId;
    $.ajax({url:location,success:function(result){
        $("#sideswipe").html(result);
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
function showSideswipe(e){
    showShadow();
    loadSideSwipe(e);
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
function setwebpageIframeScales(){
    var width = $('#iframeWrapper').width();
    $('#iframeWrapper').height(width/1.77);
    var factor = width/1000;
    $('#scaled-frame').css('height',1000/1.77);
    $('#scaled-frame').css('zoom',1);
    $('#scaled-frame').css('-moz-transform','scale('+factor+')');
    $('#scaled-frame').css('-o-transform','scale('+factor+')');
    $('#scaled-frame').css('-webkit-transform','scale('+factor+')');

}

