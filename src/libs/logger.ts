import pino from "pino";

// TODO: add integration with logging service

export const logger = pino(
  {
    browser: {
      asObject: true,
    },
  },
  // stream,
);
