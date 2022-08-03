import { Action } from 'redux';

type QueryParameters = {
  boardID: string;
  token: string;
};

// FIXME: обернуть в Partial и поправить все места использования
type Response = {
  id: string;
  idList: string;
  name: string;
  dateLastActivity: string;
  message: string;
};

type ResponseError = Partial<
  Action & {
    message: string;
  }
>;

export type { Response, ResponseError, QueryParameters };
