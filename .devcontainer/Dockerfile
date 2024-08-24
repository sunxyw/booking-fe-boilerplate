FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

WORKDIR /workspaces/booking-fe-boilerplate

ENV PNPM_HOME=/workspaces/pnpm
RUN corepack enable pnpm

COPY pnpm-lock.yaml ./

RUN pnpm fetch
