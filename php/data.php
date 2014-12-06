<?php
	$connection = mysqli_connect('localhost', 'root', 'root', 'database');
    if (!$connection) {
        die("Database connection failed: " . mysql_error());
    }
?>