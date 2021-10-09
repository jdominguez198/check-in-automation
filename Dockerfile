FROM cypress/included:8.5.0

RUN mkdir -p /app/cypress

WORKDIR /app/

COPY cypress /app/cypress
COPY cypress.json package.json yarn.lock /app/cypress/

RUN yarn install --production --frozen-lockfile

ENTRYPOINT ["cypress", "run", "--browser", "chrome"]
