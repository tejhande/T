const OFFLINE_URL = "assets/off.html";
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  const hamIcon = this.querySelector(".hamburger-icon");
  const crossIcon = this.querySelector(".cross-icon");
  const menuLinks = menu.querySelectorAll("a.links"); // Select all focusable links in the menu

  if (hamIcon.style.display === "none") {
    // Menu is currently open, close it
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
    crossIcon.style.display = "none";
    menu.setAttribute("aria-hidden", "true"); // Hide from assistive tech
    menuLinks.forEach((link) => link.setAttribute("tabindex", "-1")); // Make links non-focusable
  } else {
    // Menu is currently closed, open it
    crossIcon.style.display = "inline-block";
    hamIcon.style.display = "none";
    menu.style.display = "block";
    menu.setAttribute("aria-hidden", "false"); // Show to assistive tech
    menuLinks.forEach((link) => link.removeAttribute("tabindex")); // Make links focusable
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuLinks = menu.querySelectorAll("a.links");

  if (
    menu.style.display === "none" ||
    window.getComputedStyle(menu).display === "none"
  ) {
    menu.setAttribute("aria-hidden", "true");
    menuLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
  } else {
    menu.setAttribute("aria-hidden", "false");
    menuLinks.forEach((link) => link.removeAttribute("tabindex"));
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
  var fileName = "assets/TejasHande_Fresher_MERN.pdf"; // Adjust the file name as needed

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

// Define variables to store original and changed titles
const originalTitle = document.title;
const changedTitle = "Please Come Back🫣!";

// Function to handle visibility change
function handleVisibilityChange() {
  // Check if the document is hidden
  if (document.hidden) {
    // Change document title when the tab is hidden
    document.title = changedTitle;
  } else {
    // Restore original document title when the tab is visible again
    document.title = originalTitle;
  }
}

// Function to redirect to the 404 page if the user is offline
function redirectTo404() {
  window.location.href = "assets/off.html";
}

// Function to handle online status change
function handleOnlineStatusChangeIndex() {
  // Check if the browser is now offline
  if (!navigator.onLine) {
    // Redirect to the 404 page
    redirectTo404();
  }
}

// Listen for the 'offline' event
window.addEventListener("offline", handleOnlineStatusChangeIndex);

// Call handleOnlineStatusChangeIndex once to check if the user is offline when the script loads
handleOnlineStatusChangeIndex();

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("Scripts/service-worker.js")
      // .then(() => console.log("Service Worker registered"))
      .catch((error) =>
        console.error("Error registering Service Worker:", error)
      );
  });
}

window.addEventListener("online", () => {
  // Redirect the user to the index page when they come back online
  window.location.href = "/";
});

window.addEventListener("offline", () => {
  // Show the "you're offline" page when the user goes offline
  window.location.href = OFFLINE_URL;
});

// Add event listener for visibility change
document.addEventListener("visibilitychange", handleVisibilityChange);

document.addEventListener("visibilitychange", handleVisibilityChange);

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".links");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href");
      var targetElement = document.querySelector(targetId);

      if (targetElement) {
        var offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Get the button
const goTopBtn = document.getElementById("goTopBtn");

let isTouching = false;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

// Add touch event listeners to detect if the user is touching the display
window.addEventListener(
  "touchstart",
  function () {
    isTouching = true;
  },
  { passive: true }
);

window.addEventListener(
  "touchend",
  function () {
    isTouching = false;
  },
  { passive: true }
);

// When the user clicks on the button, scroll to the top of the document with smooth animation
goTopBtn.addEventListener("click", smoothScrollToTop);

function smoothScrollToTop() {
  if (isTouching) return;

  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

// Tejas Hande
// tejasamolhande@gmail.com
// 8600828734

document.getElementById("show-more").addEventListener("click", function () {
  var moreProjects = document.getElementById("more-projects");
  var showMoreBtn = document.getElementById("show-more");

  if (moreProjects.style.display === "none") {
    moreProjects.style.display = "block";
    showMoreBtn.textContent = "Show Less";
  } else {
    moreProjects.style.display = "none";
    showMoreBtn.textContent = "Show More";
  }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Get the value of the name input field
  var name = document.querySelector('input[name="name"]').value;

  // Update the subject field dynamically
  document.getElementById("subject").value = name;
});
