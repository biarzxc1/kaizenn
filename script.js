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
        href: "https://www.facebook.com/mysterioussq",
        title: "Facebook",
        icon: "message-circle"
      },
      {
        href: "https://www.instagram.com/mysteriousssq",
        title: "Instagram",
        icon: "camera"
      },
      {
        href: "https://github.com/mysterioussq",
        title: "GitHub",
        icon: "code-2"
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
    skillsList: $("skillsList")
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

    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    elements.themeToggle.addEventListener("click", () => {
      document.body.classList.add("theme-transitioning");

      window.setTimeout(() => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);

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

      anchorEl.appendChild(createLucideIcon(link.icon));
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
    refreshLucideIcons();

    window.setTimeout(typeQuote, 1500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp, { once: true });
  } else {
    initApp();
  }
})();
