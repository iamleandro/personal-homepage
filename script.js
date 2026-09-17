/**
 * Leandro De Paula — Independent Technology Consulting
 *
 * This script is entirely optional progressive enhancement. Every link and
 * piece of content on the page works without it: the consultation buttons
 * already point at a mailto: fallback in the HTML, and the footer year is
 * hardcoded.
 *
 * ---------------------------------------------------------------------
 * BOOKING_URL_PLACEHOLDER — single configuration point
 * ---------------------------------------------------------------------
 * Once a real scheduling link exists (Calendly, Cal.com, etc.), set it
 * below. Every "Book a free consultation" button on the page will then
 * point to it automatically. Leave it as `null` to keep the email
 * fallback that is already in the HTML.
 */
const BOOKING_URL_PLACEHOLDER = null; // e.g. "https://cal.com/your-handle/30min"

document.addEventListener("DOMContentLoaded", () => {
  if (BOOKING_URL_PLACEHOLDER) {
    document.querySelectorAll("[data-booking-link]").forEach((link) => {
      link.setAttribute("href", BOOKING_URL_PLACEHOLDER);
      link.removeAttribute("target");
    });
  }

  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
