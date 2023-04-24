import fs from 'fs';
import getSheetsService from 'services/google-sheets';

export default async function googleSheetFileUpload() {
  // TODO: add into folder
  const folderId = '1BjyI3UmAUILRUGVAaaRAFH0J93nzGrMdcbz8gc5E6r4';

  if (folderId) {
    const service = getSheetsService();

    let values = [
      ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
      ['never', 'gonna', 'give', 'you', 'up'],
      ['never', 'gonna', 'let', 'you', 'down']
    ];

    const resource = { values };

    try {
      const result = await service.spreadsheets.values.append({
        spreadsheetId: folderId,
        range: 'Sheet1',
        requestBody: {
          values,
        },
        valueInputOption: 'USER_ENTERED',
      });

      console.log('result', result);
    } catch (err) {
      console.log('err', err);
    }
  }

  return '';
}
