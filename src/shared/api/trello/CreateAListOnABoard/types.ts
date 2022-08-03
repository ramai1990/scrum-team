// https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-lists-post

import { List } from '../types';

type QueryParameters = {
  token: string;
  boardID: string;
  name: string;

  pos?: 'top' | 'bottom' | number;
};

type Response = Partial<List>;

export type { QueryParameters, Response };
