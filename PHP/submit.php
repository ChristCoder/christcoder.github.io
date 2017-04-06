<?php

$fname = $_POST["firstname"];
$lname = $_POST["lastname"];
$email = $_POST["email"];
$comment = $_POST["comment"];
$from = "From: ChristCoder";
$to = "chirstcoder@outlook.com";
$subject = "Website Contact";

$body = "From: $fname $lname\n E-Mail: $email\n Message: $comment";

if ($_POST["submit"]) {
  if (mail($to, $subject, $body, $from)) {
    echo "Your message has been sent!";
  } else {
    echo "Error!";
  }
}


//header("location: http://localhost/MyWebsite/Web/contact.html"); 

?>