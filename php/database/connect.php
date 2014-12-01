<?php
	$connect_error = 'Sorry, we are experiencing connection issues.';
	mysql_connect('localhost', 'root', 'root') or die($connect_error);
	mysql_select_db('phplogin') or die($connect_error);
?>