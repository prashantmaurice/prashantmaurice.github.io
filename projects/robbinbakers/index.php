<?php session_start(); 

echo "<script> var session = ".isset($_SESSION['email'])."; </script>" ;

?>




<!DOCTYPE html>
<html>
<head>

  <!-- Ravi Kanth   Ravi Kanth   Ravi Kanth  Ravi Kanth  Ravi Kanth  Ravi Kanth  -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="css/ui-lightness/jquery-ui-1.10.3.custom.css" rel="stylesheet">
    
     	<script type="text/javascript" src="./js/jquery.js"></script>
    	<script src="js/bootstrap.min.js"></script>
    	<script src="js/jquery-ui-1.10.3.custom.js"></script>
     	<script src="js/backend.js"></script>
   <script>
   
	
	 var userdetails ;
	   
	if ( session )
	
	{
		  
		
		userdetails = <?php echo  json_encode(array( 'name' => $_SESSION['name'], 'email' => $_SESSION['email'],'phone' => $_SESSION['phone'],'address' => $_SESSION['address']));  ?> ;
		
		$(document).ready(function(){
		
		                            $("#logsign").css("display","none");
									$("#profilelog").css("display","inline");
									document.getElementById("profilebut").innerHTML = "Hi,"+userdetails.name ;
									document.getElementById("exporderphone").value = userdetails.phone ;
		});
	}
	else
	{
		userdetails = "notlogged" ;
	}
	
	</script>
    
    <!--
    
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script>
      function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
      google.maps.event.addDomListener(window, "load", initialize);
    </script>
    
    -->
    
    
    
  <!-- Ravi Kanth   Ravi Kanth   Ravi Kanth  Ravi Kanth  Ravi Kanth  Ravi Kanth  -->

  <title>Welcome to Robbin bakers</title>
  <link href = "./base_templates/css/bootstrap.css"  rel = "stylesheet" type = "text/css"/>
  <link href = "./css/landing.css"  rel = "stylesheet" type = "text/css"/>
 
  <script type="text/javascript" src="./js/jquery_mousewheel.js"></script>
  <script type="text/javascript" src="./js/landing.js"></script>
</head>
<body>



<!--   Ravi Kanth  Ravi Kanth   Ravi Kanth   Ravi Kanth  Ravi Kanth  Ravi Kanth  -->

<div id="loading_gif" style="z-index: 2001; background-color: #F93; height: 100%; width: 100%; position: fixed; top: 0%; opacity: 0.7; left: 0px; display:none;"><img src="img/loading.gif" style="width: 60px;top: 48%;  left: 48%;position: fixed;"></div>


