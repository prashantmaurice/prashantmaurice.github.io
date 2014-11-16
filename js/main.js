//-----------gallery big pics--------------------------------//
var sideswipeOpen = false;
$(document).ready(function() {
    console.log("document ready called");

    $("#navbutton-visualprojects").click(function(e){loadPage("visualprojectspage.php",e);});
    $("#navbutton-androidprojects").click(function(e){loadPage("androidprojectspage.php",e);});
    $("#navbutton-codeprojects").click(function(e){loadPage("codeprojectspage.php",e);});
    $("#navbutton-skills").click(function(e){loadPage("skillspage.php",e);});
    $("#navbutton-resume").click(function(e){loadPage("resumepage.php",e);});
    $("#navbutton-showreel").click(function(e){loadPage("showreelpage.php",e);});
    $("#navbutton-activity").click(function(e){loadPage("timelinepage.php",e);});
    $("#navbutton-aboutme").click(function(e){loadPage("aboutpage.php",e);});
    $("#navbutton-contact").click(function(e){loadPage("contactpage.php",e);});
    reloadFunctions();
    initSubSite();

});
function initSubSite(){
    var currpage = location.hash.substring(1).split('/')[0];
    var currsubnav = location.hash.substring(1).split('/')[1];
//    var page = location.hash.substring(1).split('/')[0];
    console.log("TEST="+currpage);
//    var project = location.hash.substring(1).split('-')[1];
    if(currpage!=""){
        $("ul li a[data-tag='"+currpage+"']")[0].click();
        console.log("CLICKED:"+currpage);console.log($("ul li a[data-tag='"+currpage+"']"));
    }
    if(project!=null){
        $("ul li [data-subnav='project"+project+"']")[0].click();
    }
}
function updateTracker(page,subnav){
//    console.log("ipdating tracker"+page+"="+subnav);
    var currpage = location.hash.substring(1).split('/')[0];
    var currsubnav = location.hash.substring(1).split('/')[1];
    if(currpage!=page) currsubnav = "";
    if(page!=null) currpage = page;
    if(subnav!=null) currsubnav = subnav;
    location.hash = currpage+"/"+currsubnav;
}
function reloadFunctions(){

    $('.cbp_tmlabel').click(function(e){
//        window.open($(e.currentTarget).data("link"), '_blank');
//        window.location.href = window.location.href+"#";

    });
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
        var apk = $(e.currentTarget).data("apk");
        var desc = $(e.currentTarget).data("desc");
        $('#androidProjectVideo').show();
        $('#mobileiframeWrapper').show();
        $('#apkfileLinkcont').css('display','table-cell');


        if(video==""){
            $('#androidProjectVideo').css('display','none');
        }
        if(link==""){
            $('#mobileiframeWrapper').css('display','none');
        }
        if(apk==""){
            $('#apkfileLinkcont').css('display','none');
        }
        $('#androidProjectVideo').attr('src',video);
        $('#androidProjectMobiframe').attr('src',link);
        $('#apkfileLinkcont a').attr('href', 'apks/'+apk);
        $('#mobileDescCont').html(desc);
        updateTracker(null,$(e.currentTarget).data("subnav"));
    });

    setwebpageIframeScales();
}
function loadPage(url,e){
//    var page = location.hash.substring(1).split('-')[0];
//    if(page!=$(e.target).data("tag"))location.hash = $(e.target).data("tag");
    updateTracker($(e.target).data("tag"),null);
    $('#loadingCont').show();
    console.log('clicked');
    $('.side-nav>li>a').removeClass('active');
    $(e.target).addClass('active');
    $.ajax({url:url,success:function(result){
        $("#page-wrapper").html(result);
        reloadFunctions();
        console.log('loaded');
        $('#loadingCont').hide();
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


