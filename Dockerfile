FROM cypress/included:8.5.0

RUN mkdir -p cypress

COPY cypress cypress
COPY cypress.json package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile
