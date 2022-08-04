import pino, { stdTimeFunctions } from 'pino';

const logger = pino({
  browser: {
    write(o) {
      console.log(JSON.stringify(o));
    },
  },
  level: process.env.PINO_LOG_LEVEL || 'info',
  // doc notes that formatting time in-process impacts logging performance
  timestamp: stdTimeFunctions.isoTime, // built-in ISO 8601-formatted time in UTC
});

const statusCodeToLevel = (statusCode: number) => {
  if (statusCode >= 500 && statusCode <= 599) {
    return 'error';
  } else if (statusCode >= 400 && statusCode <= 499) {
    return 'warn';
  }
  return 'info';
};

export const logRequest = (
  endpoint: string,
  statusCode: number,
  method: string | undefined,
  extra: object = {}
) =>
  logger[statusCodeToLevel(statusCode)]({
    endpoint,
    statusCode,
    method,
    ...extra,
  });

export default logger;
