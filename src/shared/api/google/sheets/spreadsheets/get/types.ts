// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get

type QueryParameters = {
  spreadsheetId: string;

  ranges?: [];
  includeGridData?: boolean;
};

// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets#Spreadsheet

type Response = ReturnType<typeof gapi.client.sheets.spreadsheets.get>;

type SpreadsheetValues = {
  [key: string]: {
    values: {
      [key: string]: {
        title: string;
        columns: string[];
      };
    };
    id: number;
  };
};

export type { QueryParameters, Response, SpreadsheetValues };
