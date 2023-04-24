import { google } from 'googleapis';

export default function getSheetsService() {
  const { private_key } = JSON.parse(
    process.env['GOOGLE_DRIVE_PRIVATE_KEY'] as string
  );

  const auth = new google.auth.GoogleAuth({
    credentials: {
      private_key,
      client_email: process.env['GOOGLE_DRIVE_CLIENT_EMAIL'],
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}