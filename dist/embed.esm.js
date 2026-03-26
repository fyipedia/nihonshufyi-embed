/* nihonshufyi-embed v1.0.0 | MIT | https://widget.nihonshufyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.drinkfyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.drinkfyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.drinkfyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Image area \u2014 for recipe/entity cards */
.drinkfyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.drinkfyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.drinkfyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.drinkfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.drinkfyi-row:last-child {
  border-bottom: none;
}

.drinkfyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.drinkfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.drinkfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.drinkfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.drinkfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.drinkfyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.drinkfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.drinkfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}
  `;
}

// src/styles/classic.ts
function getClassicCSS() {
  return `
/* Classic: serif headings throughout */
.drinkfyi-widget {
  font-family: Georgia, 'Times New Roman', serif;
}

/* Header \u2014 surface background with thin accent top border */
.drinkfyi-header {
  background: var(--surface);
  border-top: 3px solid var(--accent);
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.drinkfyi-header-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
  font-family: Georgia, 'Times New Roman', serif;
}

.drinkfyi-header-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
  font-style: italic;
}

/* Image area \u2014 for recipe/entity cards */
.drinkfyi-img {
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  background: var(--badge-bg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--border);
}

.drinkfyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

/* Body area */
.drinkfyi-body {
  padding: 14px 20px;
}

/* Key-value rows \u2014 dotted borders */
.drinkfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px dotted var(--border);
}

.drinkfyi-row:last-child {
  border-bottom: none;
}

.drinkfyi-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
  font-variant: small-caps;
  letter-spacing: 0.06em;
  text-transform: lowercase;
}

.drinkfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.drinkfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  font-variant: small-caps;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  margin: 0 0 10px 0;
}

/* Tags \u2014 muted badges with border */
.drinkfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.drinkfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
}

.drinkfyi-link:hover {
  text-decoration: underline;
}

.drinkfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.drinkfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "classic":
      return getClassicCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.drinkfyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.drinkfyi-widget[data-size="default"] {
  max-width: 420px;
}

.drinkfyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.drinkfyi-widget *, .drinkfyi-widget *::before, .drinkfyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.drinkfyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: drinkfyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes drinkfyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.drinkfyi-error p {
  margin: 0 0 8px 0;
}

.drinkfyi-error a {
  color: var(--link);
  text-decoration: none;
}

.drinkfyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-search-wrap {
  padding: 12px 16px;
}

.drinkfyi-search-form {
  display: flex;
  gap: 8px;
}

.drinkfyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.drinkfyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.drinkfyi-search-input::placeholder {
  color: var(--muted);
}

.drinkfyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.drinkfyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.drinkfyi-search-results {
  padding: 0 16px 12px;
}

.drinkfyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.drinkfyi-result-item:last-child {
  border-bottom: none;
}

.drinkfyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.drinkfyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.drinkfyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.drinkfyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.drinkfyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.drinkfyi-copy-btn:hover {
  background: var(--copy-hover);
}

.drinkfyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["drinkfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="drinkfyi-loading">
      <span class="drinkfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="drinkfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="drinkfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `drinkfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/rich-snippets.ts
function injectRecipe(data, domain) {
  if (document.querySelector('script[data-drinkfyi-snippet="recipe"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: data.name,
    url: `https://${domain}/${data.slug}/`
  };
  if (data.category) {
    jsonLd.recipeCategory = data.category;
  }
  if (data.ingredients && data.ingredients.length > 0) {
    jsonLd.recipeIngredient = data.ingredients;
  }
  if (data.prep_time_minutes) {
    jsonLd.totalTime = `PT${data.prep_time_minutes}M`;
  }
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-drinkfyi-snippet", "recipe");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-drinkfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-drinkfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(data, domain, siteName) {
  if (document.querySelector('script[data-drinkfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${siteName} FAQ`,
    url: `https://${domain}/faqs/`,
    mainEntity: [
      {
        "@type": "Question",
        name: data.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: data.answer
        }
      }
    ]
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-drinkfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/recipe.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var FIELD_MAP = {
  cocktailfyi: [
    { label: "Category", key: "category" },
    { label: "Glass", key: "glass" },
    { label: "Difficulty", key: "difficulty" },
    { label: "Prep Time", key: "prep_time_minutes" }
  ],
  vinofyi: [
    { label: "Style", key: "style" },
    { label: "Region", key: "region" },
    { label: "Country", key: "country" }
  ],
  beerfyi: [
    { label: "BJCP", key: "bjcp_code" },
    { label: "Category", key: "category_name" },
    { label: "ABV", key: "abv_range" },
    { label: "IBU", key: "ibu_range" },
    { label: "SRM", key: "srm_range" }
  ],
  brewfyi: [
    { label: "Species", key: "species" },
    { label: "Country", key: "country" },
    { label: "Region", key: "region" }
  ],
  whiskeyfyi: [
    { label: "Type", key: "type" },
    { label: "Distillery", key: "distillery" },
    { label: "Region", key: "region" },
    { label: "Country", key: "country" }
  ],
  teafyi: [
    { label: "Category", key: "category" },
    { label: "Country", key: "country" },
    { label: "Region", key: "region" }
  ],
  nihonshufyi: [
    { label: "Grade", key: "grade" },
    { label: "Rice", key: "rice" },
    { label: "Brewery", key: "brewery" }
  ]
};
var DEFAULT_FIELDS = [
  { label: "Category", key: "category" },
  { label: "Country", key: "country" }
];
function initRecipeWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const apiPath = `${config.entitySlug}/${slug}/`;
  fetchAPI(config.apiBase, apiPath).then((data) => {
    renderRecipe(container, data, slug, config, el);
  }).catch(() => {
    renderError(
      container,
      `Unable to load "${escapeHTML(slug)}". Please try again later.`,
      config
    );
  });
}
function renderRecipe(container, data, slug, config, el) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const name = data.name ? escapeHTML(String(data.name)) : escapeHTML(slug);
  const badgeRaw = (_e = (_d = (_c = (_b = (_a = data.category) != null ? _a : data.style) != null ? _b : data.type) != null ? _c : data.grade) != null ? _d : data.category_name) != null ? _e : "";
  const badge = badgeRaw ? escapeHTML(String(badgeRaw)) : "";
  const description = (_g = (_f = data.description) != null ? _f : data.excerpt) != null ? _g : "";
  const entityUrl = `https://${config.domain}/${config.entitySlug}/${slug}/`;
  const fields = (_h = FIELD_MAP[config.site]) != null ? _h : DEFAULT_FIELDS;
  const rows = fields.filter(({ key }) => {
    const val = data[key];
    return val !== null && val !== void 0 && val !== "";
  }).map(({ label, key }) => {
    const raw = data[key];
    let displayVal;
    if (Array.isArray(raw)) {
      displayVal = escapeHTML(raw.join(", "));
    } else {
      displayVal = escapeHTML(String(raw));
    }
    const suffix = key === "prep_time_minutes" ? " min" : "";
    return `
        <div class="drinkfyi-kv-row">
          <div class="drinkfyi-kv-key">${escapeHTML(label)}</div>
          <div class="drinkfyi-kv-value">${displayVal}${suffix}</div>
        </div>`;
  }).join("");
  container.innerHTML = `
    <div class="drinkfyi-header">
      <div class="drinkfyi-header-text">
        <p class="drinkfyi-title">${name}</p>
        ${badge ? `<p class="drinkfyi-subtitle">${badge}</p>` : ""}
      </div>
      ${badge ? `<span class="drinkfyi-badge">${badge}</span>` : ""}
    </div>

    ${rows ? `<div class="drinkfyi-kv-table">${rows}</div>` : ""}

    ${description ? `<p class="drinkfyi-description">${escapeHTML(description)}</p>` : ""}

    <div class="drinkfyi-actions">
      <a class="drinkfyi-link" href="${entityUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
  if (config.site === "cocktailfyi" && el.dataset.noSnippet !== "true") {
    const ingredients = Array.isArray(data.ingredients) ? data.ingredients.map((i) => String(i)) : [];
    injectRecipe(
      {
        name: String((_i = data.name) != null ? _i : slug),
        category: data.category ? String(data.category) : void 0,
        ingredients,
        prep_time_minutes: data.prep_time_minutes ? Number(data.prep_time_minutes) : void 0,
        slug
      },
      config.domain
    );
  }
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var COMPARE_FIELDS = {
  cocktailfyi: [
    ["Category", "category"],
    ["Glass", "glass"],
    ["Difficulty", "difficulty"],
    ["Prep Time", "prep_time_minutes"],
    ["ABV", "abv"]
  ],
  vinofyi: [
    ["Style", "style"],
    ["Region", "region"],
    ["Country", "country"],
    ["Grape", "grape"],
    ["Vintage", "vintage"]
  ],
  beerfyi: [
    ["BJCP", "bjcp_code"],
    ["Category", "category_name"],
    ["ABV", "abv_range"],
    ["IBU", "ibu_range"],
    ["SRM", "srm_range"]
  ],
  brewfyi: [
    ["Species", "species"],
    ["Country", "country"],
    ["Region", "region"],
    ["Process", "process"]
  ],
  whiskeyfyi: [
    ["Type", "type"],
    ["Distillery", "distillery"],
    ["Region", "region"],
    ["Country", "country"],
    ["Age", "age_statement"]
  ],
  teafyi: [
    ["Category", "category"],
    ["Country", "country"],
    ["Region", "region"],
    ["Oxidation", "oxidation_level"]
  ],
  nihonshufyi: [
    ["Grade", "grade"],
    ["Rice", "rice"],
    ["Brewery", "brewery"],
    ["Prefecture", "prefecture"],
    ["SMV", "nihonshu_do"]
  ]
};
var DEFAULT_COMPARE_FIELDS = [
  ["Category", "category"],
  ["Country", "country"],
  ["Region", "region"]
];
function formatValue(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  if (typeof val === "boolean") return val ? "\u2713" : "\u2717";
  if (Array.isArray(val)) return val.join(", ");
  return String(val);
}
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slugsRaw = (_a = dataset.slugs) != null ? _a : "";
  const slugs = slugsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (slugs.length < 2) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "drinkfyi-compare-widget");
    renderError(container2, 'Provide at least 2 slugs in data-slugs="a,b"', config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "drinkfyi-compare-widget");
  renderLoading(container);
  Promise.all(
    slugs.map(
      (slug) => fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`)
    )
  ).then((entities) => {
    var _a2;
    const fields = (_a2 = COMPARE_FIELDS[config.site]) != null ? _a2 : DEFAULT_COMPARE_FIELDS;
    const presentFields = fields.filter(
      ([, key]) => entities.some(
        (e) => e[key] !== null && e[key] !== void 0 && e[key] !== ""
      )
    );
    const colWidth = Math.floor(100 / (entities.length + 1));
    const html = `
        <div class="drinkfyi-header">
          <div class="drinkfyi-header-text">
            <p class="drinkfyi-title">Comparison</p>
            <p class="drinkfyi-subtitle">${entities.length} items \xB7 ${escapeHTML2(config.name)}</p>
          </div>
        </div>
        <div class="drinkfyi-compare-scroll">
          <table class="drinkfyi-compare-table">
            <thead>
              <tr>
                <th class="drinkfyi-compare-th drinkfyi-compare-th--label" style="width:${colWidth}%">Field</th>
                ${entities.map(
      (e) => `
                  <th class="drinkfyi-compare-th" style="width:${colWidth}%">
                    <a href="https://${config.domain}/${config.entitySlug}/${escapeHTML2(e.slug)}/" target="_blank" rel="noopener" class="drinkfyi-compare-entity-link">
                      ${escapeHTML2(String(e.name))}
                      ${externalLinkIcon}
                    </a>
                  </th>`
    ).join("")}
              </tr>
            </thead>
            <tbody>
              ${presentFields.map(
      ([label, key]) => `
                <tr class="drinkfyi-compare-row">
                  <td class="drinkfyi-kv-key">${escapeHTML2(label)}</td>
                  ${entities.map((e) => {
        const val = escapeHTML2(formatValue(e[key]));
        return `<td class="drinkfyi-compare-td">${val}</td>`;
      }).join("")}
                </tr>`
    ).join("")}
            </tbody>
          </table>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, "Failed to load comparison data.", config);
  });
}

// src/widgets/glossary.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `glossary/${slug}/`).then((data) => {
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectDefinedTerm(
        { name: data.name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML3(slug)}". Please try again later.`,
      config
    );
  });
}
function renderGlossary(container, data, config) {
  const termUrl = `https://${config.domain}/glossary/${data.slug}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const category = data.category ? escapeHTML3(data.category) : "";
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="drinkfyi-pill" href="https://${config.domain}/glossary/${escapeHTML3(rt.slug)}/" target="_blank" rel="noopener">${escapeHTML3(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="drinkfyi-header">
      <div class="drinkfyi-header-text">
        <p class="drinkfyi-title">${escapeHTML3(data.name)}</p>
        <p class="drinkfyi-subtitle">Glossary term${category ? ` \xB7 ${category}` : ""}</p>
      </div>
      ${category ? `<span class="drinkfyi-badge">${category}</span>` : ""}
    </div>

    <div class="drinkfyi-summary">
      ${escapeHTML3(data.definition)}
    </div>

    ${relatedPills ? `<div class="drinkfyi-pills-row">${relatedPills}</div>` : ""}

    <div class="drinkfyi-actions">
      <a class="drinkfyi-link" href="${termUrl}" target="_blank" rel="noopener">
        ${escapeHTML3(data.name)} ${externalLinkIcon}
      </a>
      <a class="drinkfyi-link" href="${glossaryUrl}" target="_blank" rel="noopener">
        Full glossary on ${escapeHTML3(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/faq.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initFaqWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `faqs/${slug}/`).then((data) => {
    renderFaq(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectFAQPage(
        { question: data.question, answer: data.answer },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load FAQ "${escapeHTML4(slug)}". Please try again later.`,
      config
    );
  });
}
function renderFaq(container, data, config) {
  const faqUrl = `https://${config.domain}/faqs/${data.slug}/`;
  const faqsUrl = `https://${config.domain}/faqs/`;
  const category = data.category ? escapeHTML4(data.category) : "";
  container.innerHTML = `
    <div class="drinkfyi-header">
      <div class="drinkfyi-header-text">
        <p class="drinkfyi-title">${escapeHTML4(data.question)}</p>
        <p class="drinkfyi-subtitle">Frequently Asked Question${category ? ` \xB7 ${category}` : ""}</p>
      </div>
    </div>

    <details class="drinkfyi-faq-details" open>
      <summary class="drinkfyi-faq-summary">Answer</summary>
      <div class="drinkfyi-summary">
        ${escapeHTML4(data.answer)}
      </div>
    </details>

    <div class="drinkfyi-actions">
      <a class="drinkfyi-link" href="${faqUrl}" target="_blank" rel="noopener">
        Full answer ${externalLinkIcon}
      </a>
      <a class="drinkfyi-link" href="${faqsUrl}" target="_blank" rel="noopener">
        More FAQs on ${escapeHTML4(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/guide.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "drinkfyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "drinkfyi-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((guide) => {
    var _a2, _b, _c, _d, _e, _f;
    const guideUrl = guide.url ? `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML5(guide.slug)}/`;
    const excerpt = (_b = (_a2 = guide.excerpt) != null ? _a2 : guide.description) != null ? _b : "";
    const readingTime = (_d = (_c = guide.reading_time_minutes) != null ? _c : guide.reading_time) != null ? _d : null;
    const category = (_f = (_e = guide.category_name) != null ? _e : guide.category) != null ? _f : null;
    const html = `
        <div class="drinkfyi-guide-card">
          <div class="drinkfyi-guide-header">
            <div class="drinkfyi-guide-badges">
              ${category ? `<span class="drinkfyi-badge">${escapeHTML5(category)}</span>` : ""}
              ${readingTime ? `<span class="drinkfyi-badge drinkfyi-badge--time">${escapeHTML5(String(readingTime))} min read</span>` : ""}
            </div>
            <h3 class="drinkfyi-guide-title">${escapeHTML5(String(guide.title))}</h3>
          </div>
          ${excerpt ? `<p class="drinkfyi-guide-excerpt">${escapeHTML5(excerpt)}</p>` : ""}
          <div class="drinkfyi-guide-footer">
            <a href="${guideUrl}" target="_blank" rel="noopener" class="drinkfyi-guide-cta">
              Read guide on ${escapeHTML5(config.name)}
              ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML5(slug)}" not found.`, config);
  });
}

