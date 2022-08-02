import type { NextApiRequest, NextApiResponse } from 'next';

import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';

const limiter = rateLimit({
  max: 5, // cache limit of 5 per 60 second period.
  ttl: 60 * 1000,
});

const revalidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = process.env.REVALIDATE_TOKEN;

  if (!token) {
    console.error('REVALIDATE_TOKEN is not defined.');
    return res.status(500).json({ error: { message: 'Something went wrong' } });
  }

  if (req.headers.authorization !== `Bearer ${token}`) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (req.method !== 'POST') {
    return res.status(405).send('This is a POST-only endpoint');
  }

  try {
    const IP = getIP(req);
    await limiter.check(res, MAX_POSTS_PER_PERIOD, IP || '');
  } catch {
    return res.status(429).json({ error: { message: 'Rate limit exceeded' } });
  }

  const { slug, contentType } = req.body;

  if (!slug || !contentType) {
    return res
      .status(400)
      .send('"slug" and "contentType" must be defined in the body');
  }

  try {
    await res.revalidate('/academia');
    if (contentType !== 'Course') {
      return res.json({ revalidated: true });
    }
    await res.revalidate(`/academia/courses/${slug}`);
  } catch (err) {
    console.error(`There was an error revalidating ${slug}`);
    return res.status(500).send('Error revalidating');
  }

  return res.json({ revalidated: true });
};

export default revalidateHandler;
