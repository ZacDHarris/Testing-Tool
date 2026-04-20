# Ezee Fiber Internal Tools

> ⚠️ **PRIVATE REPOSITORY — NOT FOR PUBLIC USE**
> This software is the exclusive intellectual property of **Zachary Dane Harris**. All rights reserved. Unauthorized access, use, reproduction, distribution, or modification of this codebase or any portion thereof is strictly prohibited.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Script Load Order](#script-load-order)
- [Adding New Features](#adding-new-features)
- [Browser Support](#browser-support)
- [Known Limitations](#known-limitations)
- [Changelog](#changelog)
- [Legal](#legal)

---

## Overview

**Ezee Fiber Internal Tools** is a private, browser-based web application built for internal use by Ezee Fiber technical support agents. It provides a centralized, fast-access toolkit for generating formatted support notes, populating email templates, and managing reference data — all without requiring a backend server or internet connection beyond the initial page load.

This tool is designed to reduce manual note-writing time, ensure formatting consistency across agents, and streamline common support workflows.

---

## Features

### Note Generator
A structured form-based note builder for the most common support ticket types:

| Tab | Description |
|-----|-------------|
| **Truck Roll Approval** | Full diagnostic form including provider, equipment (ONT/Router), customer details, network and WiFi stats, troubleshooting steps, and agent initials |
| **Hard Down** | Escalation note covering alarm codes, light levels, network stability, head-end verification, and affected customers |
| **Cancellation** | Coming Soon |
| **Dispatch** | Dispatch note with Tech Region selector, customer details, and work order info |
| **CECR** | Priority-level customer escalation and case review note |

Key behaviors:
- Empty fields are automatically excluded from the generated note — no blank label lines
- All Yes/No questions are button-driven for speed
- Troubleshooting steps are click-to-select with a custom step input that auto-prefixes a bullet point
- One-click copy to clipboard for all generated notes

### Email Templates
Pre-built, auto-populated email templates for both Tachus and EzeeFiber brand contexts:

| Template | Description |
|----------|-------------|
| **Equipment Return** | Generates a complete return instruction email with modem/router serial numbers and a fillable UPS return label PDF |
| **Refer a Friend** | Referral program email with dynamic customer name and RAF link |
| **Requesting Pictures** | Case photo request email with ticket ID |
| **WiFi Security Key** | Instructions for connecting via security key instead of PIN |
| **Customer Portal Password Reset** | Coming Soon |
| **Lifetime Pricing Declaration** | Coming Soon |
| **Construction Case** | Coming Soon |
| **Outage** | Coming Soon |

### Sticky Notes Panel
A persistent side panel accessible from any page:
- Fixed to the right edge of the screen at all times
- Free-form text input for agent reference notes, account numbers, or reminders
- Auto-saves to browser localStorage and survives page refreshes
- One-click copy and clear

### Password Protection
Session-based login gate on all pages. Authentication state is stored in sessionStorage and cleared on browser close.

---

## Project Structure

```
ezeefiber-tools/
│
├── index.html                   ← Lean HTML shell — structure only, no inline JS or CSS
│
├── assets/
│   ├── css/
│   │   └── styles.css           ← All application styling (dark theme, components, layout)
│   │
│   ├── js/
│   │   ├── helpers.js           ← Shared utility functions (line, lineFlat, lineYN, yn)
│   │   ├── app.js               ← Login, session management, tab switching, UPS PDF generation
│   │   ├── truckroll.js         ← Truck Roll Approval: state, form logic, generate/copy/reset
│   │   ├── harddown.js          ← Hard Down: state, form logic, generate/copy/reset
│   │   ├── dispatch.js          ← Dispatch: state, form logic, generate/copy/reset
│   │   ├── cecr.js              ← CECR: priority state, generate/copy/reset
│   │   ├── email.js             ← All email template generation, router type selection, RAF
│   │   ├── notes.js             ← Sticky notes panel (toggle, copy, clear)
│   │   └── init.js              ← Bootstrap: runs last, populates dropdowns, initializes grids
│   │
│   └── img/
│       ├── EzeeFiberLogo.png    ← Header logo
│       ├── EzeeIcon.jpg         ← Browser favicon
│       ├── RAF1.png             ← Refer a Friend email header image
│       └── RAF2.png             ← Refer a Friend email footer image
│
├── data/
│   ├── oui-db.js                ← MAC address OUI to manufacturer lookup database
│   └── tech-regions.js          ← Tech region codes and labels + dropdown population function
│
├── pdf/
│   └── EzeeFiber_UPS_Label.pdf  ← UPS return label template (filled and downloaded client-side)
│
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Edge, Firefox, Safari)
- No Node.js, build tools, or server software required
- No internet connection required after initial load (fully static)

### Local Setup

1. Clone or download the repository:
   ```
   git clone https://github.com/YOUR_USERNAME/ezeefiber-tools.git
   cd ezeefiber-tools
   ```

2. Add required assets (not included in the repository):
   - Place EzeeFiberLogo.png into assets/img/
   - Place EzeeIcon.jpg into assets/img/
   - Place RAF1.png into assets/img/
   - Place RAF2.png into assets/img/
   - Place EzeeFiber_UPS_Label.pdf into pdf/

3. Open the application using a local static server. Do not open index.html directly by double-clicking — browser security restrictions on the file:// protocol will block the JS files from loading.

   Using Python:
   ```
   python3 -m http.server 8080
   ```
   Using Node.js:
   ```
   npx serve .
   ```
   Using VS Code: Install the Live Server extension, right-click index.html, then click Open with Live Server.

   Then visit http://localhost:8080 in your browser.

---

## Deployment

This is a fully static application — no server-side code, no database, no build process required.

### GitHub Pages

1. Push the repository to GitHub and keep the repo set to Private
2. Go to Settings and then Pages
3. Set the source to the main branch, root folder /
4. GitHub will provide a URL such as https://yourusername.github.io/ezeefiber-tools

### Netlify

1. Connect your private GitHub repo to Netlify
2. Set the publish directory to / (root)
3. Leave the build command blank
4. Netlify will auto-deploy on every push to main

Security note: Even with the password gate built into the app, the source code itself is visible to anyone with repository access. Keep the repository Private at all times.

---

## Script Load Order

Scripts are loaded at the bottom of index.html in a specific order. This order must not be changed — later scripts depend on variables and functions defined by earlier ones.

| Order | File | Purpose |
|-------|------|---------|
| 1 | data/oui-db.js | Declares OUI_DB constant — no dependencies |
| 2 | data/tech-regions.js | Declares TECH_REGIONS array and populateTechRegionSelects() |
| 3 | assets/js/helpers.js | Shared line, lineFlat, lineYN, lineYNFlat, yn functions — used by all note generators |
| 4 | assets/js/app.js | Login, tab switching — no feature script dependencies |
| 5 | assets/js/truckroll.js | Depends on helpers.js |
| 6 | assets/js/harddown.js | Depends on helpers.js |
| 7 | assets/js/dispatch.js | Depends on helpers.js |
| 8 | assets/js/cecr.js | Minimal dependencies |
| 9 | assets/js/email.js | Standalone email functions |
| 10 | assets/js/notes.js | Sticky notes panel functions |
| 11 | assets/js/init.js | Must be last — calls all initialization functions after everything is defined |

---

## Adding New Features

### Adding a New Note Template

1. Add a nav button to the note sub-nav in index.html:
   ```html
   <button class="note-sub-btn" id="note-btn-myfeature" onclick="switchNoteTab('myfeature', this)">My Feature</button>
   ```

2. Add the sub-page div:
   ```html
   <div id="note-sub-myfeature" class="note-sub-page">
       <!-- form goes here -->
   </div>
   ```

3. Create assets/js/myfeature.js with at minimum:
   ```js
   function generateMyFeature() { ... }
   function copyMyFeature() { ... }
   function resetMyFeature() { ... }
   ```

4. Add a script tag before init.js in index.html:
   ```html
   <script src="assets/js/myfeature.js"></script>
   <script src="assets/js/init.js"></script>
   ```

### Adding a New Tech Region

Open data/tech-regions.js and add a new entry to the TECH_REGIONS array:
```js
{ code: 'XYZ', label: 'Your Region Name' },
```
The dropdown will update automatically on the next page load.

---

## Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | Yes |
| Edge 90+ | Yes |
| Firefox 88+ | Yes |
| Safari 14+ | Yes |
| Internet Explorer | No |

The application uses navigator.clipboard, localStorage, sessionStorage, template literals, async/await, and CSS custom properties — all of which require a modern browser.

---

## Known Limitations

- **No user accounts** — all agents share a single password. This is intentional for simplicity but means there is no per-agent audit trail within the tool itself.
- **localStorage is browser-scoped** — sticky notes are saved per browser per device and do not sync across machines.
- **PDF label filling requires internet** — the UPS label download uses pdf-lib loaded from a CDN. All other features work fully offline after first load.
- **Session clears on browser close** — agents will need to log in again each session by design.

---

## Changelog

### v2.0.0 — Modular Refactor
- Separated monolithic single-file HTML into modular CSS, JS, and data files
- Added helpers.js shared utility module
- Added data/tech-regions.js for maintainable dropdown data
- Added data/oui-db.js as a standalone MAC address database
- Removed OUI lookup UI (oui.js deprecated)
- Added README.md and .gitignore

### v1.5.0 — Note Generator Improvements
- Empty fields are now excluded entirely from generated notes
- Split Light Levels into separate ONT and OLT inputs on both Truck Roll and Hard Down
- Added Construction in Area Yes/No button to Truck Roll
- Removed deprecated troubleshooting steps (Reprovisioned Modem, Modem mode changed buttons)
- Construction Confirmed/Not Confirmed replaced with a single Yes/No toggle

### v1.4.0 — Dispatch and Tech Region
- Added Tech Region dropdown to Dispatch note generator
- 24 regions with 3-letter codes and full descriptions

### v1.3.0 — Sticky Notes Panel
- Persistent collapsible side panel accessible on all pages
- Auto-saves to localStorage
- Copy all and clear actions

### v1.2.0 — Truck Roll Overhaul
- New section-based layout: Provider, Customer Reporting, Equipment, Customer Details, Network and WiFi, Troubleshooting
- Custom troubleshooting step input with automatic bullet point prefix
- Separate ONT SN and Router SN text inputs
- Router model selector buttons

### v1.1.0 — Hard Down and CECR
- Hard Down note generator with full diagnostic fields
- CECR ticket generator with priority level selector (1–4)

### v1.0.0 — Initial Release
- Truck Roll Approval note generator
- Email Templates: Equipment Return, Refer a Friend, Requesting Pictures, WiFi Security Key
- Login gate with session management

---

## Legal

**Copyright © Zachary Dane Harris. All Rights Reserved.**

This software, including all source code, design, structure, logic, content, and associated files (collectively, the "Software"), is the sole and exclusive intellectual property of **Zachary Dane Harris**.

**No license is granted.** This repository is private and confidential. The following are strictly prohibited without express written permission from Zachary Dane Harris:

- Copying, reproducing, or duplicating any portion of the Software
- Distributing, publishing, or sharing the Software or any derivative work
- Modifying, adapting, or building upon the Software in any form
- Using the Software for any purpose outside of its intended internal business operations
- Reverse engineering, decompiling, or disassembling any portion of the Software

Authorized users are limited to those explicitly granted repository access by Zachary Dane Harris, solely for the purpose of internal operations at Ezee Fiber. Granted access does not imply ownership, transfer of rights, or any license to use the Software beyond its intended scope.

**Unauthorized use of this Software may result in civil and/or criminal legal action.**

---

*Last updated: April 2026*
*Author and Owner: Zachary Dane Harris*
