<?php

header('Content-type: application/json');

include('config.php');




  $cat = $_POST['category'];
  $count = 1 ;
  $select = "SELECT * FROM cakes WHERE category='$cat'" ;
  $query = mysql_query($select);
			$numrows = mysql_num_rows($query);
  while($row =  mysql_fetch_assoc($query))
  {
  $name[$count] = $row['name'] ;
  $description[$count] = $row['description'] ;
  $price[$count] = $row['price'] ;
  $ingredients[$count] = $row['ingredients'] ;
  $image[$count] = $row['image'] ;
  $id[$count] = $row['id'] ;
  
  
  $count = $count + 1 ;
  
  }
  
  
  mysql_close($server_connect);
  
  print  json_encode(array('ncakes' => $numrows,'name' => $name,'description' => $description , 'price' => $price , 'ingredients' => $ingredients , 'image' => $image , 'id' => $id)) ;
  
?>