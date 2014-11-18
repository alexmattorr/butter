<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = 'alexmsmander@stu.aii.edu'; 
			
    $body = "From: $name\n E-Mail: $email\n Subject: $subject\n Message:\n $message";
				
    if ($_POST['submit']) {				 
        if (mail ($name, $email, $subject, $message)) { 
	    echo '<p>Your message has been sent!</p><br /><a href="../index.html">Click here to go back.</a>';
	} else { 
	    echo '<p>Something went wrong, <a href="../index.html">go back</a> and try again!</p>'; 
		}	 
    }
?>