<!--   Ravi Kanth  Ravi Kanth   Ravi Kanth   Ravi Kanth  Ravi Kanth  Ravi Kanth  -->



	<div id = "container">
        	
              <div id="wipeleft" class="wipe"><img src="img/wipe.png"/></div>
              <div id="wiperight" class="wipe"><img src="img/wipe.png"/></div>
              <div id = "contents">
              	<div id="bg" class="mainbg"></div>
                   	<div id = "slide1" class = "slide"> 
                     	<div id="formcontainer" class="texthead1">
                        		<legend>Express Order</legend>
                            	<span  id="orderdetails">Just give your phone number.Our chef will call you and takes the order</span>
                                	<div class="form-horizontal">
  						<div class="control-group">
  						<br/>
    						<input id="exporderphone" type="text"  placeholder='Phone Number' rows="4" cols="50"> <span id="expordermsg" style=" font-size: medium; color:red; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif;" ><br>
  						</div>
                                          <div class="control-group">
    							<button class="btn btn-warning" onClick="expressorder()">Submit</button>  
  						</div>
					</div>
                                	<!-- <div id="missedcall"><span style=" font-size:20px">Or just give us a missed call@</span><br><br><span style=" font-size:56px">99406-30272</span></div>
                                   </div> 
                                   <div id="custom" class="formtabs"></div>
                                   <div id="fromgallery" class="formtabs"></div>-->
                                   
                                    <table style="margin:auto; font-family:Arial; font-size:16px;" >
                                    	<tr><td><button onClick="openorder()" > <img id="cus" style="border-radius:0.5em; cursor:pointer;" src="custom.jpg" width="70px" /> </button></td><td>&nbsp;</td><td><button> <img id="gall" src="gallery.jpg" style="border-radius:0.5em; cursor:pointer;" width="70px" /> </button></td></tr>
                                    	<tr><td id="cus2" width="80px" style="font-size:10px;cursor:pointer;">Customized order</td><td>&nbsp;&nbsp;&nbsp;</td><td width="80px" id="gall2" style="font-size:10px;cursor:pointer;">Popular Cakes</td></tr>
                                    </table>
                        	</div>
                   	</div>
              	<div id = "slide2" class = "slide">
                     	<div id="categories">
                            	<div id="cate1" class="categorystyle" >marriage</div>
                                   <div id="cate2" class="categorystyle">birthday</div>
                                   <div id="cate3" class="categorystyle">party</div>
                                   <div id="cate4" class="categorystyle">official</div>
                                   <div id="cat1" class="categorystylehigh">marriage</div>
                                   <div id="cat2" class="categorystylehigh">birthday</div>
                                   <div id="cat3" class="categorystylehigh">party</div>
                                   <div id="cat4" class="categorystylehigh">official</div>
                            </div>
                            <div id="slide3bg"></div>
                            <div id="picholder">
                           <!-- <script>
                            	for (var i=1;i <= k; i++)
					{
						document.getElementById("picholder").innerHTML = document.getElementById("picholder").innerHTML + "<div id = ' a" +i+"' class='picindividualbase'><div id = ' b" +i+"' class='picindividualdetails'></div><div class='picindividual'> <img  class='cakespics' src='cakes/cake_a1.jpg'/></div><input type='checkbox' style='position:absolute;z-index:5; left:200px;top:0px;' /></div>"
									    <!-- document.getElementById("picholder").innerHTML = document.getElementById("picholder").innerHTML + "<div id = ' b" +i+"' class='picindividualdetails'></div>"
					}
 				</script>-->
                            </div>
                    	</div>
                     <div id = "slide4" class = "slide">
                            <div class="slide5heading">STAY IN TOUCH</div>
                            <div id="map_canvas"><iframe width="600" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=+&amp;q=guntur&amp;ie=UTF8&amp;hq=&amp;hnear=Guntur&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=16.29851,80.433647&amp;output=embed"></iframe><br /><small><a href="https://www.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=+&amp;q=guntur&amp;ie=UTF8&amp;hq=&amp;hnear=Guntur&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=16.29851,80.433647" style="color:white;text-align:left">View Larger Map</a></small></div>
                            <div id="address">shop#210<br/>main road<br/>guntur<br/>sabertoothmaurice@gmail.com</div>
                              <div id="links">
                                   <a href=" https://www.facebook.com/syncwits1"><div id="facebook"><img id="facebookimg" src="img/facebook.png"/></div></a>
                                   <a href="https://twitter.com/syncwits"><div id="twitter"><img id="twitterimg" src="img/twitter.png"/></div></a>
                              </div>
                              <div id="additional"><span id="more_about">>MORE ABOUT US</span></br></br><span id="careers_tab">>CAREERS</span></div>
                   </div>
              </div>
              <div id="pointer"></div>		
              <div id = "footer">       	
			<table border="0" id="footerdata"  align="center" height="90%" width="80%"  >
                     	<tr >
                     		<th class="tabledatahead1">welcome!</th>
                     		<th class="tabledatahead1"  align="center" >todays special</th>
                      	</tr>
                            <tr height="10px">
                     		<th class="tabledatahead2">SHORT ABOUT US</th>
                     		<th class="tabledatahead2">LADIES SPECIAL</th>
                      	</tr>
                            <tr height="90%">
                     		<th class="tabledata" align="center"  style="border-right-style:solid ;  padding-right:15px ;  border-right-color:rgb(46,7,22); border-bottom-width:thin;" >We aim to give all our cakes a wow factor by offering a personalized service that allows the customer to create their perfect cake. We allow them to choose everything from the flavor, size, colour, scheme, we get to the option to add your own text, message, onto the top of the cakes. </th>
                     		<th class="tabledata"  >
                                   	
                                          	<table align="center"><tr><td><img src="img/todaypic.jpg"  /></td></tr></table>
                                        
                                   </th>
                      	</tr>
                      </table>
                      <div id="footerbgline"></div>
              </div>
              <div id = "topblack">       	
              </div>
              <div id = "toporange">
              	<div id="aboutid" class="index" align="center">ABOUT</div>
                	<div id="menuid" class="index">CAKES</div>
                     <div id="contactsid" class="index">CONTACTS</div>
                     
                     <!--<div id = "maps">
                          <div id="line1" class="line" ></div>
                          <div id="line2" class="line" ></div>
                          <div id="line3" class="line" ></div>
                          <div id="map1" class = "mapsingle"></div>
                          <div id="map2" class = "mapsingle"></div>
                          <div id="map3" class = "mapsingle"></div>
                          <div id="map4" class = "mapsingle"></div>
                     </div> -->
                     <!--------------------------------------------------------------------------------------------------------->
                     
       <!--   Ravi Kanth    Ravi Kanth  Ravi Kanth  Ravi Kanth   Ravi Kanth   Ravi Kanth  -->
                     
                     <div style="left:80%; position:absolute; padding-top:15px ;">
            <!--  Login   Login   Login   Login   Login   Login   Login   Login   -->
    
    <div id="logsign" >
    
    <button class="btn btn-warning" onClick="login()">&nbsp; Login &nbsp;</button>   <button class="btn btn-warning" onClick="signup()">Sign Up</button>
    
    </div>
    
    <div id="loginbox" style="display:none ;">
    <div class="form-horizontal">
  <div class="control-group">
  <br/>
    <label class="control-label" for="inputEmail">Email</label>
    <div class="controls">
      <input type="text" id="inputEmail" placeholder="Email">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="inputPassword">Password</label>
    <div class="controls">
      <input type="password" id="inputPassword" placeholder="Password">
    </div>
  </div>
  <div class="control-group">
    <div class="controls">
      
      <button  class="btn btn-primary" onClick="signin()">Sign in</button> <button  class="btn btn-danger">Forgot Password</button>
    </div>
  </div>
