// https://developer.atlassian.com/cloud/trello/rest/api-group-lists/#api-lists-id-closed-put

import { List } from '../types';

type QueryParameters = {
  token: string;
  listID: string;
  closed: boolean;
};

type Response = Partial<
  Pick<List, 'closed' | 'id' | 'idBoard' | 'name' | 'pos'>
>;

export type { QueryParameters, Response };
