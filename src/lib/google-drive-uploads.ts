import fs from 'fs';
import getDriveService from 'services/google-drive';

export async function googleDriveFolderUpload(
  parentFolderId = '',
  folderName: string
) {
  try {
    const { data } = await getDriveService().files.create({
      requestBody: {
        name: folderName,
        parents: [parentFolderId],
        mimeType: 'application/vnd.google-apps.folder',
      },
      supportsAllDrives: true,
      fields: 'id',
    });

    return data?.id;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function googleDriveFileUpload(
  filePath: string,
  fileName: string,
  mimeType: string,
  folderId: string
) {
  try {
    const { data } = await getDriveService().files.create({
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
  } catch (err) {
    console.error(err);
    return '';
  }
}
