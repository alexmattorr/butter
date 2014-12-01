<?php
/*	mysql_connect("localhost", 'root', 'root');
	$name = mysql_real_escape_string($_POST['name']);

	if($name==NULL)
		echo "Please enter a project name!";
	else {
		$age = mysql_query("SELECT age FROM database.project WHERE name='$name'");
		$age_num_rows = mysql_num_rows($age);
		if ($age_num_rows==0)
			echo "Project does not exist!";
		else {
			$age = mysql_result($age, 0);
			echo "$name's age is $age";
		}
	}*/
	mysql_connect("localhost", 'root', 'root');

	$name = mysql_real_escape_string($_POST['name']);
	$progress = mysql_query("SELECT progress FROM database.project WHERE name='$project_name'");
	$progress_num_rows = mysql_num_rows($progress);

	echo $progress_num_rows;
?>