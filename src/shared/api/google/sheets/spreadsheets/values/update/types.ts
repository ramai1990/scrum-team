// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update
type QueryParameters = {
  spreadsheetId: string;
  range: string;
  resource: {
    values: string[][];
    majorDimension?: string;
  };
  valueInputOption?: string;
};

type Response = ReturnType<
  typeof gapi.client.sheets.spreadsheets.values.update
>;

export type { QueryParameters, Response };
