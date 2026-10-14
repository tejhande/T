/**
 * Portfolio JavaScript - Tejas Hande
 * Clean, accessible, performant interactions for the engineering portfolio.
 */

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", function () {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    const newExpanded = !isExpanded;

    hamburger.setAttribute("aria-expanded", String(newExpanded));
    menu.setAttribute("aria-hidden", String(!newExpanded));
    menu.classList.toggle("active", newExpanded);

    const hamIcon = hamburger.querySelector(".hamburger-icon");
    const crossIcon = hamburger.querySelector(".cross-icon");
    if (hamIcon && crossIcon) {
      hamIcon.style.display = newExpanded ? "none" : "inline-block";
      crossIcon.style.display = newExpanded ? "inline-block" : "none";
    }

    const menuLinks = menu.querySelectorAll("a.links");
    menuLinks.forEach((link) => {
      if (newExpanded) {
        link.removeAttribute("tabindex");
      } else {
        link.setAttribute("tabindex", "-1");
      }
    });
  });

  // Close menu on link click (mobile)
  const menuLinks = menu.querySelectorAll("a.links");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 820 && menu.classList.contains("active")) {
        menu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
        const hamIcon = hamburger.querySelector(".hamburger-icon");
        const crossIcon = hamburger.querySelector(".cross-icon");
        if (hamIcon && crossIcon) {
          hamIcon.style.display = "inline-block";
          crossIcon.style.display = "none";
        }
      }
    });
  });
}

