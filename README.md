# Cypress Test Automation Framework

A Cypress + TypeScript test automation framework, built step by step from
scratch as part of a 1-to-1 test automation course. It automates a real,
public website, starting from the site's homepage and navigating through to
a manufacturer page via the search field.

The goal isn't just a working test suite, but one built the way a
professional automation engineer would: proper version control, a CI
pipeline from day one, and a clean architecture.

## What's been built so far

- Framework set up from scratch with Cypress and TypeScript
- A Page Object Model architecture (a shared base page plus page-specific
  classes), alongside a flat-file version of the same tests for comparison
- Consistent formatting via Prettier, including format-on-save in VS Code
- A CI pipeline (GitHub Actions) running on every push and pull request,
  with conditional recording to Cypress Cloud and screenshots uploaded on
  failure
- Cypress Cloud integration for run history and video

## Getting started

- Install dependencies: `npm install`
- Run the tests (interactive): `npm run cy:open`
- Run the tests (headless): `npm run cy:run`
