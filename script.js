(() => {
  "use strict";

  const CONFIG = {
    profileName: "kaizen",

    quotes: [
      { text: "Not everyone deserves an explanation.", color: "#1abc9c" },
      { text: "Quiet people notice everything.", color: "#9b59b6" },
      { text: "You don't have to be everywhere to matter.", color: "#3498db" },
      { text: "The wrong ones always leave at the right time.", color: "#e67e22" },
      { text: "Be careful who you trust twice.", color: "#e74c3c" },
      { text: "Not lost, just not where you expected.", color: "#f39c12" },
      { text: "Some things fix themselves when you stop forcing them.", color: "#2ecc71" },
      { text: "You already know what you need to do.", color: "#5dade2" }
    ],

    socialLinks: [
      {
        href: "https://www.facebook.com/bakitmokinopycrushmokonoh",
        title: "Facebook",
        path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      },
      {
        href: "https://github.com/kaizenmeow1",
        title: "GitHub",
        path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      }
    ],

    aboutText: "I love making scripts and turning ideas into real working projects. I focus on game scripting, backend APIs, database-powered systems, automation, and modern websites/web apps with clean UI and smooth user experience.",

    skills: [
      { name: "Lua", detail: "game scripting, client systems, and gameplay tools" },
      { name: "JavaScript", detail: "interactive websites, browser logic, and app features" },
      { name: "Node.js", detail: "Express APIs, backend routes, auth flows, and server logic" },
      { name: "Databases", detail: "connect APIs to stored data for real app features" },
      { name: "Python", detail: "build APIs, automation scripts, and backend utilities" },
      { name: "Next.js", detail: "modern websites and web apps with responsive UI" }
    ],

    projects: [
      {
        name: "Anime Streaming Website",
        detail: "modern anime watch site concept with clean pages and responsive layout"
      },
      {
        name: "Survive the Apocalypse Script",
        detail: "Roblox Lua scripting project for gameplay tools and client features"
      },
      {
        name: "Facebook Automation Boost",
        detail: "automation project focused on repeatable browser actions and workflow speed"
      }
    ]
  };

  const state = {
    currentQuoteIndex: 0,
    currentCharIndex: 0,
    isDeleting: false,
    isPaused: false
  };

  const $ = (id) => document.getElementById(id);

  const elements = {
    themeToggle: $("themeToggle"),
    profileName: $("profileName"),
    quoteText: $("quoteText"),
    typingQuote: $("typingQuote"),
    socialIcons: $("socialIcons"),
    aboutText: $("aboutText"),
    skillsList: $("skillsList"),
    projectsList: $("projectsList")
  };

  function hasElements(...names) {
    return names.every((name) => Boolean(elements[name]));
  }

  function createLucideIcon(name) {
    const iconEl = document.createElement("i");
    iconEl.setAttribute("data-lucide", name);
    iconEl.setAttribute("aria-hidden", "true");
    return iconEl;
  }

  function createBrandSvg(pathData) {
    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.setAttribute("class", "brand-icon");
    svgEl.setAttribute("viewBox", "0 0 24 24");
    svgEl.setAttribute("fill", "currentColor");
    svgEl.setAttribute("aria-hidden", "true");

    const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathEl.setAttribute("d", pathData);

    svgEl.appendChild(pathEl);
    return svgEl;
  }

  function refreshLucideIcons() {
    if (!window.lucide) return;

    window.lucide.createIcons({
      attrs: {
        "stroke-width": 2.35
      }
    });
  }

  function initTheme() {
    if (!elements.themeToggle) return;

    const themeStorageKey = "themePreference";
    const getSavedTheme = () => localStorage.getItem(themeStorageKey);
    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
    };

    localStorage.removeItem("theme");
    localStorage.removeItem("themeOverride");
    applyTheme(getSavedTheme() || "light");

    elements.themeToggle.addEventListener("click", () => {
      document.body.classList.add("theme-transitioning");

      window.setTimeout(() => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        applyTheme(nextTheme);
        localStorage.setItem(themeStorageKey, nextTheme);

        window.setTimeout(() => {
          document.body.classList.remove("theme-transitioning");
        }, 600);
      }, 150);
    });
  }

  function renderProfileName() {
    if (!elements.profileName) return;

    elements.profileName.textContent = "";

    const nameTextEl = document.createElement("span");
    nameTextEl.textContent = CONFIG.profileName;

    const badgeEl = document.createElement("span");
    badgeEl.className = "verified-badge";
    badgeEl.setAttribute("role", "img");
    badgeEl.setAttribute("aria-label", "Verified");
    badgeEl.title = "Verified";

    badgeEl.appendChild(createLucideIcon("check"));
    elements.profileName.append(nameTextEl, badgeEl);
  }

  function renderSocialLinks() {
    if (!elements.socialIcons) return;

    elements.socialIcons.textContent = "";

    CONFIG.socialLinks.forEach((link) => {
      const anchorEl = document.createElement("a");
      anchorEl.href = link.href;
      anchorEl.target = "_blank";
      anchorEl.rel = "noopener noreferrer";
      anchorEl.className = "social-icon";
      anchorEl.title = link.title;
      anchorEl.setAttribute("aria-label", link.title);

      anchorEl.appendChild(createBrandSvg(link.path));
      elements.socialIcons.appendChild(anchorEl);
    });
  }

  function renderAbout() {
    if (elements.aboutText) {
      elements.aboutText.textContent = CONFIG.aboutText;
    }

    if (!elements.skillsList) return;

    elements.skillsList.textContent = "";

    CONFIG.skills.forEach((skill) => {
      const skillEl = document.createElement("article");
      skillEl.className = "skill-item";

      const nameEl = document.createElement("div");
      nameEl.className = "skill-name";
      nameEl.textContent = skill.name;

      const detailEl = document.createElement("div");
      detailEl.className = "skill-detail";
      detailEl.textContent = skill.detail;

      skillEl.append(nameEl, detailEl);
      elements.skillsList.appendChild(skillEl);
    });
  }

  function renderProjects() {
    if (!elements.projectsList) return;

    elements.projectsList.textContent = "";

    CONFIG.projects.forEach((project) => {
      const projectEl = document.createElement("article");
      projectEl.className = "project-item";

      const nameEl = document.createElement("div");
      nameEl.className = "project-name";
      nameEl.textContent = project.name;

      const detailEl = document.createElement("div");
      detailEl.className = "project-detail";
      detailEl.textContent = project.detail;

      projectEl.append(nameEl, detailEl);
      elements.projectsList.appendChild(projectEl);
    });
  }

  function typeQuote() {
    if (!hasElements("typingQuote", "quoteText") || CONFIG.quotes.length === 0) return;

    const quote = CONFIG.quotes[state.currentQuoteIndex];
    elements.typingQuote.style.color = quote.color;

    if (state.isPaused) return;

    if (!state.isDeleting && state.currentCharIndex < quote.text.length) {
      elements.quoteText.textContent = quote.text.slice(0, state.currentCharIndex + 1);
      state.currentCharIndex += 1;
      window.setTimeout(typeQuote, 50);
      return;
    }

    if (!state.isDeleting && state.currentCharIndex === quote.text.length) {
      state.isPaused = true;
      elements.typingQuote.classList.add("quote-glow");

      window.setTimeout(() => {
        elements.typingQuote.classList.remove("quote-glow");

        window.setTimeout(() => {
          state.isPaused = false;
          state.isDeleting = true;
          typeQuote();
        }, 500);
      }, 2500);
      return;
    }

    if (state.isDeleting && state.currentCharIndex > 0) {
      elements.quoteText.textContent = quote.text.slice(0, state.currentCharIndex - 1);
      state.currentCharIndex -= 1;
      window.setTimeout(typeQuote, 30);
      return;
    }

    state.isDeleting = false;
    state.currentQuoteIndex = (state.currentQuoteIndex + 1) % CONFIG.quotes.length;
    window.setTimeout(typeQuote, 500);
  }

  function initApp() {
    initTheme();
    renderProfileName();
    renderSocialLinks();
    renderAbout();
    renderProjects();
    refreshLucideIcons();

    window.setTimeout(typeQuote, 1500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp, { once: true });
  } else {
    initApp();
  }
})();
