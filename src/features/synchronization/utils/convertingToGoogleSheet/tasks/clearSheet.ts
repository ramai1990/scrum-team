import { fetchBatchClear } from 'src/shared/api/google/sheets';

type Options = {
  spreadsheetId: string;
  sheetName: string;
  lib: typeof window.gapi;
};

const clearSheet = async ({ spreadsheetId, sheetName, lib }: Options) => {
  const response = await fetchBatchClear(
    {
      spreadsheetId,
      resource: {
        ranges: [sheetName],
      },
    },
    lib
  );

  return response;
};

export { clearSheet };
