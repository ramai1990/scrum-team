import { QueryParameters, SheetValues } from './types';
import { fetch as fetchSpreadsheetValues } from './fetch';
import { createColumnTitles } from './utils';

const getSheetValues = async ({
  spreadsheetId,
  range,
}: Pick<QueryParameters, 'spreadsheetId' | 'range'>) => {
  const responseOfValues = await fetchSpreadsheetValues(
    {
      spreadsheetId,
      range,
      majorDimension: 'COLUMNS',
    },
    gapi
  );

  if (responseOfValues instanceof globalThis.Error) {
    return Promise.reject(responseOfValues);
  }

  if (responseOfValues.result.values === undefined) {
    return {};
  }

  const sheetValuesArr = responseOfValues.result.values;

  const columnTitles = sheetValuesArr?.map((val) => val[0]);
  const sheetColumns = sheetValuesArr?.map((val) => val.slice(1));
  const sheetValues: SheetValues = {};

  columnTitles?.forEach((title, index) => {
    const titleLetter = createColumnTitles(index);
    sheetValues[titleLetter] = {
      title,
      columns: sheetColumns[index],
    };
  });

  return Promise.resolve(sheetValues);
};

export { getSheetValues };
