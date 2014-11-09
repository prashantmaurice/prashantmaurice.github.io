//-----------gallery big pics--------------------------------//
$(document).ready(function() {
    $("#navbutton-projects").click(function(e){loadPage("projectspage.php",e);})
    $("#navbutton-skills").click(function(e){loadPage("skillspage.php",e);})
    $("#navbutton-showreel").click(function(e){loadPage("showreelpage.php",e);})
    $("#navbutton-aboutme").click(function(e){loadPage("aboutpage.php",e);})
    $("#navbutton-contact").click(function(e){loadPage("contactpage.php",e);})
});
function loadPage(location,e){
    $('.side-nav>li>a').removeClass('active');
    $(e.target).addClass('active');
    $.ajax({url:location,success:function(result){
        $("#page-wrapper").html(result);
    }});
}
