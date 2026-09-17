/**
 * Leandro De Paula — Independent Technology Consulting
 *
 * This script is entirely optional progressive enhancement. The rest of
 * the page works without it: the "Book a free consultation" buttons are
 * plain anchor links to the #book section, and the Tymeslot widget itself
 * is loaded by its own <script> tag in index.html (see the #book section),
 * not from here — that keeps it loaded exactly once, at the same point in
 * the document as the div it renders into.
 */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
