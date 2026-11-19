const tablist = document.querySelector(".tabs");
const tabs = [...tablist.querySelectorAll('[role="tab"]')];
const panels = tabs.map(tab => document.getElementById(tab.getAttribute("aria-controls")));

function selectTab(index, focus = false) {
  tabs.forEach((tab, position) => {
    const active = index === position;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    const panel = panels[position];
    panel.hidden = !active;
    panel.toggleAttribute("data-active", active);
  });
  if (focus) tabs[index].focus();
}

function syncTabs() {
  const index = panels.findIndex(panel => "#" + panel.id === location.hash);
  if (index >= 0) selectTab(index);
}

panels.forEach((panel, index) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", tabs[index].id);
  panel.tabIndex = 0;
});
selectTab(0);
syncTabs();
window.addEventListener("hashchange", syncTabs);
tablist.hidden = false;
tablist.addEventListener("click", event => {
  const index = tabs.indexOf(event.target.closest('[role="tab"]'));
  if (index >= 0) selectTab(index);
});
tablist.addEventListener("keydown", event => {
  const index = tabs.indexOf(event.target);
  if (index < 0) return;
  const next = {
    ArrowRight: (index + 1) % tabs.length,
    ArrowLeft: (index + tabs.length - 1) % tabs.length,
    Home: 0,
    End: tabs.length - 1
  }[event.key];
  if (next === undefined) return;
  event.preventDefault();
  selectTab(next, true);
});

const header = document.querySelector(".site-header");
const menu = document.querySelector(".menu-button");
const nav = document.getElementById("nav");
const mobile = matchMedia("(max-width: 39rem)");

function syncMenu(open = false) {
  menu.hidden = !mobile.matches;
  nav.hidden = mobile.matches && !open;
  menu.setAttribute("aria-expanded", String(mobile.matches && open));
  header.classList.toggle("has-menu", mobile.matches);
}

syncMenu();
mobile.addEventListener("change", () => syncMenu());
menu.addEventListener("click", () => syncMenu(menu.getAttribute("aria-expanded") === "false"));
header.addEventListener("keydown", event => {
  if (event.key !== "Escape" || menu.getAttribute("aria-expanded") !== "true") return;
  syncMenu();
  menu.focus();
});
nav.addEventListener("click", event => {
  if (!mobile.matches || !event.target.closest("a")) return;
  syncMenu();
  const destination = document.querySelector(event.target.closest("a").hash);
  destination.setAttribute("tabindex", "-1");
  destination.focus({ preventScroll: true });
});

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("reveal-now");
      observer.unobserve(entry.target);
    }
  }, { threshold: .15 });
  document.querySelectorAll("[data-reveal]").forEach(section => observer.observe(section));
}

const badge = document.getElementById("visit-counter-image");
const counterStatus = document.getElementById("visit-counter-status");
function loadCounter() {
  const deadline = setTimeout(() => { counterStatus.textContent = "No disponible"; }, 8000);
  badge.addEventListener("load", () => {
    clearTimeout(deadline);
    badge.hidden = false;
    counterStatus.hidden = true;
  }, { once: true });
  badge.addEventListener("error", () => {
    clearTimeout(deadline);
    counterStatus.textContent = "No disponible";
  }, { once: true });
  badge.loading = "eager";
  badge.src = badge.dataset.counterSrc;
}

const deferCounter = () => setTimeout(loadCounter, 250);
if (document.readyState === "complete") deferCounter();
else window.addEventListener("load", deferCounter, { once: true });
