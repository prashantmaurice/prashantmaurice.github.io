<?php


header('Content-type: application/json');
session_start();
include('config.php');

$name = $_POST['name'] ;
$phone = $_POST['phone'] ;
$address = $_POST['address'] ;
$size = $_POST['size'] ;
$flavour = $_POST['flavour'] ;
$inscription = $_POST['inscription'] ;
$deliverydate = $_POST['deliverydate'] ;
$inscolor = $_POST['inscolor'] ;




if(isset($_SESSION['email']))

{


$email = $_SESSION['email'] ;

$insert = "INSERT INTO orders (name,phone,address,size,flavour,inscription,inscolor,deliverydate,ordertype,email)
			VALUES('$name','$phone','$address','$size','$flavour','$inscription','$inscolor','$deliverydate','0','$email')";

}

else
{
$insert = "INSERT INTO orders (name,phone,address,size,flavour,inscription,inscolor,deliverydate,ordertype)
			VALUES('$name','$phone','$address','$size','$flavour','$inscription','$inscolor','$deliverydate','0')";

}
			
			$query=mysql_query($insert);
			
			if(!$query){
				
				$msg = "failed";
			}
			else{
				$msg = "success" ;
			}
			
			print  json_encode(array('msg' => $msg));
?>