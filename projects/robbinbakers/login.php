<?php

header('Content-type: application/json');
session_start();
include('config.php');




  $email = $_POST['email'];
  $password = $_POST['password'];
  $hashed_password = sha1($password);
		
		
		if(filter_var($email,FILTER_VALIDATE_EMAIL)){
			$select = "SELECT * FROM users WHERE email='$email'";
			$query = mysql_query($select);
			$numrows = mysql_num_rows($query);
			
			if($numrows != 0){
				$fetch = mysql_fetch_assoc($query);
				if($hashed_password == $fetch['password']){
					if($fetch['confirmed'] == 1){
						
						$_SESSION['email'] = $fetch['email'];
						$_SESSION['name'] = $fetch['name'];
						$_SESSION['address'] = $fetch['address'];
						$_SESSION['phone'] = $fetch['phone'];
						
						
						$msg = "success";
					}
					elseif($fetch['confirmed'] == 0){
						$conf_code = $fetch['conf_code'];
						
						$to = $fetch['email'];
						$sub = "Verify your email address";
						$msg4 = '<html><body><div id="email" style="font-family: century gothic;font-size: 16px;">
									<p>Hi '.$fetch['name'].',</p>
									<p>Thank you for signing up for Robbinbakers. Please click the "Verify" button below to verify your email id.</p>
									<a href="http://robbinbakers.com/website/login.php?conf_code='.$conf_code.'" target="_blank" style="padding: 5px 20px;background: #28b7ed;margin: 20px 40px;color: white;font-size: 25px;text-decoration: none;border-radius:5px;">Verify</a>
									<p style="font-size:12px;">Please ignore this mail if you did not sign up for Robbinbakers.</p
											
									<p>Thanking you,<br/>
									Robbinbakers <br/>
									
									</p>
								</div></body></html>';
								
						$headers = "From:Robbinbakers <contact@robbinbakers.com>\r\n";
						$headers .= "MIME-Version: 1.0\r\n";
						$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
						mail($to,$sub,$msg4,$headers);
						$msg3 = 'Just one more step. Please check your mail <span style="color:green;">('.$email.')</span> to verify your email address.';
						$msg = "verifyemail";
					}
					
				}
				else{
					$msg = "wrong";
				}
			}
			else{
				$msg = "not_found";
			}
		}
		else{
			$msg = "invalid_email";
		}


mysql_close($server_connect);

  	print  json_encode(array('msg' => $msg, 'name' => $_SESSION['name'], 'email' => $_SESSION['email'],'phone' => $_SESSION['phone'],'address' => $_SESSION['address']));

?>