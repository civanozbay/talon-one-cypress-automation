# Talon.One Cypress Automation

This repository contains **end-to-end Cypress tests** for the scenario of buying a new laptop on the demo e-commerce platform. It includes the login flow, product selection, adding to cart, placing an order, and verifying the confirmation popup.

---

## 🛠 Prerequisites

To run these tests, you need:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node.js)
- A Git client

No prior experience with Cypress is required.

---

## ⚡ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/civanozbay/talon-one-cypress-automation.git
cd talon-one-cypress-automation
```

2.	**Install dependencies**
```bash
npm install
```
3.	**Open Cypress Test Runner (Interactive mode)**
```bash
npx cypress open
```
•	A window will appear with all the test specs.
•	Click on the spec file to run the tests step by step.

4.	**Run tests in Headless mode**
```bash
npx cypress run --spec "cypress/e2e/*.spec.cy.ts"
```
•	This runs the tests in the terminal without opening a UI.
•	You will see pass/fail results for each test.

⸻

## Tests Overview

Tested Flows

1.	Login Flow
- Successful login with valid credentials
- Negative scenarios (wrong password, empty fields)
- Logout verification

2.	Laptop Purchase Flow
- Select the laptop category
- Choose a specific product (e.g., “MacBook Air”)
- Add product to the cart
- Place order with user input (using fixture data)
- Verify the confirmation popup fields: Id,Amount,Card Number...
  
⸻

**Approach to Testing**

- Essential Flows: Focused on the critical user journey: login, product selection, checkout, and order confirmation.
- Page Object Pattern: Each page has a dedicated class to encapsulate selectors and actions, making tests readable and maintainable.
- Fixtures: Test data (like user info, order input) is stored in JSON fixtures to support data-driven testing.
- Assertions: Every step checks visibility and correctness of UI elements to ensure test reliability.
- Chainable Methods: All Page Object methods return this to allow fluent, readable chaining in the test body.
- Maintainability: By separating business flow (test spec) and UI details (Page Objects), adding new tests or updating selectors is easy.

⸻

**Running the Tests**

- Open Cypress and click on the spec file to run interactively.
- Or run headless for quick CI-style execution.
- Observe terminal logs or the Cypress Test Runner UI for pass/fail results.

⸻

## Repository Structure
```bash
cypress/
 ├─ e2e/
 │   ├─ login.spec.ts
 │   └─ purchase.spec.ts
 ├─ fixtures/
 │   └─ orderInputs.json
 └─ support/
     └─ commands.ts

pages/
 ├─ BasePage.ts
 ├─ HomePage.ts
 ├─ ProductDetailPage.ts
 ├─ CartPage.ts
 └─ LoginPage.ts
```
⸻

**Notes**
- Reviewer can clone the repo and run tests without any prior Cypress setup.
- All essential flows are covered to demonstrate automated testing skills.
- Optional improvements like HTML reporters or screenshots can be added if needed.


<img width="550" height="738" alt="Screenshot 2026-02-27 at 15 08 38" src="https://github.com/user-attachments/assets/71752dae-4045-4971-bacd-b68e6188f47e" />

