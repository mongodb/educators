import fs from 'fs';
import getDriveService from 'src/services/google-drive';

export default async function googleDriveFileUpload(
  filePath: string,
  fileName: string,
  mimeType: string
) {
  // TODO: error handling or something instead of useless string fallback?
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || ''; // TODO: env var for the newly created folder for new Service Account
  const drive = getDriveService();

  const { data } = await drive.files.create({
    requestBody: {
      name: fileName,
      driveId: folderId,
      parents: [folderId],
    },
    media: {
      mimeType,
      body: fs.createReadStream(filePath),
    },
    supportsAllDrives: true,
    fields: 'id',
  });

  return data?.id ? `https://drive.google.com/file/d/${data.id}` : '';
}
