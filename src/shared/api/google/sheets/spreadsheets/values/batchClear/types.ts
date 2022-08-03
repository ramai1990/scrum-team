// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear

type QueryParameters = {
  spreadsheetId: string;
  resource: {
    ranges: string[];
  };
};

type Response = ReturnType<
  typeof gapi.client.sheets.spreadsheets.values.batchClear
>;

export type { QueryParameters, Response };
