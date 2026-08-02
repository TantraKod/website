/**
 * analyticsService.js
 * ─────────────────────────────────────────────────────────
 * Google Analytics 4 (gtag.js) Integration for TantraKod.
 * Measurement ID defaults to VITE_GA_MEASUREMENT_ID or fallback 'G-9RRKSCH3M6'.
 *
 * Features:
 * - Single script injection guarantee (script.async = true)
 * - Automatic page_view tracking for initial load & SPA route / hash changes
 * - Strict event deduplication to prevent duplicate page_views
 * - Full compatibility with React + Vite and Cloudflare Pages
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-9RRKSCH3M6';

let isInitialized = false;
let lastTrackedPath = '';

/**
 * Tracks a page_view event in Google Analytics 4.
 * Deduplicates consecutive requests for the exact same path.
 *
 * @param {string} [path] - Custom path or route (e.g., '/#services')
 * @param {string} [title] - Custom page title
 */
export function trackPageView(path, title) {
  if (typeof window === 'undefined' || !window.gtag) return;
  const measurementId = GA_MEASUREMENT_ID;
  if (!measurementId) return;

  const currentPath = path || (window.location.pathname + window.location.search + window.location.hash);

  // Prevent duplicate page_view events for the exact same path
  if (currentPath === lastTrackedPath) return;
  lastTrackedPath = currentPath;

  window.gtag('event', 'page_view', {
    page_path: currentPath,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

/**
 * Attaches global navigation listeners for automatic SPA route/hash tracking.
 */
function setupAutoRouteTracking() {
  if (typeof window === 'undefined') return;

  const handleNav = () => {
    // Small delay to allow title / DOM update if applicable
    setTimeout(() => {
      trackPageView();
    }, 50);
  };

  window.addEventListener('hashchange', handleNav);
  window.addEventListener('popstate', handleNav);

  // Monkey-patch history.pushState and history.replaceState for React Router / History API
  const originalPushState = window.history.pushState;
  if (originalPushState && !originalPushState.__ga_patched) {
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleNav();
    };
    window.history.pushState.__ga_patched = true;
  }

  const originalReplaceState = window.history.replaceState;
  if (originalReplaceState && !originalReplaceState.__ga_patched) {
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleNav();
    };
    window.history.replaceState.__ga_patched = true;
  }
}

/**
 * Initializes Google Analytics 4 once.
 * Loads the official gtag.js script asynchronously and configures tracking.
 */
export function initGA() {
  if (isInitialized) return;
  if (typeof window === 'undefined') return;

  const measurementId = GA_MEASUREMENT_ID;
  if (!measurementId) return;

  // 1. Guarantee script is injected only once
  if (!document.getElementById('ga-gtag')) {
    const script = document.createElement('script');
    script.id = 'ga-gtag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  // 2. Setup dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  // 3. Record initial page path for deduplication
  const initialPath = window.location.pathname + window.location.search + window.location.hash;
  lastTrackedPath = initialPath;

  // 4. Initialize GA4 with initial page_view enabled
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
  });

  // 5. Enable automatic route and hash navigation tracking
  setupAutoRouteTracking();

  isInitialized = true;
}
