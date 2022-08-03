// https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-post

import type { LabelNames } from '../types';

type QueryParameters = {
  token: string;
  name: string;

  defaultLabels?: boolean;
  defaultLists?: boolean;
  desc?: string;
  idOrganization?: string;
  idBoardSource?: string;
  keepFromSource?: string;
  powerUps?: string;
  prefs_permissionLevel?: string;
  prefs_voting?: string;
  prefs_comments?: string;
  prefs_invitations?: string;
  prefs_selfJoin?: boolean;
  prefs_cardCovers?: boolean;
  prefs_background?: BackgroundColorQueryParameter;
  prefs_cardAging?: string;
};

type Response = {
  id?: string;
  name?: string;
  desc?: string;
  descData?: null;
  closed?: boolean;
  idOrganization?: string;
  idEnterprise?: null;
  pinned?: boolean;
  url?: string;
  shortUrl?: string;
  prefs?: Prefs;
  labelNames?: LabelNames;
  limits?: Limits;
  message?: string;
};

type BackgroundColorQueryParameter =
  | 'blue'
  | 'green'
  | 'purple'
  | 'pink'
  | 'grey'
  | 'sky'
  | 'lime'
  | 'orange'
  | 'red';

type Limits = {};

type Prefs = {
  permissionLevel: string;
  hideVotes: boolean;
  voting: string;
  comments: string;
  invitations: string;
  selfJoin: boolean;
  cardCovers: boolean;
  isTemplate: boolean;
  cardAging: string;
  calendarFeedEnabled: boolean;
  hiddenPluginBoardButtons: any[];
  background: BackgroundColorQueryParameter;
  backgroundColor: string;
  backgroundImage: null;
  backgroundImageScaled: null;
  backgroundTile: boolean;
  backgroundBrightness: string;
  backgroundBottomColor: string;
  backgroundTopColor: string;
  canBePublic: boolean;
  canBeEnterprise: boolean;
  canBeOrg: boolean;
  canBePrivate: boolean;
  canInvite: boolean;
};

export type { QueryParameters, Response };
