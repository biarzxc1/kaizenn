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
        path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      },
      {
        href: "https://www.instagram.com/mysteriousssq",
        title: "Instagram",
        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      },
      {
        href: "https://github.com/mysterioussq",
        title: "GitHub",
        path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      }
    ],

    stats: [
      { value: "2008", label: "Year of birth" },
      { value: "+1M", label: "Likes" },
      { value: "Philippines", label: "Location" }
    ],

    menuFolders: [
      {
        icon: "Tools",
        name: "TOOLS",
        items: [
          { href: "#", title: "FACEBOOK AVATAR SHIELD", desc: "Protect your Facebook profile" },
          { href: "https://mysteriousq-tempmail.onrender.com/", title: "TEMPMAIL", desc: "Generate temporary email" }
        ]
      },
      {
        icon: "Download",
        name: "DOWNLOADER",
        items: [
          { href: "https://mysteriousq-spotifydl.onrender.com/", title: "SPOTIFY DOWNLOADER", desc: "Download music from Spotify" },
          { href: "https://mysteriousq-ytdl.onrender.com/", title: "YOUTUBE DOWNLOADER", desc: "Download video from YouTube" },
          { href: "https://mysteriousq-igdl.onrender.com/", title: "INSTAGRAM DOWNLOADER", desc: "Download video from Instagram" },
          { href: "https://mysteriousq-fbdl.onrender.com/", title: "FACEBOOK DOWNLOADER", desc: "Download video from Facebook" },
          { href: "https://mysteriousq-tiktokdl.onrender.com/", title: "TIKTOK DOWNLOADER", desc: "Download TikTok videos without watermark" },
          { href: "https://mysteriousq-xdownloader.onrender.com", title: "X DOWNLOADER", desc: "Download videos from X/Twitter" }
        ]
      }
    ]
  };

  const state = {
    currentQuoteIndex: 0,
    currentCharIndex: 0,
    isDeleting: false,
    isPaused: false,
    menuOpen: false,
    batteryLevel: 100
  };

  const $ = (id) => document.getElementById(id);

  const elements = {
    bgMusic: $("bgMusic"),
    themeToggle: $("themeToggle"),
    menuButton: $("menuButton"),
    menuPanel: $("menuPanel"),
    profileName: $("profileName"),
    quoteText: $("quoteText"),
    typingQuote: $("typingQuote"),
    socialIcons: $("socialIcons"),
    statsContainer: $("statsContainer"),
    phTime: $("phTime"),
    pingValue: $("pingValue"),
    batteryFill: $("batteryFill"),
    batteryPercentage: $("batteryPercentage")
  };

  function hasElements(...names) {
    return names.every((name) => Boolean(elements[name]));
  }

  function createSvgPath(pathData, fill = "currentColor") {
    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.setAttribute("fill", fill);
    svgEl.setAttribute("viewBox", "0 0 24 24");

    const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathEl.setAttribute("d", pathData);

    svgEl.appendChild(pathEl);
    return svgEl;
  }

  function initMusic() {
    const audio = elements.bgMusic;
    if (!audio || typeof audio.play !== "function") return;

    audio.volume = 0.35;
    let alreadyPlayed = false;

    const tryPlayMusic = () => {
      if (alreadyPlayed) return;

      audio.play()
        .then(() => {
          alreadyPlayed = true;
        })
        .catch(() => {
        });
    };

    tryPlayMusic();

    audio.addEventListener("canplaythrough", tryPlayMusic, { once: true });

    ["click", "touchstart", "keydown", "scroll", "pointerdown"].forEach((eventName) => {
      document.addEventListener(eventName, tryPlayMusic, {
        once: true,
        passive: true
      });
    });

    window.addEventListener("load", tryPlayMusic);
    [200, 600, 1200, 2500].forEach((delay) => window.setTimeout(tryPlayMusic, delay));
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

  function buildMenu() {
    if (!hasElements("menuButton", "menuPanel")) return;

    const folderStyles = {
      TOOLS: {
        iconBg: "rgba(59,130,246,.12)",
        iconColor: "#3b82f6",
        catSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        itemSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
      },
      DOWNLOADER: {
        iconBg: "rgba(34,197,94,.12)",
        iconColor: "#22c55e",
        catSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        itemSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
      }
    };

    const fallbackStyle = {
      iconBg: "rgba(255,23,68,.1)",
      iconColor: "#ff1744",
      catSvg: "",
      itemSvg: ""
    };

    elements.menuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      state.menuOpen = !state.menuOpen;
      elements.menuPanel.classList.toggle("active", state.menuOpen);
      elements.menuButton.classList.toggle("active", state.menuOpen);
    });

    document.addEventListener("click", (event) => {
      if (
        state.menuOpen &&
        !elements.menuPanel.contains(event.target) &&
        event.target !== elements.menuButton
      ) {
        state.menuOpen = false;
        elements.menuPanel.classList.remove("active");
        elements.menuButton.classList.remove("active");
      }
    });

    elements.menuPanel.textContent = "";

    CONFIG.menuFolders.forEach((folder) => {
      const style = folderStyles[folder.name] || fallbackStyle;

      const folderEl = document.createElement("div");
      folderEl.className = "menu-folder";

      const headerEl = document.createElement("button");
      headerEl.type = "button";
      headerEl.className = "menu-folder-header";

      const labelEl = document.createElement("div");
      labelEl.className = "menu-folder-label";
      labelEl.style.display = "flex";
      labelEl.style.alignItems = "center";

      const catIconEl = document.createElement("div");
      catIconEl.className = "menu-folder-cat-icon";
      catIconEl.style.background = style.iconBg;
      catIconEl.style.color = style.iconColor;
      catIconEl.innerHTML = style.catSvg;

      const emojiEl = document.createElement("span");
      emojiEl.className = "menu-folder-icon";
      emojiEl.textContent = folder.icon;

      const nameEl = document.createElement("span");
      nameEl.className = "menu-folder-name";
      nameEl.textContent = folder.name;

      labelEl.append(catIconEl, emojiEl, nameEl);

      const rightEl = document.createElement("div");
      rightEl.className = "menu-folder-right";
      rightEl.style.display = "flex";
      rightEl.style.alignItems = "center";
      rightEl.style.gap = "8px";

      const countEl = document.createElement("span");
      countEl.className = "menu-folder-count";
      countEl.textContent = String(folder.items.length);

      const arrowEl = document.createElement("span");
      arrowEl.className = "menu-folder-arrow";
      arrowEl.innerHTML = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><polyline points="3,2 7,5 3,8"/></svg>';

      rightEl.append(countEl, arrowEl);
      headerEl.append(labelEl, rightEl);

      const contentEl = document.createElement("div");
      contentEl.className = "menu-folder-content";

      folder.items.forEach((item) => {
        const linkEl = document.createElement("a");
        linkEl.href = item.href;
        linkEl.target = "_blank";
        linkEl.rel = "noopener noreferrer";
        linkEl.className = "menu-item";

        const iconEl = document.createElement("div");
        iconEl.className = "menu-item-icon";
        iconEl.style.background = style.iconBg;
        iconEl.style.color = style.iconColor;
        iconEl.innerHTML = style.itemSvg;

        const bodyEl = document.createElement("div");
        bodyEl.className = "menu-item-body";

        const titleEl = document.createElement("div");
        titleEl.className = "menu-item-title";
        titleEl.textContent = item.title;

        const descEl = document.createElement("div");
        descEl.className = "menu-item-desc";
        descEl.textContent = item.desc;

        bodyEl.append(titleEl, descEl);

        const itemArrowEl = document.createElement("div");
        itemArrowEl.className = "menu-item-arrow";
        itemArrowEl.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>';

        linkEl.append(iconEl, bodyEl, itemArrowEl);
        contentEl.appendChild(linkEl);
      });

      headerEl.addEventListener("click", (event) => {
        event.stopPropagation();
        const wasOpen = folderEl.classList.contains("open");

        document.querySelectorAll(".menu-folder.open").forEach((openFolder) => {
          openFolder.classList.remove("open");
        });

        if (!wasOpen) folderEl.classList.add("open");
      });

      folderEl.append(headerEl, contentEl);
      elements.menuPanel.appendChild(folderEl);
    });
  }

  function renderProfileName() {
    if (!elements.profileName) return;

    elements.profileName.textContent = "";

    const nameTextEl = document.createElement("span");
    nameTextEl.textContent = CONFIG.profileName;

    const badgeEl = document.createElement("span");
    badgeEl.className = "verified-badge";

    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.setAttribute("viewBox", "0 0 40 40");
    svgEl.setAttribute("fill", "none");

    const circleEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleEl.setAttribute("cx", "20");
    circleEl.setAttribute("cy", "20");
    circleEl.setAttribute("r", "20");
    circleEl.setAttribute("fill", "#1877F2");

    const checkEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    checkEl.setAttribute("d", "M7.03 20L15.85 28.82L32.97 11.7");
    checkEl.setAttribute("stroke", "white");
    checkEl.setAttribute("stroke-width", "3");
    checkEl.setAttribute("stroke-linecap", "round");
    checkEl.setAttribute("stroke-linejoin", "round");
    checkEl.setAttribute("fill", "none");

    svgEl.append(circleEl, checkEl);
    badgeEl.appendChild(svgEl);
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

      anchorEl.appendChild(createSvgPath(link.path));
      elements.socialIcons.appendChild(anchorEl);
    });
  }

  function renderStats() {
    if (!elements.statsContainer) return;

    elements.statsContainer.textContent = "";

    CONFIG.stats.forEach((stat) => {
      const statEl = document.createElement("div");
      statEl.className = "stat-item";

      const valueEl = document.createElement("div");
      valueEl.className = "stat-value";
      valueEl.textContent = stat.value;

      const labelEl = document.createElement("div");
      labelEl.className = "stat-label";
      labelEl.textContent = stat.label;

      statEl.append(valueEl, labelEl);
      elements.statsContainer.appendChild(statEl);
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

  function updatePhilippinesTime() {
    if (!elements.phTime) return;

    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    elements.phTime.textContent = formatter.format(new Date());
  }

  function updatePing() {
    if (!elements.pingValue) return;

    const start = performance.now();
    const img = new Image();

    const finish = () => {
      elements.pingValue.textContent = `${Math.round(performance.now() - start)}ms`;
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = `https://www.google.com/favicon.ico?cacheBust=${Date.now()}`;
  }

  function updateBatteryUI() {
    if (!hasElements("batteryFill", "batteryPercentage")) return;

    const level = Math.max(0, Math.min(100, state.batteryLevel));
    elements.batteryFill.style.width = `${level}%`;
    elements.batteryPercentage.textContent = `${level}%`;

    elements.batteryFill.classList.remove("low", "medium");

    if (level <= 20) {
      elements.batteryFill.classList.add("low");
    } else if (level <= 50) {
      elements.batteryFill.classList.add("medium");
    }
  }

  function initBattery() {
    if ("getBattery" in navigator) {
      navigator.getBattery()
        .then((battery) => {
          state.batteryLevel = Math.round(battery.level * 100);
          updateBatteryUI();

          battery.addEventListener("levelchange", () => {
            state.batteryLevel = Math.round(battery.level * 100);
            updateBatteryUI();
          });
        })
        .catch(updateBatteryUI);
    } else {
      window.setInterval(() => {
        state.batteryLevel = Math.max(0, state.batteryLevel - 1);
        updateBatteryUI();
      }, 60000);
    }

    updateBatteryUI();
  }

  function initApp() {
    initMusic();
    initTheme();
    buildMenu();
    renderProfileName();
    renderSocialLinks();
    renderStats();

    window.setTimeout(typeQuote, 1500);

    updatePhilippinesTime();
    window.setInterval(updatePhilippinesTime, 1000);

    updatePing();
    window.setInterval(updatePing, 5000);

    initBattery();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp, { once: true });
  } else {
    initApp();
  }
})();
