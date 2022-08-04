import type { NextApiRequest, NextApiResponse } from 'next';

import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';
import { responseWrapper } from 'lib/utils';

import logger from 'lib/logger';

const limiter = rateLimit({
  max: 5, // cache limit of 5 per 60 second period.
  ttl: 60 * 1000,
});
const endpoint = '/api/revalidate';

const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const token = process.env.REVALIDATE_TOKEN;

  if (!token) {
    const message = 'REVALIDATE_TOKEN is not defined';
    logger.warn(message); // Don't want to send this message as a response, but still want to log it.
    return responseWrapper(res, endpoint, 500, method, {
      message: 'Something went wrong',
    });
  }
  if (req.headers.authorization !== `Bearer ${token}`) {
    const message = 'Invalid token';
    return responseWrapper(res, endpoint, 401, method, { message });
  }

  if (method !== 'POST') {
    const message = 'This is a POST-only endpoint';
    return responseWrapper(res, endpoint, 405, method, { message });
  }

  try {
    const IP = getIP(req);
    await limiter.check(res, MAX_POSTS_PER_PERIOD, IP || '');
  } catch {
    const message = 'Rate limit exceeded';
    return responseWrapper(res, endpoint, 429, method, { message });
  }

  const { slug, contentType } = req.body;

  if (!slug || !contentType) {
    const message = '"slug" and "contentType" must be defined in the body';
    return responseWrapper(res, endpoint, 400, method, { message });
  }

  try {
    await res.revalidate('/academia');
    if (contentType !== 'Course') {
      const message = 'Revalidated home-page only';
      return responseWrapper(res, endpoint, 200, method, { message });
    }
    await res.revalidate(`/academia/courses/${slug}`);
  } catch (err) {
    const message = `There was an error revalidating ${slug}`;
    return responseWrapper(res, endpoint, 500, method, { message });
  }
  const statusCode = 200;
  const message = `Revalidated both homepage and ${slug}`;
  return responseWrapper(res, endpoint, 200, method, { message });
};

export default revalidateHandler;
