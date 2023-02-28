import formidable from 'formidable';
import type { NextApiRequest } from 'next';

export type FormidableField = formidable.Fields;
export type FormidableFile = formidable.File;

export const FormidableError = formidable.errors.FormidableError;

export function parseForm(req: NextApiRequest) {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        reject({ fields: {}, files: {} });
      }
      resolve({ fields, files });
    });
  });
}