// Project Dataset with category filtering, source links, and technologies
const projectsData = [
  {
    id: 13,
    title: "BioMonitor CBG Suite",
    category: "ai-data",
    categoryLabel: "Industrial AI & IoT",
    tags: ["MERN Stack", "Industrial IoT", "Predictive Analytics", "Process Automation"],
    description:
      "A comprehensive CBG plant intelligence system combining operational shift logs, laboratory chemical metrics, and live telemetry to optimize biogas yield and efficiency with AI-driven insights.",
    image: "images/cbg.webp",
    liveUrl: "https://cbg.quantumjet.co.in/",
    sourceUrl: null,
    isProprietary: true,
    sortOrder: 1,
    featured: true,
  },
  {
    id: 11,
    title: "QuantumJet KrishiOS",
    category: "ai-data",
    categoryLabel: "Agritech Intelligence",
    tags: ["React.js", "Python", "Satellite NDVI", "Soil Chemistry", "AI"],
    description:
      "Precision agritech platform delivering surgical fertilizer and crop care recommendations by synthesizing soil chemistry, satellite NDVI vegetation indices, and localized weather intelligence.",
    image: "images/KrishiOS.webp",
    liveUrl: "https://krishios.quantumjet.co.in/",
    sourceUrl: null,
    isProprietary: true,
    sortOrder: 2,
    featured: true,
  },
  {
    id: 15,
    title: "NetWorth",
    category: "fullstack",
    categoryLabel: "Fintech Dashboard",
    tags: ["MERN Stack", "Live Financial APIs", "Portfolio Tracking", "Security"],
    description:
      "A comprehensive wealth management and personal finance dashboard aggregating bank balances, credit card utilization, live mutual fund NAVs, stock holdings, and loan amortization schedules.",
    image: "images/Networth.webp",
    liveUrl: "https://bestnetworthtracker.vercel.app",
    sourceUrl: "https://github.com/tejhande",
    isProprietary: false,
    sortOrder: 3,
    featured: true,
  },
  {
    id: 12,
    title: "QuantumJet™ - Decentralized Synthesis",
    category: "ai-data",
    categoryLabel: "Patented Tech Platform",
    tags: ["Decentralized Tech", "Jet Loop Reactors", "CO₂-to-Value", "UI Architecture"],
    description:
      "Digital presence and control architecture for a patented Jet-Induced Synthesis Platform decentralizing chemical manufacturing with modular, CO₂-integrated synthesis units.",
    image: "images/QuantumJet.webp",
    liveUrl: "https://quantumjet.co.in",
    sourceUrl: null,
    isProprietary: true,
    sortOrder: 4,
    featured: true,
  },
  {
    id: 1,
    title: "OBFS - Agri Intelligence",
    category: "ai-data",
    categoryLabel: "Agritech & AI",
    tags: ["MERN", "Agri-Analytics", "Soil Data", "Recommendation Engine"],
    description:
      "Outcome-based digital agriculture system enabling farmers to optimize fertilization schedules and input costs based on real-time soil condition data and crop developmental stages.",
    image: "images/obfs.webp",
    liveUrl: "https://obfs.in",
    sourceUrl: null,
    isProprietary: true,
    sortOrder: 5,
    featured: true,
  },
  {
    id: 4,
    title: "Windspeed Food Ordering",
    category: "fullstack",
    categoryLabel: "Full-Stack Application",
    tags: ["React.js", "Node.js", "Cart State", "Payment Gateway", "REST APIs"],
    description:
      "A production-grade clothes and food commerce platform featuring live order workflows, cart state management, and payment gateway integration. Research published in an international engineering journal.",
    image: "images/bajarangi.webp",
    liveUrl: "https://bajarangi.vercel.app/",
    sourceUrl: "https://github.com/tejhande",
    isProprietary: false,
    sortOrder: 6,
    featured: true,
  },
  {
    id: 8,
    title: "Create React App",
    category: "opensource",
    categoryLabel: "Open Source Core",
    tags: ["React Ecosystem", "JavaScript", "Developer Tooling", "CI/CD"],
    description:
      "Merged contribution to Meta's create-react-app repository, diagnosing and solving template setup logic for thousands of developers across the React open-source ecosystem.",
    image: "images/create-react-app-logo.webp",
    liveUrl: "https://github.com/facebook/create-react-app/pull/17061",
    sourceUrl: "https://github.com/facebook/create-react-app/pull/17061",
    isProprietary: false,
    sortOrder: 7,
    featured: false,
  },
  {
    id: 9,
    title: "ScrapeGraph AI",
    category: "opensource",
    categoryLabel: "Open Source AI",
    tags: ["Python", "LLM Extraction", "Web Scraping", "Automated Pipelines"],
    description:
      "Active contributor to ScrapeGraph AI, an open-source Python library utilizing Large Language Models to automate resilient data scraping pipelines from unstructured web content.",
    image: "images/scrapegraph-ai-logo.webp",
    liveUrl: "https://github.com/ScrapeGraphAI/Scrapegraph-ai",
    sourceUrl: "https://github.com/ScrapeGraphAI/Scrapegraph-ai/commits/main/?author=tejhande",
    isProprietary: false,
    sortOrder: 8,
    featured: false,
  },
  {
    id: 2,
    title: "Kling Nuts E-Commerce",
    category: "fullstack",
    categoryLabel: "Brand Platform & SEO",
    tags: ["Web Architecture", "Performance", "Technical SEO", "Analytics"],
    description:
      "High-performance, SEO-optimized digital presence developed for premium FMCG brand Kling Nuts, achieving top search visibility and sub-second page delivery.",
    image: "images/Klingnuts.webp",
    liveUrl: "https://klingnuts.com",
    sourceUrl: null,
    isProprietary: true,
    sortOrder: 9,
    featured: false,
  },
  {
    id: 14,
    title: "Naturextrakte Fertilisers",
    category: "fullstack",
    categoryLabel: "Agri Business Platform",
    tags: ["HTML5", "CSS3", "JavaScript", "Technical SEO", "Conversion UX"],
    description:
      "Responsive, conversion-focused enterprise web portal built for an agricultural bio-fertilizers enterprise, prioritizing catalog browsing speed and mobile responsiveness.",
    image: "images/Naturextrakte.webp",
    liveUrl: "https://naturextraktefertilisers.in/",
    sourceUrl: null,
    isProprietary: true,
    sortOrder: 10,
    featured: false,
  },
  {
    id: 5,
    title: "Image Processing Tools",
    category: "tools",
    categoryLabel: "Browser Engineering",
    tags: ["JavaScript Canvas", "WebP", "Image Manipulation", "Client-Side"],
    description:
      "Client-side image processing utility suite performing client-side compression, format conversion (WebP), cropping, resizing, and collage generation directly in the browser with zero server roundtrips.",
    image: "images/webp.webp",
    liveUrl: "https://9images.vercel.app/",
    sourceUrl: "https://github.com/tejhande",
    isProprietary: false,
    sortOrder: 11,
    featured: false,
  },
  {
    id: 7,
    title: "Online Interactive Code Editor",
    category: "tools",
    categoryLabel: "Developer Tools",
    tags: ["JavaScript", "DOM Sandboxing", "Live Rendering", "Developer UX"],
    description:
      "Real-time sandboxed code editing platform that evaluates HTML, CSS, and JavaScript with instant live rendering in an isolated iframe environment.",
    image: "images/code.webp",
    liveUrl: "https://tejhande.github.io/CodeEditor/",
    sourceUrl: "https://github.com/tejhande/CodeEditor",
    isProprietary: false,
    sortOrder: 12,
    featured: false,
  },
  {
    id: 3,
    title: "Marsstrong International",
    category: "fullstack",
    categoryLabel: "Corporate Engineering",
    tags: ["UI Architecture", "Responsive Design", "Cross-Browser", "Internship"],
    description:
      "Corporate web platform engineered during software internship at Marsstrong International, standardizing brand communication and multi-device performance.",
    image: "images/marsstrong.webp",
    liveUrl: "https://marsstrong.biz",
    sourceUrl: "https://github.com/tejhande/Marsstrong",
    isProprietary: false,
    sortOrder: 13,
    featured: false,
  },
  {
    id: 6,
    title: "Insta Login Security Tool",
    category: "tools",
    categoryLabel: "Browser Extension",
    tags: ["Chrome Extension API", "Session Auth", "Security Engineering"],
    description:
      "A developer utility Chrome extension demonstrating automated session cookie authentication handling and secure tab synchronization.",
    image: "images/extension-preview.webp",
    liveUrl: "assets/insta.html",
    sourceUrl: "https://github.com/tejhande/InstaTejasLog",
    isProprietary: false,
    sortOrder: 14,
    featured: false,
  },
  {
    id: 10,
    title: "GitHub Contributions & Lab",
    category: "opensource",
    categoryLabel: "Open Source Journey",
    tags: ["Git", "System Design", "Open Source", "Algorithms"],
    description:
      "Complete public code footprint across data structures, system design explorations, automation scripts, and collaborative repository pull requests.",
    image: "images/github-contributions.webp",
    liveUrl: "https://github.com/tejhande",
    sourceUrl: "https://github.com/tejhande",
    isProprietary: false,
    sortOrder: 15,
    featured: false,
  },
];

