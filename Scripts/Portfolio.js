const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  const hamIcon = this.querySelector(".hamburger-icon");
  const crossIcon = this.querySelector(".cross-icon");
  if (hamIcon.style.display === "none") {
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
    crossIcon.style.display = "none";
  } else {
    crossIcon.style.display = "inline-block";
    hamIcon.style.display = "none";
    menu.style.display = "block";
  }
});

function form_submit(event) {
  event.preventDefault();
  var form = document.getElementById("myForm");
  if (form.checkValidity()) {
    window.location.href = "success.html";
  } else {
    alert("Please fill out all required fields correctly.");
  }

  return false;
}

function goToResume() {
  var resumeLink = document.getElementById("resumeLink");
  var fileName = "assets/Resume.pdf"; // Adjust the file name as needed

  var ans = confirm(`Downloading Resume`);
  if (ans == true) {
    // Proceed with download
    resumeLink.setAttribute("download", fileName);
    return true; // Allow the default action (download)
  } else {
    // Cancel the download and open the resume in the browser
    resumeLink.removeAttribute("download");
    resumeLink.setAttribute("href", fileName); // Set href attribute to the file name
    return false; // Prevent the default action (download)
  }
}

var pageTitle = document.getElementById("documentTitle");
var originalTitle = pageTitle.textContent;

function handleVisibilityChange() {
  if (document.hidden) {
    // Change document title when the tab is hidden
    pageTitle.textContent = "Please Come Back🫣!";
  } else {
    // Restore original document title when the tab is visible again
    pageTitle.textContent = originalTitle;
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange);


document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.links');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        var offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Tejas Hande
// tejasamolhande@gmail.com
// 8600828734