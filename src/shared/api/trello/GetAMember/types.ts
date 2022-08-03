import type { Member } from '../types';

// https://developer.atlassian.com/cloud/trello/rest/api-group-members/
type QueryParameters = {
  token: string;
  id: string;

  actions?: string;
  boards?: string;
  boardBackgrounds?: 'all' | 'custom' | 'default' | 'none' | 'premium';
  boardsInvited?: 'all' | string;
  boardsInvited_fields?: 'all' | string;
  boardStars?: boolean;
  cards?: string;
  customBoardBackgrounds?: 'all' | 'none';
  customEmoji?: 'all' | 'none';
  customStickers?: 'all' | 'none';
  fields?: string;
  notifications?: string;
  organizations?: 'all' | 'members' | 'none' | 'public';
  organization_fields?: 'all' | string;
  organization_paid_account?: boolean;
  organizationsInvited?: 'all' | 'members' | 'none' | 'public';
  organizationsInvited_fields?: 'all' | string;
  paid_account?: boolean;
  savedSearches?: boolean;
  tokens?: 'all' | 'none';
};
type Response = Partial<Member>;

export type { QueryParameters, Response };
