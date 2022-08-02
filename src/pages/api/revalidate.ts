import type { NextApiRequest, NextApiResponse } from 'next';

import rateLimit, { getIP, MAX_POSTS_PER_PERIOD } from 'lib/rate-limit';

const limiter = rateLimit({
  max: 5, // cache limit of 5 per 60 second period.
  ttl: 60 * 1000,
});

const reavlidateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
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
    return res.status(500).json({ error: { message: 'Something went wrong' } });
  }

  const { model, entry } = req.body;

  if (!model || !entry) {
    return res
      .status(400)
      .send('"model" and "entry" must be defined on the body');
  }

  if (model !== 'academia') {
    console.log(
      `Did not revalidate because collection was ${model}, not academia.`
    );
    return res.status(200).json({ revalidated: false });
  }

  try {
    await res.revalidate('/academia');
    console.log('Successfully revalidated home page');
    if (entry.contentType !== 'Course') {
      return res.json({ revalidated: true });
    }
    if (!entry.slug) {
      return res
        .status(400)
        .send('"slug" must be defined in the "entry" object to revalidate');
    }
    await res.revalidate(`/academia/courses/${entry.slug}`);
    console.log('Successfully revalidated', entry.slug);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating');
  }

  return res.json({ revalidated: true });
};

export default reavlidateHandler;
