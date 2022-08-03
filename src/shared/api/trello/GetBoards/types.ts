type Response = Board[];

type Board = Partial<{
  name?: string;
  desc?: string;
  id?: string;
  prefs?: Prefs;
  memberships?: Membership[];
}>;

type Membership = {
  id?: string;
  idMember?: string;
  memberType?: string;
  unconfirmed?: boolean;
  deactivated?: boolean;
};

type Prefs = {
  permissionLevel?: PermissionLevel;
  hideVotes?: boolean;
  voting?: Voting;
  comments?: string;
  invitations?: any;
  selfJoin?: boolean;
  cardCovers?: boolean;
  isTemplate?: boolean;
  cardAging?: CardAging;
  calendarFeedEnabled?: boolean;
  hiddenPluginBoardButtons?: any[];
  background?: string;
  backgroundColor?: null | string;
  backgroundImage?: null | string;
  backgroundImageScaled?: BackgroundImageScaled[] | null;
  backgroundTile?: boolean;
  backgroundBrightness?: string;
  backgroundBottomColor?: string;
  backgroundTopColor?: string;
  canBePublic?: boolean;
  canBeEnterprise?: boolean;
  canBeOrg?: boolean;
  canBePrivate?: boolean;
  canInvite?: boolean;
};

type BackgroundImageScaled = {
  width?: number;
  height?: number;
  url?: string;
};

enum CardAging {
  Regular = 'regular',
  Pirate = 'pirate',
}

enum PermissionLevel {
  Org = 'org',
  Board = 'board',
}

enum Voting {
  Disabled = 'disabled',
  Enabled = 'enabled',
}

export type { Response, Board };
