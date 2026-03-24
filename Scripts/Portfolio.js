const OFFLINE_URL = "assets/off.html";
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  const hamIcon = this.querySelector(".hamburger-icon");
  const crossIcon = this.querySelector(".cross-icon");
  const menuLinks = menu.querySelectorAll("a.links"); 

  if (hamIcon.style.display === "none") {
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
    crossIcon.style.display = "none";
    menu.setAttribute("aria-hidden", "true");
    menuLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
  } else {
    crossIcon.style.display = "inline-block";
    hamIcon.style.display = "none";
    menu.style.display = "block";
    menu.setAttribute("aria-hidden", "false");
    menuLinks.forEach((link) => link.removeAttribute("tabindex"));
  }
});

const projectsData = [
  {
    id: 1,
    title: "OBFS - Agri Intelligence",
    category: "Agri-Tech + MERN + AI",
    description: "An outcome-based digital agriculture system helping farmers optimize fertilizer usage based on soil data, crop stage, and weather conditions and much more..",
    image: "images/obfs.webp",
    link: "https://obfs.in",
    sortOrder: 1,
    featured: true
  },
  {
    id: 2,
    title: "Kling Nuts Website",
    category: "WordPress + Elementor + SEO",
    description: "A responsive and SEO-optimized website built for the premium peanut butter brand Kling Nuts, focusing on brand visibility and performance.",
    image: "images/Klingnuts.webp",
    link: "https://klingnuts.com",
    sortOrder: 2,
    featured: true
  },
  {
    id: 3,
    title: "Marsstrong International",
    category: "HTML + CSS + JavaScript",
    description: "A modern landing page built for Marsstrong International during my internship, focusing on clean UI and responsiveness.",
    image: "images/marsstrong.webp",
    link: "https://marsstrong.biz",
    sortOrder: 3,
    featured: true
  },
  {
    id: 4,
    title: "Clothes Ordering Website",
    category: "MERN Stack",
    description: "Windspeed is a production-grade full-stack clothes delivery system, also published in an international research journal.",
    image: "images/bajarangi.webp",
    link: "https://bajarangi.vercel.app/",
    sortOrder: 4,
    featured: true
  },
  {
    id: 5,
    title: "Image Processing Tools",
    category: "HTML + CSS + JavaScript",
    description: "A web-based tool offering multiple image operations like crop, rotate, resize, enlarge, cartoonize, convert to WebP, and create collages.",
    image: "images/webp.webp",
    link: "https://9images.vercel.app/",
    sortOrder: 5,
    featured: true
  },
  {
    id: 6,
    title: "Insta Login: No 2FA, No Password",
    category: "JavaScript, Chrome Extension API",
    description: "A Chrome extension that logs into Instagram using session cookies, bypassing the need for manual entry of credentials.",
    image: "images/extension-preview.webp",
    link: "assets/insta.html",
    sortOrder: 6,
    featured: true
  },
  {
    id: 7,
    title: "Online Code Editor",
    category: "HTML + CSS + JavaScript",
    description: "A live code editor that takes HTML, CSS, and JavaScript input and instantly renders the output on the same page.",
    image: "images/code.webp",
    link: "https://tejhande.github.io/CodeEditor/",
    sortOrder: 7,
    featured: false
  },
  {
    id: 8,
    title: "Create React App",
    category: "Open Source Contribution",
    description: "Contributed to the widely used Create React App repository, helping improve the React ecosystem.",
    image: "images/create-react-app-logo.webp",
    link: "https://github.com/facebook/create-react-app/pull/17061",
    sortOrder: 8,
    featured: false
  },
  {
    id: 9,
    title: "ScrapeGraph AI",
    category: "Open Source Contributor",
    description: "Active contributor to ScrapeGraph AI, an open-source library for automated web scraping using LLMs.",
    image: "images/scrapegraph-ai-logo.webp",
    link: "https://github.com/ScrapeGraphAI/Scrapegraph-ai/commits/main/?author=tejhande",
    sortOrder: 9,
    featured: false
  },
  {
    id: 10,
    title: "GitHub Profile",
    category: "Open Source Portfolio",
    description: "Explore my complete open-source journey, including contributions, repositories, and technical experiments.",
    image: "images/github-contributions.webp",
    link: "https://github.com/tejhande",
    sortOrder: 10,
    featured: false
  }
];

