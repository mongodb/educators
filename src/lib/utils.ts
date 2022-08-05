import * as Sentry from '@sentry/nextjs';
import type { NextApiResponse } from 'next';
import { logRequest } from './logger';

export const responseWrapper = (
  res: NextApiResponse,
  endpoint: string,
  statusCode: number,
  method: string | undefined,
  json: { [key: string]: any } = {}
): void => {
  const report = async () => {
    logRequest(endpoint, statusCode, method, json);
    if (statusCode >= 400) {
      Sentry.captureException(
        new Error(`${method} ${endpoint}: ${statusCode}`),
        {
          extra: json,
        }
      );
    }
  };
  report(); // Do this async so we definitely return even if the reporting errors.
  return res.status(statusCode).json(json);
};
