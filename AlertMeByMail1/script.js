// script.js

// Function to send email
function sendEmail(subject, body) {
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ subject, body })
    })
      .then(response => console.log("Email sent successfully!"))
      .catch(error => console.error("Error sending email:", error));
  }
  
  // Add event listener to clickButton
  document.getElementById("clickButton").addEventListener("click", function() {
    fetch("/track-click")
      .then(response => console.log("Click tracked successfully!"))
      .catch(error => console.error("Error tracking click:", error));
  });
  
  // Add event listeners to LinkedIn and GitHub links
  document.getElementById("linkedinLink").addEventListener("click", function(event) {
    event.preventDefault();
    sendEmail("LinkedIn Link Clicked", "Someone clicked on your LinkedIn link!");
  });
  
  document.getElementById("githubLink").addEventListener("click", function(event) {
    event.preventDefault();
    sendEmail("GitHub Link Clicked", "Someone clicked on your GitHub link!");
  });
  
  