import type { Card } from '../types';

// https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-get

type QueryParameters = {
  token: string;
  id: string;

  fields?: 'all' | string;
  actions?: string;
  attachments?: boolean | 'cover';
  attachment_fields?: 'all' | string;
  members?: boolean;
  member_fields?: 'all' | string;
  membersVoted?: boolean;
  memberVoted_fields?: 'all' | string;
  checkItemStates?: boolean;
  checklists?: 'all' | 'none';
  checklist_fields?: 'all' | string;
  board?: boolean;
  board_fields?: 'all' | string;
  list?: boolean;
  pluginData?: boolean;
  stickers?: boolean;
  sticker_fields?: 'all' | string;
  customFieldItems?: boolean;
};

type Response = Partial<Card>;

export type { QueryParameters, Response };
