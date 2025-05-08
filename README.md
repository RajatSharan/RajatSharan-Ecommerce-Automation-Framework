# Ecommerce Automation Framework

## Overview

The **Ecommerce Automation Framework** is a Playwright-based test automation setup designed to test an ecommerce application. It includes end-to-end tests, API tests, validation tests, and reusable utilities. The framework is modular, scalable, and easy to use for both beginners and experienced testers.

---

## ✨ Features

✅ **End-to-End Tests**: Automates user workflows like login, adding products to the cart, and placing orders.
✅ **API Tests**: Validates backend APIs for login, order creation, and more.
✅ **Validation Tests**: Ensures proper error handling and UI validations.
✅ **Data-Driven Testing**: Supports running tests with multiple datasets.
✅ **Reusable Page Objects**: Implements the Page Object Model (POM) for better maintainability.
✅ **Mocking and Interception**: Mocks API responses for testing edge cases.

---

## 📂 Folder Structure

```
/project-root
│
├── pageobjects/
│    ├── login.page.js
│    ├── dashboard.page.js
│    ├── cart.page.js
│    ├── order_review.page.js
│    └── POManager.js
│
├── tests/
│    ├── e2e_tests/
│    │    ├── client_app_order_workflow.spec.js
│    │    └── practice_website.spec.js
│    └── api_tests/
│         ├── api_login.spec.js
│         ├── api_order_creation.spec.js
│         └── order_interception.spec.js
│
├── utils/
│    ├── api_utils.js
│    └── client_app_test_data.json
│
├── package.json
└── playwright.config.js
```

---

## ⚙️ Prerequisites

* **Node.js**: Install [Node.js](https://nodejs.org/) (LTS version recommended).
* **Playwright**: Install Playwright globally or as a project dependency.

---

## 🔧 Installation

1️⃣ Clone the repository:

```bash
git clone <repo-url>
```

2️⃣ Navigate to the project directory:

```bash
cd <project-folder>
```

3️⃣ Install dependencies:

```bash
npm install
```

4️⃣ Install Playwright browsers:

```bash
npx playwright install
```

---

## 🚀 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test

```bash
npx playwright test tests/e2e_tests/client_app_order_workflow.spec.js
```

### Run Tests with Tags

```bash
npx playwright test --grep @yourTag
```

### Generate and View Reports

Run tests and generate a report:

```bash
npx playwright test --reporter=html
```

Open the report:

```bash
npx playwright show-report
```

---

## 📁 Key Files and Folders

### **pageobjects/**

* `login.page.js`: Handles login page interactions.
* `dashboard.page.js`: Handles dashboard page interactions.
* `cart.page.js`: Handles cart page interactions.
* `order_review.page.js`: Handles order review page interactions.
* `POManager.js`: Manages and provides instances of page objects.

### **tests/e2e\_tests/**

* `client_app_order_workflow.spec.js`: Tests login, adding products to the cart, and placing orders.
* `practice_website.spec.js`: Tests basic UI interactions.

### **tests/api\_tests/**

* `api_login.spec.js`: Tests login API.
* `api_order_creation.spec.js`: Tests order creation API.
* `order_interception.spec.js`: Mocks API responses for testing edge cases.

### **utils/**

* `api_utils.js`: Utility functions for API interactions.
* `client_app_test_data.json`: Test data for data-driven testing.

---

## 🖊 Writing Your Own Tests

### Create a New Test File

* Add your test file in the appropriate folder (e.g., `tests/e2e_tests/`).

### Use Page Objects

Import the POManager to access page objects:

```js
import POManager from '../pageobjects/POManager.js';
```

### Write Your Test

```js
const loginPage = poManager.getLoginPage();
await loginPage.goTo();
await loginPage.validLogin(username, password);
```

---

## 🐞 Debugging Tips

### Run in Debug Mode

```bash
npx playwright test --debug
```

### Capture Screenshots

```js
await page.screenshot({ path: 'screenshot.png' });
```

### Log Page Content

```js
console.log(await page.content());
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "Add your message"
```

4. Push to your fork:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request.

---

Thank you for using the Ecommerce Automation Framework! 🚀
