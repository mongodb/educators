// https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/utils/rate-limit.js

import { NextApiRequest, NextApiResponse } from 'next';

const LRU = require('lru-cache'); // eslint-disable-line

import logger from 'lib/logger';

interface RateLimitOptions {
  max: number;
  ttl: number;
}

export const MAX_POSTS_PER_PERIOD = 5;

export const getIP = (req: NextApiRequest) => {
  const ip = req.headers['x-forwarded-for'] || '';
  let realIp: string;
  if (Array.isArray(ip)) {
    realIp = ip[0];
  } else {
    realIp = (ip as string).split(',')[0];
  }
  return realIp.trim();
};

const rateLimit = (options: RateLimitOptions) => {
  const ipCache = new LRU({
    max: options.max || 500,
    maxAge: options.ttl || 60000,
  });

  return {
    check: (res: NextApiResponse, limit: number, ip: string) =>
      new Promise((resolve, reject) => {
        const ipCount = ipCache.get(ip) || [0];
        if (ipCount[0] === 0) {
          ipCache.set(ip, ipCount);
        }
        ipCount[0] += 1;

        const currentUsage = ipCount[0];
        const isRateLimited = currentUsage >= limit;
        res.setHeader('X-RateLimit-Limit', limit.toString());
        res.setHeader(
          'X-RateLimit-Remaining',
          isRateLimited ? '0' : (limit - currentUsage).toString()
        );
        if (isRateLimited) {
          logger.info(`IP (${ip}) blocked for too many requests.`);
          return reject();
        }
        logger.info(
          `IP (${ip}) at ${currentUsage}/${limit} write requests this period.`
        );
        return resolve(null);
      }),
  };
};

export default rateLimit;
