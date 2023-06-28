FROM node:16-alpine AS builder

# Install deps
ARG NPM_AUTH=$NPM_AUTH
ARG NPM_EMAIL=$NPM_EMAIL
ARG CS_GRAPHQL_URL=$CS_GRAPHQL_URL
ARG CS_DELIVERY_TOKEN=$CS_DELIVERY_TOKEN
ARG APP_ENV=$APP_ENV
ARG SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ARG NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN

WORKDIR /educators
COPY package.json yarn.lock .npmrc ./

RUN yarn install --frozen-lockfile

# Build
COPY . .
RUN yarn build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs /educators
USER nextjs

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD [ "yarn", "start" ]