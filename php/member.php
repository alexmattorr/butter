<?php
	session_start();
	if ($_SESSION['username']) {
		echo "Welcome, ".$_SESSION['username'] . "!";
		echo "<br><a href='logout.php'>logout</a>";	
	} else {
		die("You must log in!");
	}
?>