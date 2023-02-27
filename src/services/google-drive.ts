import { google } from 'googleapis';

export default function getDriveService() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_DRIVE_PRIVATE_KEY?.split(
        String.raw`\n`
      ).join('\n'),
      client_email: process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
    },
    scopes: ['https://www.googleapis.com/auth/drive'],
  });

  return google.drive({ version: 'v3', auth });
}
