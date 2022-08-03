import type { NextApiResponse } from 'next';
import { logRequest } from './logger';

export const responseWrapper = (
  res: NextApiResponse,
  endpoint: string,
  statusCode: number,
  method: string | undefined,
  json: object = {}
): void => {
  logRequest(endpoint, statusCode, method, json);
  return res.status(statusCode).json(json);
};