let activeCategory = "all";
let showAllProjects = false;

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = projectsData
    .filter((project) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "featured") return project.featured;
      return project.category === activeCategory;
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const displayList = showAllProjects || activeCategory !== "all" 
    ? filtered 
    : filtered.slice(0, 6);

  container.innerHTML = displayList
    .map((project) => {
      const tagHtml = project.tags
        .map((tag) => `<span class="proj-tag">${tag}</span>`)
        .join("");

      const demoLink = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="proj-btn proj-btn-primary" aria-label="Visit live demo for ${project.title}">
            <i class="fas fa-external-link-alt" aria-hidden="true"></i> Live Demo
          </a>`
        : "";

      const sourceLink = project.sourceUrl
        ? `<a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" class="proj-btn proj-btn-secondary" aria-label="View source code for ${project.title}">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>`
        : project.isProprietary
        ? `<span class="proj-badge-proprietary" title="Enterprise/Proprietary codebase">
            <i class="fas fa-shield-alt" aria-hidden="true"></i> Proprietary
          </span>`
        : "";

      return `
        <article class="proj-card" data-category="${project.category}">
          <div class="proj-media">
            <img src="${project.image}" alt="${project.title} screenshot" loading="lazy" width="400" height="220" />
            <span class="proj-category-badge">${project.categoryLabel}</span>
          </div>
          <div class="proj-body">
            <h3 class="proj-title">${project.title}</h3>
            <p class="proj-desc">${project.description}</p>
            <div class="proj-tags" aria-label="Technologies used">${tagHtml}</div>
            <div class="proj-actions">
              ${demoLink}
              ${sourceLink}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Update Show More / Show Less Button state
  const toggleBtn = document.getElementById("toggle-projects-btn");
  if (toggleBtn) {
    if (activeCategory !== "all" || filtered.length <= 6) {
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "inline-flex";
      toggleBtn.innerHTML = showAllProjects
        ? `<i class="fas fa-chevron-up" aria-hidden="true"></i> Show Less`
        : `<i class="fas fa-chevron-down" aria-hidden="true"></i> Show All (${filtered.length} Projects)`;
      toggleBtn.setAttribute("aria-expanded", String(showAllProjects));
    }
  }
}

// Category filter button handlers
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");
      activeCategory = this.getAttribute("data-filter") || "all";
      renderProjects();
    });
  });

  const toggleBtn = document.getElementById("toggle-projects-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      showAllProjects = !showAllProjects;
      renderProjects();
    });
  }
}

// Smooth scrolling for navigation links
function setupSmoothScroll() {
  const links = document.querySelectorAll('a.links, a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 80;
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset - navOffset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Set focus for accessibility
          targetElement.setAttribute("tabindex", "-1");
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });
}

// Back to Top button
function setupBackToTop() {
  const goTopBtn = document.getElementById("goTopBtn");
  if (!goTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 300) {
        goTopBtn.style.display = "flex";
      } else {
        goTopBtn.style.display = "none";
      }
    },
    { passive: true }
  );

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact form handling with feedback states
function setupContactForm() {
  const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("form-status");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", async function (e) {
    // Fill hidden subject line with submitter name
    const nameInput = form.querySelector('input[name="name"]');
    const subjectInput = document.getElementById("subject");
    if (nameInput && subjectInput) {
      subjectInput.value = `Portfolio Contact: ${nameInput.value}`;
    }

    // Modern asynchronous submit with loading state
    e.preventDefault();
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...`;

    if (formStatus) {
      formStatus.textContent = "";
      formStatus.className = "form-status-message";
    }

    try {
      const formData = new FormData(form);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();
      if (response.status === 200 && data.success) {
        form.reset();
        if (formStatus) {
          formStatus.textContent = "Thank you! Your message has been sent successfully. I will get back to you shortly.";
          formStatus.classList.add("success");
        }
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = "Unable to submit message right now. Please email directly at tejasamolhande@gmail.com";
        formStatus.classList.add("error");
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// Service worker registration
function registerServiceWorker() {
  if ("serviceWorker" in navigator && (window.location.protocol === "https:" || window.location.hostname === "localhost")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("Scripts/service-worker.js")
        .catch((error) => console.log("Service Worker registration notice:", error));
    });
  }
}

// GitHub Calendar Initialization
function initGitHubCalendar() {
  if (typeof GitHubCalendar === "function") {
    try {
      GitHubCalendar(".calendar", "tejhande", {
        responsive: true,
        global_stats: false,
        tooltips: true,
      });
    } catch (e) {
      console.log("GitHub calendar notice:", e);
    }
  }
}

// Document Ready Bootstrap
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  setupProjectFilters();
  setupSmoothScroll();
  setupBackToTop();
  setupContactForm();
  registerServiceWorker();
  initGitHubCalendar();
});
