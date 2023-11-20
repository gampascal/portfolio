<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "gampascaljoel@gmail.com"; // Change this to your email address
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
} else {
  http_response_code(403);
}
?>