// src/widgets/ingredient.ts
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var INGREDIENT_SLUG = {
  cocktailfyi: "ingredients",
  vinofyi: "grapes",
  beerfyi: "hops",
  brewfyi: "varieties",
  whiskeyfyi: "casks",
  teafyi: "compounds",
  nihonshufyi: "rice"
};
function initIngredientWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const endpoint = (_b = INGREDIENT_SLUG[config.site]) != null ? _b : "ingredients";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `${endpoint}/${slug}/`).then((data) => {
    renderIngredient(container, data, endpoint, config);
  }).catch(() => {
    renderError(
      container,
      `Unable to load "${escapeHTML6(slug)}". Please try again later.`,
      config
    );
  });
}
function renderIngredient(container, data, endpoint, config) {
  var _a, _b, _c, _d, _e;
  const name = escapeHTML6(data.name);
  const badgeRaw = (_b = (_a = data.category) != null ? _a : data.type) != null ? _b : "";
  const badge = badgeRaw ? escapeHTML6(String(badgeRaw)) : "";
  const description = (_c = data.description) != null ? _c : "";
  const origin = (_e = (_d = data.origin) != null ? _d : data.country) != null ? _e : "";
  const entityUrl = `https://${config.domain}/${endpoint}/${data.slug}/`;
  container.innerHTML = `
    <div class="drinkfyi-header">
      <div class="drinkfyi-header-text">
        <p class="drinkfyi-title">${name}</p>
        ${badge ? `<p class="drinkfyi-subtitle">${badge}</p>` : ""}
      </div>
      ${badge ? `<span class="drinkfyi-badge">${badge}</span>` : ""}
    </div>

    ${origin ? `<div class="drinkfyi-kv-table">
             <div class="drinkfyi-kv-row">
               <div class="drinkfyi-kv-key">Origin</div>
               <div class="drinkfyi-kv-value">${escapeHTML6(String(origin))}</div>
             </div>
           </div>` : ""}

    ${description ? `<p class="drinkfyi-description">${escapeHTML6(description)}</p>` : ""}

    <div class="drinkfyi-actions">
      <a class="drinkfyi-link" href="${entityUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML6(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/pairing.ts
function escapeHTML7(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var PAIRING_SITES = /* @__PURE__ */ new Set(["cocktailfyi", "vinofyi"]);
function initPairingWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const food = (_a = dataset.food) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "drinkfyi-pairing-widget");
  if (!PAIRING_SITES.has(config.site)) {
    container.innerHTML = `
      <div class="drinkfyi-header">
        <div class="drinkfyi-header-text">
          <p class="drinkfyi-title">Food Pairings</p>
          <p class="drinkfyi-subtitle">Beverage pairing guide</p>
        </div>
      </div>
      <div class="drinkfyi-summary">
        Food pairings are available on
        <a href="https://cocktailfyi.com/" target="_blank" rel="noopener">CocktailFYI</a>
        and
        <a href="https://vinofyi.com/" target="_blank" rel="noopener">VinoFYI</a>.
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  if (!food) {
    renderError(container, "Missing data-food attribute.", config);
    return;
  }
  renderLoading(container);
  const apiPath = config.site === "vinofyi" ? `foods/${food}/` : `cocktails/?pairing=${encodeURIComponent(food)}&limit=5`;
  fetchAPI(config.apiBase, apiPath).then((data) => {
    renderPairing(container, data, food, config);
  }).catch(() => {
    renderError(
      container,
      `Unable to load pairing suggestions for "${escapeHTML7(food)}". Please try again later.`,
      config
    );
  });
}
function renderPairing(container, data, food, config) {
  var _a, _b;
  const foodName = escapeHTML7(
    String((_b = (_a = data.name) != null ? _a : data.food) != null ? _b : food)
  );
  const items = Array.isArray(data.pairings) ? data.pairings : Array.isArray(data.results) ? data.results : [];
  if (items.length === 0) {
    container.innerHTML = `
      <div class="drinkfyi-header">
        <div class="drinkfyi-header-text">
          <p class="drinkfyi-title">Pairings for ${foodName}</p>
          <p class="drinkfyi-subtitle">${escapeHTML7(config.name)}</p>
        </div>
      </div>
      <div class="drinkfyi-summary">
        No pairing suggestions found for "${foodName}".
        <a href="https://${config.domain}/" target="_blank" rel="noopener">Browse ${escapeHTML7(config.name)}</a>
        for more options.
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  const itemsHTML = items.map((item) => {
    var _a2, _b2;
    const href = item.url ? `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML7(item.slug)}/`;
    const note = (_b2 = (_a2 = item.pairing_notes) != null ? _a2 : item.description) != null ? _b2 : "";
    return `
        <div class="drinkfyi-pairing-item">
          <a class="drinkfyi-pairing-name" href="${href}" target="_blank" rel="noopener">
            ${escapeHTML7(item.name)}
            ${externalLinkIcon}
          </a>
          ${note ? `<p class="drinkfyi-pairing-note">${escapeHTML7(note)}</p>` : ""}
        </div>`;
  }).join("");
  container.innerHTML = `
    <div class="drinkfyi-header">
      <div class="drinkfyi-header-text">
        <p class="drinkfyi-title">Pairings for ${foodName}</p>
        <p class="drinkfyi-subtitle">${items.length} suggestion${items.length !== 1 ? "s" : ""} \xB7 ${escapeHTML7(config.name)}</p>
      </div>
    </div>

    <div class="drinkfyi-pairing-list">
      ${itemsHTML}
    </div>

    <div class="drinkfyi-actions">
      <a class="drinkfyi-link" href="https://${config.domain}/" target="_blank" rel="noopener">
        Explore ${escapeHTML7(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/search.ts
function escapeHTML8(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  cocktail: "Cocktail",
  wine: "Wine",
  beer: "Beer Style",
  coffee: "Coffee",
  whiskey: "Whiskey",
  tea: "Tea",
  sake: "Sake",
  ingredient: "Ingredient",
  grape: "Grape",
  hop: "Hop",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}\u2026`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "drinkfyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="drinkfyi-search-wrap">
      <div class="drinkfyi-search-form">
        <span class="drinkfyi-search-icon" aria-hidden="true">${SEARCH_ICON}</span>
        <input
          class="drinkfyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML8(placeholder)}"
          aria-label="Search ${escapeHTML8(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        >
      </div>
      <div class="drinkfyi-search-dropdown" role="listbox" hidden></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".drinkfyi-search-input");
  const dropdown = container.querySelector(".drinkfyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".drinkfyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.classList.add("drinkfyi-search-result-item--active");
      } else {
        item.classList.remove("drinkfyi-search-result-item--active");
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="drinkfyi-search-empty">
          No results for <strong>${escapeHTML8(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : "";
      const href = item.url ? `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML8(item.slug)}/`;
      html += `
        <a
          class="drinkfyi-search-result-item"
          href="${href}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
        >
          <div class="drinkfyi-search-result-row">
            <span class="drinkfyi-result-title">${escapeHTML8(item.name)}</span>
            ${typeLabel ? `<span class="drinkfyi-badge">${escapeHTML8(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div class="drinkfyi-result-meta">${escapeHTML8(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
}

// src/_entry_nihonshufyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  switch (type) {
    case "recipe":
      initRecipeWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "faq":
      initFaqWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "ingredient":
      initIngredientWidget(el, config);
      break;
    case "pairing":
      initPairingWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"nihonshufyi","name":"NihonshuFYI","domain":"nihonshufyi.com","accent":"#2563EB","attribute":"data-nihonshufyi","apiBase":"https://nihonshufyi.com/api/v1/","searchPath":"/search/","entityName":"Sake","entitySlug":"sake"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"nihonshufyi","name":"NihonshuFYI","domain":"nihonshufyi.com","accent":"#2563EB","attribute":"data-nihonshufyi","apiBase":"https://nihonshufyi.com/api/v1/","searchPath":"/search/","entityName":"Sake","entitySlug":"sake"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"nihonshufyi","name":"NihonshuFYI","domain":"nihonshufyi.com","accent":"#2563EB","attribute":"data-nihonshufyi","apiBase":"https://nihonshufyi.com/api/v1/","searchPath":"/search/","entityName":"Sake","entitySlug":"sake"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"nihonshufyi","name":"NihonshuFYI","domain":"nihonshufyi.com","accent":"#2563EB","attribute":"data-nihonshufyi","apiBase":"https://nihonshufyi.com/api/v1/","searchPath":"/search/","entityName":"Sake","entitySlug":"sake"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"nihonshufyi","name":"NihonshuFYI","domain":"nihonshufyi.com","accent":"#2563EB","attribute":"data-nihonshufyi","apiBase":"https://nihonshufyi.com/api/v1/","searchPath":"/search/","entityName":"Sake","entitySlug":"sake"}'.site;
  const defs = [
    [`${site}-recipe`, initRecipeWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-faq`, initFaqWidget, ["slug", "category"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-ingredient`, initIngredientWidget, ["slug"]],
    [`${site}-pairing`, initPairingWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
