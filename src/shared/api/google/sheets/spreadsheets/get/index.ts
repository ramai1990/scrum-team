import { fetch as fetchSpreadsheet } from './fetch';
import {
  QueryParameters as SpreadsheetQueryParameters,
  Response as SpreadsheetResponse,
  SpreadsheetValues,
} from './types';
import { getSheetData } from './APIconverter';

export type {
  SpreadsheetQueryParameters,
  SpreadsheetResponse,
  SpreadsheetValues,
};

export { fetchSpreadsheet, getSheetData };
