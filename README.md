# Cypress e2e test - Entry/Exit Automation

This repository uses Cypress to login, request entry/exit operations, and logout
to test the operations flow.

The main idea is to use GitHub Actions to expose the repository_dispatch event and use it
from an external scheduler.

### Getting started

1. Build the docker image:

```bash
docker build -t check-in-automation:latest .
```

2. Run a container for an Entry action

```bash
docker run -it check-in-automation:latest --spec=cypress/integration/presence-entrance.spec.js
```

3. Run a container for an Exit action

```bash
docker run -it check-in-automation:latest --spec=cypress/integration/presence-exit.spec.js
```
