<?php
	mysql_connect("localhost", 'root', 'root');
	$name = mysql_real_escape_string($_POST['name']);

	if($name==NULL)
		echo "Please enter a name!";
	else {
		$age = mysql_query("SELECT age FROM database.people WHERE name='$name'");
		$age_num_rows = mysql_num_rows($age);
		if ($age_num_rows==0)
			echo "Name does not exist!";
		else {
			$age = mysql_result($age, 0);
			echo "$name's age is $age";
		}
	}
?>