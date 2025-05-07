# Playwright Automation Framework (POM-based)

This repository contains an end-to-end Playwright automation framework built using the **Page Object Model (POM)** design pattern. It supports web UI and API testing, multi-browser execution, Excel data integration, and generates rich HTML and Allure reports.

---

## 📂 Folder Structure

```
/project-root
│
├── tests/                  # Playwright test specs (.spec.js)
├── pages/                  # Page Object classes (locators & actions)
├── utils/                  # Utility scripts (helpers, API handlers)
├── config/                 # Playwright configuration files
│    ├── playwright.config.js          # Default config (Chromium)
│    └── playwright.config1.js         # Multi-browser config (Safari, Chrome)
│
├── reports/                # HTML and Allure reports
├── test-data/              # Excel, JSON test data files
│
├── package.json            # Project scripts and dependencies
├── package-lock.json       # Dependency lock file
├── .gitignore              # Git ignore setup
├── state.json              # Browser auth session (e.g., localStorage)
└── README.md               # This documentation
```

---

## 🚀 Features

✅ **Page Object Model (POM)** for maintainable, reusable test code
✅ **Multi-browser testing**: Chromium, WebKit (Safari), Chrome
✅ **Tagged test runs** using `@web` and `@API`
✅ **Excel data integration** with `exceljs`
✅ **Rich reports**: Playwright HTML reports + Allure
✅ **Video recording & screenshots** on failure
✅ **Trace capture** for easy debugging
✅ **Stored browser state** (via `state.json`) for authenticated sessions

---

## 🔧 Scripts

| Script Name       | Command                                                               |
| ----------------- | --------------------------------------------------------------------- |
| `test`            | `npx playwright test tests/WebApiPart1.spec.js --headed`              |
| `regression`      | `npx playwright test`                                                 |
| `webTests`        | `npx playwright test --grep @web`                                     |
| `APITests`        | `npx playwright test --grep @API`                                     |
| `SafariNewConfig` | `npx playwright test --config playwright.config1.js --project=safari` |

Run any script using `npm run <scriptName>`.

---

## 🌐 Application Under Test (AUT)

Currently targeting:
`https://rahulshettyacademy.com/AutomationPractice/`

Test coverage includes:

* Radio buttons, checkboxes, dropdowns
* Window and tab switching
* Alerts and confirmation dialogs
* Web tables, dynamic elements

---

## 📷 Reports & Artifacts

* **HTML Report**: Automatically generated with Playwright (`reporter: 'html'`)
* **Allure Report**: Integrated with `allure-playwright`
* **Screenshots**: Captured on failures
* **Videos**: Retained on failure (Chrome config)
* **Traces**: Collected for detailed debugging

---

## 🛠 Requirements

* Node.js >= 18.x
* Playwright >= 1.50.x
* Install dependencies: `npm install`

---

## 🏗 Visual Framework Flow Diagram

```
User → Test Runner (npx playwright test) → Playwright Config → Pages (POM) → Tests → Reports/Artifacts
```

Or as a diagram:

```
+--------+        +-------------------+        +-------------+        +------------------+        +----------------+
|  User  +-------> Playwright Scripts +-------> Page Objects +-------> Browser Execution +-------> Reports/Results |
+--------+        +-------------------+        +-------------+        +------------------+        +----------------+
```

---

If you want, I can also generate this as an image or provide a Mermaid.js diagram for visual embedding!
