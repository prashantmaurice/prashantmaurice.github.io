<?php

header('Content-type: application/json');
session_start();
include('config.php');


$orderhistory = "" ;

$query = "select * from orders where ordertype = 0 AND email = '".$_SESSION['email']."' "  ;

$numresults=mysql_query($query);
 $numrows=mysql_num_rows($numresults);
 
 if($numrows != 0)
 {
	 $orderhistory = $orderhistory."<table border='1' cellpadding='5' style='background:white;border:10px solid #E9E9E9 ;' align='center' >
<tr>
<th>Ordered On</th>
<th>Size</th>
<th>Flavour</th>
<th>Inscription</th>
<th>Inscription Color</th>
<th>Delivery Date</th>
</tr>" ;

while($row = mysql_fetch_array($numresults))
  {
  $orderhistory = $orderhistory. "<tr>";
  $orderhistory = $orderhistory. "<td>" . $row['ordertime'] . "</td>";
  $orderhistory = $orderhistory. "<td>" . $row['size'] . "</td>";
  $orderhistory = $orderhistory. "<td>" . $row['flavour'] . "</td>";
  $orderhistory = $orderhistory. "<td>" . $row['inscription'] . "</td>";
  $orderhistory = $orderhistory. "<td>" . $row['inscolor'] . "</td>";
  $orderhistory = $orderhistory. "<td>" . $row['deliverydate'] . "</td>";
  $orderhistory = $orderhistory. "</tr>";
  }
$orderhistory = $orderhistory. "</table>";



 }
 
 
 
$query1 = "select * from orders where ordertype = 2 AND email = '".$_SESSION['email']."' "  ;

$numresults1=mysql_query($query1);
 $numrows1=mysql_num_rows($numresults1);
 
 if($numrows1 != 0)
 {
	 $orderhistory = $orderhistory."<table border='1' cellpadding='5' style='background:white;border:10px solid #E9E9E9 ;' align='center' >
<tr>
<th>Ordered On</th>
<th>Cake Name</th>


</tr>" ;

while($row1 = mysql_fetch_array($numresults1))
  {
  $orderhistory = $orderhistory. "<tr>";
   $orderhistory = $orderhistory. "<td>" . $row1['ordertime'] . "</td>";
  $orderhistory = $orderhistory. "<td>" . $row1['cakename'] . "</td>";
 
 
  $orderhistory = $orderhistory. "</tr>";
  }
$orderhistory = $orderhistory. "</table>";



 }
 
 
 
 
 $query2 = "select * from orders where ordertype = 1 AND email = '".$_SESSION['email']."' "  ;

$numresults2=mysql_query($query2);
 $numrows2=mysql_num_rows($numresults2);
 
 if($numrows2 != 0)
 {
	 $orderhistory = $orderhistory."You ordered through Express checkout on <p style='color:blue;'>" ;

while($row2 = mysql_fetch_array($numresults2))
  {
 
  $orderhistory = $orderhistory."<br>".$row2['ordertime'] ;
 
  }

    $orderhistory = $orderhistory. "</p>"  ;



 }
 
 print  json_encode(array('history' => $orderhistory )) ;
 

?>