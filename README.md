# Luumen QA Interview - Cypress Component Testing

## Overview

This repository contains a QA technical assessment focused on writing Cypress component tests for a React component. You will be given a fully implemented `InstanceMonitor` component and tasked with writing comprehensive tests to verify its functionality.

## Prerequisites

Before starting, ensure you have the following installed on your machine:

### Required Software

1. **Git** (version 2.30+)
   ```bash
   # Check version
   git --version

   # Install (macOS)
   brew install git

   # Install (Ubuntu/Debian)
   sudo apt-get install git

   # Install (Windows)
   # Download from https://git-scm.com/download/win
   ```

2. **Node.js** (version 22.x or higher)
   ```bash
   # Check version
   node --version

   # Recommended: Use nvm to manage Node versions
   # Install nvm: https://github.com/nvm-sh/nvm
   nvm install 22
   nvm use 22
   ```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd luumen-qa-interview
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- React 18
- Cypress 13
- Apollo Client (GraphQL)
- Ant Design (UI components)

### 3. Install and Verify Cypress

Cypress requires a binary to be downloaded after npm install. Verify the installation:

```bash
# Verify Cypress binary is installed correctly
npx cypress verify
```

If this is your first time installing Cypress, or if the binary is missing, install it:

```bash
# Install/reinstall the Cypress binary
npx cypress install
```

**Linux users** may need additional system dependencies:

```bash
# Ubuntu/Debian
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

### 4. Open Cypress

```bash
npm run cypress:open
```

Select "Component Testing" → Choose a browser (Chrome recommended) → Click on your test file

## Project Structure

```
luumen-qa-interview/
├── src/
│   ├── components/
│   │   └── InstanceMonitor.jsx       # Component to test (provided at interview)
│   └── graphql/
│       └── queries.js                # GraphQL queries/mutations
├── cypress/
│   ├── component/
│   │   └── InstanceMonitor.cy.jsx    # YOUR TEST FILE - Write tests here
│   ├── fixtures/
│   │   └── instance.json             # Test data fixtures
│   └── support/
│       ├── component.js              # Component test setup with Apollo mock
│       └── commands.js               # Custom Cypress commands
├── cypress.config.js
├── package.json
└── README.md
```

## Running Tests

### Interactive Mode (Recommended)

```bash
npm run cypress:open
```

Select "Component Testing" → Choose a browser → Click on your test file

### Headless Mode

```bash
npm run cypress:run
```

## Test Fixtures

Sample test data is available in `cypress/fixtures/instance.json`. Load it in your tests:

```javascript
beforeEach(function () {
  cy.fixture('instance.json').as('instanceData');
});

it('should display instance', function () {
  const mocks = [{
    request: { query: GET_INSTANCE, variables: { id: 'inst-001' } },
    result: this.instanceData.healthy,
  }];
  // ...
});
```

## Troubleshooting

### Cypress Won't Open

```bash
npx cypress cache clear
npm install
```

### Node Version Issues

```bash
nvm use 18
```

### Module Not Found Errors

```bash
rm -rf node_modules package-lock.json
npm install
```
