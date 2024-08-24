import pino, { type DestinationStream } from "pino";
import pretty from "pino-pretty";

// TODO: add integration with logging service

const stream: DestinationStream = pretty({
  colorize: true,
});

export const logger = pino({ base: undefined }, stream);
