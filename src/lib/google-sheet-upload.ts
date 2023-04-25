import getSheetsService from 'services/google-sheets';

export default async function googleSheetFileUpload(
  spreadsheetId = '',
  range: string,
  values: string[]
) {
  try {
    const result = await getSheetsService().spreadsheets.values.append({
      spreadsheetId,
      range,
      requestBody: {
        values: [values],
      },
      valueInputOption: 'USER_ENTERED',
    });
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}
