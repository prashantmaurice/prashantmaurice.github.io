<?php


header('Content-type: application/json');
session_start();
include('config.php');


$phone = $_POST['phone'] ;

if(isset($_SESSION['email']))

{




$name = $_SESSION['name'] ;

$address = $_SESSION['address'] ;

$email = $_SESSION['email'] ;




$insert = "INSERT INTO orders (name,phone,address,email,ordertype)
			VALUES('$name','$phone','$address','$email','1')";
			
			
			$query=mysql_query($insert);
			
			if(!$query){
				
				$msg = "failed";
			}
			else{
				$msg = "success" ;
			}
			
			print  json_encode(array('msg' => $msg));

}

else
{
	


$insert = "INSERT INTO orders (phone,ordertype)
			VALUES('$phone','1')";
			
			
			$query=mysql_query($insert);
			
			if(!$query){
				
				$msg = "failed";
			}
			else{
				$msg = "success" ;
			}
			
			print  json_encode(array('msg' => $msg));
	
	
}




?>