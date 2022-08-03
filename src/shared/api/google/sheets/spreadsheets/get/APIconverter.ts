import { getSheetValues } from '../values/get';
import { fetch as fetchSpreadsheet } from './fetch';
import { SpreadsheetValues } from './types';

const getSheetData = async (spreadsheetId: string) => {
  const responseOfSpreadsheet = await fetchSpreadsheet({ spreadsheetId }, gapi);

  if (responseOfSpreadsheet instanceof globalThis.Error) {
    return Promise.reject(responseOfSpreadsheet);
  }

  if (responseOfSpreadsheet.result.sheets === undefined) {
    return Promise.reject(new Error('Sheets undefined'));
  }

  const { sheets } = responseOfSpreadsheet.result;
  const sheetIDs = sheets?.map((el) => el.properties?.sheetId);
  const sheetTitles = sheets?.map((el) => el.properties?.title);
  const spreadsheetValues: SpreadsheetValues = {};

  await Promise.all(
    sheetTitles.map((title) => {
      if (title === undefined) {
        return Promise.reject(new Error('title undefined'));
      }

      const sheetValues = getSheetValues({
        spreadsheetId,
        range: title,
      });

      return sheetValues;
    })
  ).then((sheetValues) => {
    sheetValues.forEach((val, i) => {
      const title = sheetTitles[i];
      const id = sheetIDs[i];
      const isUndefined = title === undefined || id === undefined;
      if (isUndefined) return;

      spreadsheetValues[title] = {
        values: val,
        id,
      };
    });
  });

  return Promise.resolve(spreadsheetValues);
};

export { getSheetData };