function renderProjects() {
  const featuredContainer = document.querySelector(".T-portfolio-content");
  if (!featuredContainer) return;

  const rows = featuredContainer.querySelectorAll(".T-my-row, #more-projects");
  rows.forEach(row => row.remove());

  const sortedProjects = [...projectsData].sort((a, b) => a.sortOrder - b.sortOrder);
  const featuredProjects = sortedProjects.filter(p => p.featured);
  const otherProjects = sortedProjects.filter(p => !p.featured);

  const createCard = (project) => `
    <div class="T-my-col">
      <div class="T-my-card1 T-back T-port-card">
        <div class="T-image">
          <a href="${project.link}" target="_blank" rel="noopener">
            <img src="${project.image}" alt="${project.title}" />
          </a>
        </div>
        <div class="T-cardBelowImg">
          <h3 class="T-greet-heading T-blue-text">${project.title}</h3>
          <p class="T-small-para T-blue-text category-label"><strong>${project.category}</strong></p>
          <p class="T-small-para T-blue-text">${project.description}</p>
        </div>
      </div>
    </div>
  `;

  const createRows = (projects) => {
    let html = "";
    for (let i = 0; i < projects.length; i += 3) {
      const rowProjects = projects.slice(i, i + 3);
      html += `<div class="T-my-row">${rowProjects.map(createCard).join("")}</div>`;
    }
    return html;
  };

  const featuredHtml = createRows(featuredProjects);
  const showMoreBtnContainer = featuredContainer.querySelector(".text-center"); // Target the container inside portfolio
  if (showMoreBtnContainer) {
    showMoreBtnContainer.insertAdjacentHTML("beforebegin", featuredHtml);

    const moreProjectsContainer = document.createElement("div");
    moreProjectsContainer.id = "more-projects";
    moreProjectsContainer.style.display = "none";
    moreProjectsContainer.innerHTML = createRows(otherProjects);
    showMoreBtnContainer.insertAdjacentHTML("beforebegin", moreProjectsContainer.outerHTML);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects();

  // Initialize GitHub Calendar
  if (typeof GitHubCalendar === "function") {
    GitHubCalendar(".calendar", "tejhande", {
      responsive: true,
      global_stats: false,
      tooltips: true
    });
  }
  
  const menu = document.querySelector(".menu");
  const menuLinks = menu.querySelectorAll("a.links");

  if (menu.style.display === "none" || window.getComputedStyle(menu).display === "none") {
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
  var fileName = "assets/TejasHande_Fresher_MERN.pdf";
  var ans = confirm(`Downloading Resume`);
  if (ans == true) {
    resumeLink.setAttribute("download", fileName);
    return true;
  } else {
    resumeLink.removeAttribute("download");
    resumeLink.setAttribute("href", fileName);
    return false;
  }
}

const originalTitle = document.title;
const changedTitle = "Please Come Back🫣!";

function handleVisibilityChange() {
  if (document.hidden) {
    document.title = changedTitle;
  } else {
    document.title = originalTitle;
  }
}

function redirectTo404() {
  window.location.href = "assets/off.html";
}

function handleOnlineStatusChangeIndex() {
  if (!navigator.onLine) {
    redirectTo404();
  }
}

window.addEventListener("offline", handleOnlineStatusChangeIndex);
handleOnlineStatusChangeIndex();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("Scripts/service-worker.js")
      .catch((error) => console.error("Error registering Service Worker:", error));
  });
}

window.addEventListener("online", () => {
  window.location.href = "/";
});

window.addEventListener("offline", () => {
  window.location.href = OFFLINE_URL;
});

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

const goTopBtn = document.getElementById("goTopBtn");
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

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("show-more").addEventListener("click", function () {
  var moreProjects = document.getElementById("more-projects");
  var showMoreBtn = document.getElementById("show-more");

  if (moreProjects.style.display === "none") {
    moreProjects.style.display = "block";
    showMoreBtn.innerHTML = `Show Less <div class="star star-1"></div><div class="star star-2"></div><div class="star star-3"></div><div class="star star-4"></div><div class="star star-5"></div><div class="star star-6"></div>`;
  } else {
    moreProjects.style.display = "none";
    showMoreBtn.innerHTML = `Show More <div class="star star-1"></div><div class="star star-2"></div><div class="star star-3"></div><div class="star star-4"></div><div class="star star-5"></div><div class="star star-6"></div>`;
  }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  var name = document.querySelector('input[name="name"]').value;
  document.getElementById("subject").value = name;
});
