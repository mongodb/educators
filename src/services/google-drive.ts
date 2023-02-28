import { google } from 'googleapis';

export default function getDriveService() {
  console.log('process.env', process.env);
  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: `-----BEGIN PRIVATE KEY-----\n${process.env[
        'GOOGLE_DRIVE_PRIVATE_KEY'
      ]
        ?.split(String.raw`\n`)
        .join('\n')}\n-----END PRIVATE KEY-----\n`,
      client_email: process.env['GOOGLE_DRIVE_CLIENT_EMAIL'],
    },
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  return google.drive({ version: 'v3', auth });
}
