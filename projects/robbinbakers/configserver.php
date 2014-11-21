<?php
	define("HOST","robbinbakers.db.11244566.hostedresource.com");
	define("USER","robbinbakers");
	define("PASSWORD","number1@Bakery");
	define("DATABASE","robbinbakers");
	define("TABLE","users");
	
	
	$server_connect=mysql_connect(HOST,USER,PASSWORD);
	if(!$server_connect){
		die ("connection failed");
	}
	
	$db_select=mysql_select_db(DATABASE,$server_connect);
	if(!$db_select){
		die ("db selection failed");
	}
?>