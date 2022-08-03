import {
  fetchUpdateSheet,
  UpdateSheetQueryParameters,
} from 'src/shared/api/google/sheets';

type Options = {
  spreadsheetId: string;
  sheetName: string;
  value: string[][];
  lib: typeof window.gapi;
};

const updateSheet = async ({
  spreadsheetId,
  sheetName,
  value,
  lib,
}: Options) => {
  const updateSheetQueryParams: UpdateSheetQueryParameters = {
    spreadsheetId,
    range: sheetName,
    resource: {
      majorDimension: 'COLUMNS',
      values: value,
    },
  };

  const response = await fetchUpdateSheet(updateSheetQueryParams, lib);

  return response;
};

export { updateSheet };
