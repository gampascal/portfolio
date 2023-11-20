document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure the POST request
  xhr.open('POST', 'send_email.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Send the request with form data
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById('statusMessage').textContent = 'Message sent successfully!';
    } else {
      document.getElementById('statusMessage').textContent = 'Failed to send message.';
    }
  };

  // Send form data as URL-encoded string
  xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
});
