import { fetchSpreadsheetValues } from 'src/shared/api/google/sheets';

type Options = {
  spreadsheetId: string;
  sheetName: string;
  lib: typeof window.gapi;
};

const getValues = async ({ spreadsheetId, sheetName, lib }: Options) => {
  const valueResponse = await fetchSpreadsheetValues(
    {
      spreadsheetId,
      range: sheetName,
      majorDimension: 'COLUMNS',
    },
    lib
  );

  return valueResponse;
};

export { getValues };
