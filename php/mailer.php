<?php
    if (isset($_POST['submit'])) {
        $msg = 'Name: ' . $_POST['name'] . "\n"
            . 'Email: ' . $_POST['email'] . "\n"
            . 'Subject: ' . $_POST['subject'] . "\n"
            . 'Message: ' . $_POST['message'];
        mail('alexsmander@stu.aii.edu', 'Sample Contact Us Form', $msg);
        header('location: contact-thank-you.html')
    } else
        header('location: contact.html');
?>