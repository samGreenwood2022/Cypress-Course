# Cypress Test Automation Framework
 
## What this project is
 
This repository is a hands-on Cypress test automation framework, built step
by step as part of a 1-to-1 test automation course. It automates a real,
public website — starting from the NBS Source homepage and navigating
through to a Dyson Manufacturer page via the search field.
 
The goal isn't just to end up with a working test suite, but to build one
the way a professional automation engineer would: with proper version
control, a CI pipeline from day one, a clean architecture, and tests that
go beyond the basics into real-world scenarios like negative testing and
accessibility checks.
 
## What we'll be building
 
Across the course, this project will grow to include:
 
- A small set of real tests against the practice site, using Cypress's own
  recommended selector strategy (data-cy attributes and cy.contains)
- A CI pipeline (GitHub Actions), wired up early so every test from this
  point on is automatically verified, plus Cypress Cloud for run history
  and video
- A Page Object Model architecture, with custom commands for cross-cutting
  actions like accepting the cookie banner
- Pull requests and code review, including a first pass from an AI coding
  assistant before human review
- Visual regression testing, catching unintended layout and styling changes
- Accessibility testing with cypress-axe, plus manual Lighthouse audits
- API testing and network interception, forcing the site into edge-case and
  negative scenarios that are hard to reach through the UI alone
- BDD with Cucumber/Gherkin, turning existing tests into plain-English
  feature files
 
## Why this matters
 
By the end, this repo is meant to stand on its own — a genuine,
portfolio-ready example of a professional test automation framework, not
just a course exercise. Every commit from here on should read like it was
written with that in mind.
 
## Getting started
 
- Language: (JavaScript or TypeScript — confirmed in Session 1)
- Install dependencies: npm install
- Run the tests: npx cypress open
