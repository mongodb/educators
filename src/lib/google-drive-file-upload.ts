import fs from 'fs';
import getDriveService from 'services/google-drive';

export async function googleDriveFolderUpload(fName: string) {
  const folderId = '0AAgh7YgJ3A53Uk9PVA';

  if (folderId) {
    const drive = getDriveService();

    const metaData = {
      name: fName || 'Justin McKenzie - Test',
      mimeType : 'application/vnd.google-apps.folder'
    }

    // wrap in try catch
    const data = await drive.files.create({
      requestBody: {
        name: metaData.name,
        // driveId: folderId,
        parents: [folderId],
        mimeType: metaData.mimeType,
      },
      supportsAllDrives: true,
      fields: 'id',
    });

    return data;
  }
}

export default async function googleDriveFileUpload(
  filePath: string,
  fileName: string,
  mimeType: string,
  folderId: string,
) {
  // TODO: folderId should be a param in this function
  // const folderId = process.env['GOOGLE_DRIVE_FOLDER_ID'];
  // const folderId = '0AAgh7YgJ3A53Uk9PVA';

  if (folderId) {
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

    return data.id;

    // TODO: put this string in the return of registration and just return the data.id from this service
    // return data?.id ? `https://drive.google.com/file/d/${data.id}` : '';
  }

  return '';
}