</div>

<div id="loginmsg"></div>
 </div>
 
 
 
 <div id="signupbox" style="display:none ;">
    <div class="form-horizontal">
  <div class="control-group">
  <br/>
    <label class="control-label" for="namesp">Name</label>
    <div class="controls">
      <input type="text" id="namesp" placeholder="Your good name">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="address">Address</label>
    <div class="controls">
      <input  type="text" id="address" placeholder="Postal Address">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="emailsp">Email ID</label>
    <div class="controls">
      <input  type="text" id="emailsp" placeholder="Email address">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="psdsp">Password</label>
    <div class="controls">
      <input  type="text" id="psdsp" placeholder="Password">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="cnpsdsp">Confirm Password</label>
    <div class="controls">
      <input  type="text" id="cnpsdsp" placeholder="Re-enter password">
    </div>
  </div>
  <div class="control-group">
    <div class="controls">
      
      <button  class="btn btn-primary" onClick="signupsp()">Sign Up</button>
    </div>
  </div>
</div>

<div id="signupmsg"></div>
 </div>
 
 
 
 <!--  Login   Login   Login   Login   Login   Login   Login   Login   -->
 
 
 
 <!-- Profile  Profile  Profile  Profile  Profile  Profile  Profile  Profile  -->
 
 
 <div style="display:none" id="profilelog">
 <button class="btn btn-warning" id = "profilebut" onClick="profileopen()">Name</button>   <button class="btn btn-warning" onClick="logout()">Log Out</button>
 
 </div>
 
 
 <div id="profile_box" style="display:none; ">
 
 <legend>Edit Profile</legend>
 
  <div class="form-horizontal">
  <div class="control-group">
  <br/>
    <label class="control-label" for="namesp_profile">Name</label>
    <div class="controls">
      <input type="text" id="namesp_profile" placeholder="Your good name">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="phone_profile">Phone</label>
    <div class="controls">
      <input  type="text" id="phone_profile" placeholder="Phone Number">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="address_profile">Address</label>
    <div class="controls">
      <input  type="text" id="address_profile" placeholder="Postal Address">
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="emailsp_profile">Email ID</label>
    <div class="controls">
      <input  type="text" id="emailsp_profile" placeholder="Email address" disabled >
    </div>
  </div>
  
  <div class="control-group">
    <div class="controls">
      
      <button  class="btn btn-primary" onClick="saveprofile()">Save</button> <button  class="btn btn-danger" onClick="closeprofile()">Cancel</button>
    </div>
  </div>
