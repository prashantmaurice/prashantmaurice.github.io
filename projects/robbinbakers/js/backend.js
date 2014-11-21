 
 
 
 <!--    Front Page Order Box      Front Page Order Box     Front Page Order Box     Front Page Order Box    -->
 

   $(document).ready(function(){ 
    $("#cus").hover(function(){
  $("#cus").attr("width","80");
  $("#gall").attr("width","60");
  $("#cus2").css("font-size","14px");
  },
  function(){
  $("#cus").attr("width","70");
  $("#gall").attr("width","70");
  $("#cus2").css("font-size","10px");
});
   $("#gall").hover(function(){
  $("#gall").attr("width","80");
  $("#cus").attr("width","60");
  $("#gall2").css("font-size","14px");
  },
  function(){
  $("#gall").attr("width","70");
  $("#cus").attr("width","70");
  $("#gall2").css("font-size","10px");
});
   });

    
 
 
 
 <!--    Front Page Order Box      Front Page Order Box     Front Page Order Box     Front Page Order Box    -->
 
 
  <!-- Gallery    Gallery    Gallery    Gallery    Gallery    Gallery    -->
            
			
			function ordercakefinal(r){
				
				
				
				 $( "#galleryorder" ).dialog({ modal: true },{ width: 800 },{ title: "Order" },{ show:"explode"},{hide:"explode"});
				 
				 
				 
				 
				document.getElementById("galleryorder").innerHTML = "<br/><br/><table align='center' ><tr  ><td align='center' colspan = '2'><img style='box-shadow: 0 0 10px rgb(20, 20, 20);' width='200px' height='150px' src='"+cakedetails.image[r]+"'/><br/><br/></td></tr><tr><td colspan = '2' align='center' >"+cakedetails.name[r]+"<br/><br/></td></tr><tr><td><div class='form-horizontal'><input  type='text' id='galleryphone' placeholder='Phone Number'></div></td><td> <button  class='btn btn-primary' onClick='galleryorder("+r+")'>Order</button></td></tr></table><br/><br/><div id='galleryordermsg'></div><br/><br/>" ;
				
				
				if(userdetails != "notlogged")
		{
				document.getElementById("galleryphone").value = userdetails.phone ;
				
		}
				
				}
	
	function galleryorder(s)
	{
		$("#loading_gif").css("display","inline");
		
		var galleryorderphone = document.getElementById("galleryphone").value;
		
		
		$.post("galleryorder.php",
						{
						    phone:galleryorderphone,
							cakeid:cakedetails.id[s],
							cakename:cakedetails.name[s],
							
						},function(data) {
							
							$("#loading_gif").css("display","none");
							
							
							if(data.msg == "success")
							{
								document.getElementById("galleryordermsg").innerHTML = " &nbsp; Ordered successfully.We will call you soon." ;
								
							}
							
							else
							{
								document.getElementById("galleryordermsg").innerHTML = " &nbsp; An error occurred.Please try again " ;
								
							}
							
							
							});
		
		
		
	}
	
	
	

			
			
			
			
 <!-- Gallery    Gallery    Gallery    Gallery    Gallery    Gallery    -->
            
 
 
 
    
    <!--   Express Order    Express Order     Express Order     Express Order     Express Order       -->
	
	
	
	
	function expressorder()
	{
		
		var exporderphone = document.getElementById("exporderphone").value;
		
		if(exporderphone == "")
		
		{
			document.getElementById("expordermsg").innerHTML = " &nbsp; Enter Phone Number " ;
		}
		
		else
		{
			 $("#loading_gif").css("display","inline");
			
			$.post("exporder.php",
						{
						    phone:exporderphone,
							
						},function(data) {
							
							$("#loading_gif").css("display","none");
							
							
							if(data.msg == "success")
							{
								document.getElementById("expordermsg").innerHTML = " &nbsp; Ordered successfully.We will call you soon." ;
								
							}
							
							else
							{
								document.getElementById("expordermsg").innerHTML = " &nbsp; An error occurred.Please try again " ;
								
							}
							
							
							});
			
		}
		
	}
	
	
	
	
	
	 <!--   Express Order    Express Order     Express Order     Express Order     Express Order       -->
    
    
    <!--    Logout     Logout     Logout     Logout     Logout     Logout  -->


   
    
     
	
	 
	
	function logout()
	{
		$("#loading_gif").css("display","inline");
		
		$.post("logout.php",function(data) {
			
			$("#loading_gif").css("display","none");
			
			window.location.assign("index.php")
			
			});
		
	}
	
	
	
	 
    
    
    
    <!--    Logout     Logout     Logout     Logout     Logout     Logout  -->
    
    
    
    <!--   Profile Profile Profile Profile Profile Profile Profile             -->
    
    
     
	
	
	
	function closeprofile()
	{
		document.getElementById("profile_msg").innerHTML = "" ;
		$( "#profile_box" ).dialog("close");
	}
	function profileopen()
	
	{
		document.getElementById("profile_msg").innerHTML = "" ;
		document.getElementById("namesp_profile").value = userdetails.name ;
		document.getElementById("address_profile").value = userdetails.address ;
		document.getElementById("emailsp_profile").value = userdetails.email ;
		document.getElementById("phone_profile").value = userdetails.phone ;
		
		 $( "#profile_box" ).dialog({ modal: true },{ width: 800 },{ height: 700 },{ title: userdetails.name },{ show:"explode"},{hide:"explode"});
		 
		 $("#loading_gif").css("display","inline");
		 
		 $.post("orderhistory.php",function(data) {
			 
			 
			 $("#loading_gif").css("display","none");
			 
			 if(data.history != "")
			 {
			 
			document.getElementById("order_history").innerHTML = "<br> <legend>Previous Orders</legend> <br>" +data.history ;
			
			 }
			 
			 
			 }) ;
	}
	
	
	function saveprofile()
	
	{
		var name_profile = document.getElementById("namesp_profile").value ;
		var address_profile = document.getElementById("address_profile").value ;
		var phone_profile = document.getElementById("phone_profile").value ;
		
		
		if ((name_profile != "") && ( address_profile != "") && (phone_profile != ""))
		
		{ 
		
		$("#loading_gif").css("display","inline");
		
		$.post("profile.php",
						{
						    name:name_profile,
							address:address_profile,
							phone:phone_profile,
						},function(data) {
							
							$("#loading_gif").css("display","none");
							
							if (data.msg == "success")
							
							{
								userdetails = data ;
								
								document.getElementById("profile_msg").innerHTML = "Succesfully made changes to your profile" ;
								
								document.getElementById("profilebut").innerHTML = "Hi,"+userdetails.name ;
								
								$( "#profile_box" ).dialog( "option", "title", userdetails.name );
							}
							else
							{
								document.getElementById("profile_msg").innerHTML = "An error occurred.Please try again later.We are sorry for the inconvinience." ;
								
							}
							
						
							
							
						});
						
						
		}
		
		else
		{
			document.getElementById("profile_msg").innerHTML = "All fields are compulsory" ;
		}
	}
	
	 
    
    <!--   Profile Profile Profile Profile Profile Profile Profile             -->
    
    
    
    
    
    
    
    
    <!--  Login   Login   Login   Login   Login   Login   Login   Login   -->
    
     
	
	
	
    function login()
    {
      document.getElementById("loginmsg").innerHTML = "" ;
	  $( "#loginbox" ).dialog({ modal: true },{ width: 500 },{ title: "Login" },{ show:"explode"},{hide:"explode"});
    }
	
	function signup()
	{
		document.getElementById("signupmsg").innerHTML = "" ;
	  $( "#signupbox" ).dialog({ modal: true },{ width: 500 },{ title: "Sign Up" },{ show:"explode"},{hide:"explode"});
	}
	
	
	function signin()
	{
		document.getElementById("loginmsg").innerHTML = "" ;
		var usnameval = document.getElementById("inputEmail").value ;
	var pwdval = document.getElementById("inputPassword").value ;
	
	
	$("#loading_gif").css("display","inline");
	
		$.post("login.php",
						{
						    email:usnameval,
							password:pwdval,
						},function(data) {
							
							
							$("#loading_gif").css("display","none");
							
							if (data.msg == "success")
							{
								 document.getElementById("loginmsg").innerHTML = "Logged in successfully" ;
				
									userdetails = data ;
									$("#logsign").css("display","none");
									$("#profilelog").css("display","inline");
									document.getElementById("profilebut").innerHTML = "Hi,"+userdetails.name ;
								$( "#loginbox" ).dialog("close");
								
								document.getElementById("exporderphone").value = userdetails.phone ;
							
								
							}
							if (data.msg == "verifyemail")
							{
								 document.getElementById("loginmsg").innerHTML = "A veification link is sent your email.Please verify your account to login." ;
								
							}
							if (data.msg == "wrong")
							{
								 document.getElementById("loginmsg").innerHTML = "Authentication Failed" ;
								
							}
							if (data.msg == "not_found")
							{
								 document.getElementById("loginmsg").innerHTML = "Entered email is not registered with us.Please Sign UP" ;
								
							}
							if (data.msg == "invalid_email")
							{
								 document.getElementById("loginmsg").innerHTML = "Entered email is invalid" ;
								
							}
							
							});
	}
	
	function signupsp()
	{
		document.getElementById("loginmsg").innerHTML = "" ;
		var namesp = document.getElementById("namesp").value ;
	var address = document.getElementById("address").value ;
	var emailsp = document.getElementById("emailsp").value ;
	var psdsp = document.getElementById("psdsp").value ;
	var cnpsdsp = document.getElementById("cnpsdsp").value ;
	
	if ((namesp != "")&&(address != "")&&(emailsp != "")&&(psdsp != "")&&(cnpsdsp != ""))
	{
		if (psdsp == cnpsdsp)
		{
			
			$("#loading_gif").css("display","inline");
			
			$.post("signup.php",
						{
						    email:emailsp,
							password:psdsp,
							name:namesp,
							address:address,
							
						},function(data) {
							
							
							$("#loading_gif").css("display","none");
							
							
							if (data.msg == "success")
							{
								 document.getElementById("signupmsg").innerHTML = "Just one more step to complete the registration.Verify your account by clicking the link mailed to you." ;
				
								
								$( "#signupbox" ).dialog("close");
								 $( "#signupmsg" ).dialog({ modal: true },{ title: "Almost there !" },{hide:"explode"});
								
							}
							if (data.msg == "already")
							{
								 document.getElementById("signupmsg").innerHTML = "Entered email is already registered with us" ;
								
							}
							if (data.msg == "invalid_email")
							{
								 document.getElementById("signupmsg").innerHTML = "You have entered an invalid email address" ;
								
							}
							if (data.msg == "failed")
							{
								 document.getElementById("signupmsg").innerHTML = "Sorry,an error occured.Please try again" ;
								
							}
							
							});
		}
		else
		{
			document.getElementById("signupmsg").innerHTML = "Passwords does not match" ;
		}
	}
	else
	{
		document.getElementById("signupmsg").innerHTML = "All fields are compulsory" ;
	}
	

	
	}
	 
   
    <!--  Login   Login   Login   Login   Login   Login   Login   Login   -->
    
    
    
    
    
    
    
    
    
    <!--  Orders  Orders  Orders  Orders  Orders  Orders  Orders  Orders  Orders  -->
    
    
     
	function openorder()
	{
		
		document.getElementById("orstatmsg").innerHTML = "" ;
		$( "#orderbox" ).dialog({ modal: true },{ title: "Order" },{ width: 800},{ show:"explode"},{hide:"explode"});
		
		if(userdetails != "notlogged")
		{
			document.getElementById("bname").value = userdetails.name ;
			document.getElementById("bmobile").value = userdetails.phone ;
		    document.getElementById("baddress").value = userdetails.address ;
				
		}
		
	}
	function closeorder()
	{
		$( "#orderbox" ).dialog("close");
	}
	function order()
	{
							orname = document.getElementById("bname").value ;
							orphone = document.getElementById("bmobile").value ;
							oraddress = document.getElementById("baddress").value ;
							orsize = document.getElementById("size").value ;
							orflavour = document.getElementById("flavour").value ;
							orinscription = document.getElementById("insc").value ;
							ordeliverydate = document.getElementById("date").value ;
							orinscolor = document.getElementById("insccolor").value ;
							
							
							
							if ((ordeliverydate != "")&&(orphone != "")&&(orname != "")&&(oraddress != ""))
							{
							    	
					$("#loading_gif").css("display","inline");		
							
		$.post("order.php",
						{
						    name:orname,
							phone:orphone,
							address:oraddress,
							size:orsize,
							flavour:orflavour,
							inscription:orinscription,
							deliverydate:ordeliverydate,
							inscolor:orinscolor,
							
						},function(data) {
							
							$("#loading_gif").css("display","none");
							
							if (data.msg == "success")
							    {
								     document.getElementById("orstatmsg").innerHTML = "Successfully placed the order" ;
								}
								else
								{
									document.getElementById("orstatmsg").innerHTML = "Some error occured.Please try again.We are sorry for the inconvinience." ;
								}
							
							
							
							});
							}
							else
							{
								document.getElementById("orstatmsg").innerHTML = "Delivery Date,Name,Phone number,Address are compulsory" ;
							}
	}
	
	
	
	
	   <!--- Gallery Gallery Gallery Gallery Gallery  Gallery  --->
	   
	   var cakedetails = new Array() ;
	   
function loadgallery(abc)
{
	
	$("#loading_gif").css("display","inline");

		$.post("gallery.php",
						{
						    category:abc,
							
							
						},function(data) {
							
							cakedetails = data ;
							
							$("#loading_gif").css("display","none");
							
							
							
							reloadpics() ;
							
							
							});
	
}
   
   
   
   <!--- Gallery Gallery Gallery Gallery Gallery  Gallery  --->
   
   
   
   
	 
    
    
    <!--  Orders  Orders  Orders  Orders  Orders  Orders  Orders  Orders  Orders  -->
	
	

		
	$(document).ready(function(){
	
	$("#more_about").click(function(){
		
		
		$( "#more_aboutdesc" ).dialog({ modal: true },{ title: "About Us" },{ width: 800},{ show:"explode"},{hide:"explode"})
		
	});
	
	
		$("#careers_tab").click(function(){
		
		
		$( "#careers_desc" ).dialog({ modal: true },{ title: "Careers" },{ width: 800},{ show:"explode"},{hide:"explode"})
		
	});
	
	});
    
    