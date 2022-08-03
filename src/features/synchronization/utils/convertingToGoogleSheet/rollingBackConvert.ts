import { clearSheet, updateSheet } from './tasks';
import { SheetValue } from './types';

type Options = {
  sheetName: string;
  spreadsheetId: string;
  oldSheetValue: SheetValue;
  lib: typeof window.gapi;
};

const rollingBackConvert = async ({
  sheetName,
  spreadsheetId,
  oldSheetValue,
  lib,
}: Options) => {
  await clearSheet({ spreadsheetId, sheetName, lib });

  const response = await updateSheet({
    sheetName,
    value: oldSheetValue,
    spreadsheetId,
    lib,
  });

  return response;
};

export { rollingBackConvert };
