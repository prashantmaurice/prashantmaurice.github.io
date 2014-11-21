<?php

header('Content-type: application/json');
session_start();
include('config.php');


	$name = $_POST['name'];
  	$email = $_POST['email'];
	$address = $_POST['address'];
	$password = $_POST['password'];
	$hashed_password = sha1($password);
	
	if(filter_var($email,FILTER_VALIDATE_EMAIL)){
		
		
		
		$select = "SELECT * FROM users WHERE email='$email'";
		$query = mysql_query($select);
		$numrows = mysql_num_rows($query);
		
		if($numrows != 0){
			$msg = "already";
		}
		else{
			$conf_code = md5(uniqid(rand()));
			$insert = "INSERT INTO users (name,email,password,conf_code,address)
			VALUES('$name','$email','$hashed_password','$conf_code','$address')";
			$query=mysql_query($insert);
			
			if(!$query){
				$msg = "failed";
			}
			else{
				
				$to = $email;
				$sub = "Verify your email address";
				$msg4 = '<html><body><div id="email" style="font-family: century gothic;font-size: 16px;">
							<p>Hi '.$name.',</p>
							<p>Thank you for signing up for Robbinbakers. Please click the "Verify" button below to verify your email id. </p>
							
							<a href="http://robbinbakers.com/website/login.php?conf_code='.$conf_code.'" target="_blank" style="padding: 5px 20px;background: #28b7ed;margin: 20px 40px;color: white;font-size: 25px;text-decoration: none;border-radius:5px;">Verify</a>
							<p style="font-size:12px;">Please ignore this mail if you did not sign up for Robbinbakers.</p
										
							<p>Thanking you,<br/>
							Robbinbakers</p>
                            <p style="color:#28b7ed;" >We design your dreams <br/>
                            Find us at <a href = "http://robbinbakers.com" >Robbinbakers</p>
							
						</div></body></html>';
							
				$headers = "From:Robbinbakers <contact@robbinbakers.com>\r\n";
				$headers .= "MIME-Version: 1.0\r\n";
				$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
				mail($to,$sub,$msg4,$headers);
				$msg = "success";
			}
		}
		mysql_close($server_connect);
	}
	else{
		$msg = "invalid_email";
	}
	
	print  json_encode(array('msg' => $msg));

?>