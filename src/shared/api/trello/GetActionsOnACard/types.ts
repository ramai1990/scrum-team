import { Action } from '../types';

// https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-actions-get

type QueryParameters = {
  token: string;
  id: string;

  filter?: string;
};

type Response = Partial<Action>;

export type { QueryParameters, Response };
