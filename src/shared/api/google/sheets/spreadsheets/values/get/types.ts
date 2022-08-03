// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get

type QueryParameters = {
  spreadsheetId: string;
  range: string;

  majorDimension?: MajorDimension;
  valueRenderOption?: ValueRenderOption;
  dateTimeRenderOption?: DateTimeRenderOption;
};

type MajorDimension = 'ROWS' | 'COLUMNS';
type ValueRenderOption = 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
type DateTimeRenderOption = 'SERIAL_NUMBER' | 'FORMATTED_STRING';

// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#ValueRange
type Response = ReturnType<typeof gapi.client.sheets.spreadsheets.values.get>;

type SheetValues = {
  [key: string]: {
    title: string;
    columns: string[];
  };
};

export type { QueryParameters, Response, SheetValues };
