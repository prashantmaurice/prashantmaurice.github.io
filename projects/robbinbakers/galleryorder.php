<?php


header('Content-type: application/json');
session_start();
include('config.php');


$phone = $_POST['phone'] ;
$cakename = $_POST['cakename'] ;
$cakeid = $_POST['cakeid'] ;


if(isset($_SESSION['email']))

{




$name = $_SESSION['name'] ;

$address = $_SESSION['address'] ;

$email = $_SESSION['email'] ;




$insert = "INSERT INTO orders (name,phone,address,email,ordertype,cakename,cakeid)
			VALUES('$name','$phone','$address','$email','2','$cakename','$cakeid')";
			
			
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
	


$insert = "INSERT INTO orders (phone,ordertype,cakename,cakeid)
			VALUES('$phone','2','$cakename','$cakeid')";
			
			
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