<?php
	define("HOST","localhost");
	define("USER","root");
	define("PASSWORD","");
	define("DATABASE","robbin");
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