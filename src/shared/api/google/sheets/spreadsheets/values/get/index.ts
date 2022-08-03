import { fetch as fetchSpreadsheetValues } from './fetch';
import {
  QueryParameters as SpreadsheetValuesQueryParameters,
  Response as SpreadsheetValuesResponse,
  SheetValues,
} from './types';
import { getSheetValues } from './APIconverter';

export type {
  SpreadsheetValuesQueryParameters,
  SpreadsheetValuesResponse,
  SheetValues,
};

export { fetchSpreadsheetValues, getSheetValues };
