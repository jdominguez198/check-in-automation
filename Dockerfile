FROM cypress/included:8.5.0

RUN mkdir -p /app/cypress

COPY cypress /app/cypress
COPY cypress.json package.json yarn.lock /app/
COPY entrypoint.sh /entrypoint.sh

WORKDIR /app/

RUN yarn install --production --frozen-lockfile

ENTRYPOINT ["/entrypoint.sh"]
