FROM cgr.dev/chainguard/node:latest-dev AS base
USER root
RUN corepack enable


FROM base AS deps

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build


FROM cgr.dev/chainguard/node:latest AS runner

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD [ "server.js" ]
