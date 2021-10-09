FROM cypress/included:8.5.0

RUN mkdir -p /e2e/cypress

COPY cypress /e2e/cypress
COPY cypress.json package.json yarn.lock /e2e/

WORKDIR /e2e/

RUN yarn install --production --frozen-lockfile
