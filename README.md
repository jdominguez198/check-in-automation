# Cypress e2e test - Entry/Exit Automation

This repository uses Cypress to login, request entry/exit operations, and logout
to test the operations flow.

The main idea is to use GitHub Actions to expose the repository_dispatch event and use it
from an external scheduler.

## Usage

### Docker

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

### GitHub Repository Dispatch

1. Create a GitHub Personal Access Token, following instructions 
[here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

2. Define the following Secret Variables under your repository settings 
in `Settings > Secrets > Actions > New repository secret`.

Variable         | Description                       |
-----------------|-----------------------------------|
PORTAL_LOGIN_URL | Url to the login form in the Site
PORTAL_USERNAME  | Your login username
PORTAL_PASSWORD  | Your login password

3. Use an external scheduler or any other tool to request the GitHub API following the cURL example:

```bash
> curl -X POST \
  -H "Authorization: token <YOUR_KEY_FROM_STEP_1>" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{"event_type:"entrance_automation"}' \
  https://api.github.com/repos/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>/dispatches
```
