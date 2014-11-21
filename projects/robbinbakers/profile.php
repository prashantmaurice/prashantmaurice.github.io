<?php

header('Content-type: application/json');
session_start();
include('config.php');


	$name = $_POST['name'];
  	$phone = $_POST['phone'];
	$address = $_POST['address'];

	
	
		
		
		
		$select = "UPDATE users SET name='".$name."' , phone ='".$phone."' ,address = '".$address."'
WHERE email = '".$_SESSION['email']."'" ;
		$query = mysql_query($select);
		
		if($query)
		{
			$_SESSION['name'] = $name ;
			$_SESSION['phone'] = $phone ;
			$_SESSION['address'] = $address ;
			
			$msg = "success" ;
		}
		else
		{
			$msg = "failed" ;
		}
		
		
		
		mysql_close($server_connect);
	
	
	print  json_encode(array('msg' => $msg, 'name' => $_SESSION['name'], 'email' => $_SESSION['email'],'phone' => $_SESSION['phone'],'address' => $_SESSION['address']));

?>