</div>



<div id="profile_msg"></div>
 
 
  <div id="order_history"> </div>
  
  
 </div>
 
 
 
 

  
 <!-- Profile  Profile  Profile  Profile  Profile  Profile  Profile  Profile  -->
 
 
 
 
 
 <!-- ORDERS  ORDERS  ORDERS  ORDERS  ORDERS  ORDERS  ORDERS  ORDERS  ORDERS  -->
 

 
 
 <div id="orderbox" style="display:none">
 
 <legend>Cake Details</legend>
 
 
  <div class="form-horizontal">
  <div class="control-group">
    <label class="control-label" for="size">Size
    </label>
    <div class="controls">
     <select id="size">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
    </select>
    
    </div>
     </div>
     <div class="control-group">
    <label class="control-label" for="flavour">Cake Flavour
    </label>
    <div class="controls">
     <select id="flavour">
  <option value="sponge cake">Sponge Cake</option>
  <option value="rich fruit cake">Rich Fruit Cake</option>
  <option value="novelity cake">Novelity Cake</option>
    </select>
    
    </div>
  </div>
  
  <div class="control-group">
    <label class="control-label" for="insc">Inscription
    </label>
    <div class="controls">
     <input type="text" id="insc" placeholder="Maximum 30 characters" title="Leave empty if inscription not needed">
    
    </div>
  </div>
  
  <div class="control-group">
    <label class="control-label" for="insccolor">Inscription Colour
    </label>
    <div class="controls">
     <select id="insccolor">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
    </select>
    
    </div>
  </div>
  
  
 
  
  </div>
  
  
 
 
 
  <legend>Delivery Details</legend>
  
  
  
  <script>
  
  $(function() {
    $( "#date" ).datepicker();
  });
  
  $.datepicker.setDefaults({
  showOn: "both",
  buttonImageOnly: true,
  buttonImage: "img/calendar.jpg",
  buttonText: "Calendar"
});

  </script>
 
  
 
 
  
  
  
  <div class="form-horizontal">
  
  
  
  <div class="control-group">
    <label class="control-label" for="date">Delivery Date</label>
    <div class="controls">
      <input  type="text" id="date" placeholder="Cake Delivery Date">
    </div>
  </div>
  
  
  <div class="control-group">
    <label class="control-label" for="bname">Name</label>
    <div class="controls">
      <input  type="text" id="bname" placeholder="Name" >
    </div>
  </div>
  
  <div class="control-group">
    <label class="control-label" for="bmobile">Phone Number</label>
    <div class="controls">
      <input  type="text" id="bmobile" placeholder="Phone" title="Our Chef calls you and confirms the order." >
    </div>
  </div>
  
  
  
  <div class="control-group">
    <label class="control-label" for="baddress">Delivery Address</label>
    <div class="controls">
     <textarea rows="4" id = "baddress" placeholder="Address for cake delivery"></textarea>
    </div>
  </div>
  
  <div class="control-group">
    <div class="controls">
      
      <button  class="btn btn-primary" onClick="order()">Order</button> <button  class="btn btn-primary" onClick="closeorder()">Cancel</button>
    </div>
  </div>
  
 </div>
 <div id="orstatmsg" >  </div>
 </div>
 			</div>
            
            <!-- Gallery    Gallery    Gallery    Gallery    Gallery    Gallery    -->
            
            <div style="display:none;" id="galleryorder">
            
            
            </div>
            
            <div id="more_aboutdesc" style="display:none;"></div>
            <div style="display:none;" id="careers_desc"></div>
            
            
             <!-- Gallery    Gallery    Gallery    Gallery    Gallery    Gallery    -->
            
            
            <!--   Ravi Kanth    Ravi Kanth  Ravi Kanth  Ravi Kanth   Ravi Kanth   Ravi Kanth  -->
            
            
                     <!--------------------------------------------------------------------------------------------------------------->
              </div>
	</div>
       
      
</body>
</html>