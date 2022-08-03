// https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-lists-post

type List = {
  id: string;
  name: string;
  closed: boolean;
  pos: number;
  softLimit: string;
  idBoard: string;
  subscribed: boolean;
  limits: Limits;
};

type Limits = { attachments: Record<string, unknown> };

// https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-get

type Card = {
  id: string;
  address: string;
  badges: Record<string, unknown>;
  checkItemStates: string[];
  closed: boolean;
  coordinates: string;
  creationMethod: string;
  dateLastActivity: string;
  desc: string;
  descData: Record<string, unknown>;
  due: string;
  dueReminder: string;
  email: string;
  idBoard: string;
  idChecklists: (string | Checklist)[];
  idLabels: (Label | string)[];
  idList: string;
  idMembers: string[];
  idMembersVoted: string[];
  idShort: number;
  labels: Label[];
  limits: Record<string, unknown>;
  locationName: string;
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  subscribed: boolean;
  url: string;
  cover: Record<string, unknown>;
  message: string;
};

type Checklist = {
  id: string;
};

type Label = {
  id: string;
  idBoard: string;
  name: string;
  color: LabelColor;
};

type LabelNames = {
  green: string;
  yellow: string;
  orange: string;
  red: string;
  purple: string;
  blue: string;
  sky: string;
  lime: string;
  pink: string;
  black: string;
};

type LabelColor =
  | 'yellow'
  | 'purple'
  | 'blue'
  | 'red'
  | 'green'
  | 'orange'
  | 'black'
  | 'sky'
  | 'pink'
  | 'lime';

// https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-actions-get

type Action = {
  id: string;
  idMemberCreator: string;
  data: ActionData;
  type: string;
  date: string;
  limits: Record<string, unknown>;
  display: Record<string, unknown>;
  memberCreator: Member;
  message: string;
};

export interface ActionData {
  text: string;
  textData: Record<string, unknown>;
  card: Card;
  board: Record<string, unknown>;
  list: Record<string, unknown>;
}
// https://developer.atlassian.com/cloud/trello/rest/api-group-members/

type Member = {
  id: string;
  isAaMastered: boolean;
  aaId: string;
  activityBlocked: boolean;
  avatarHash: string;
  avatarUrl: string;
  bio: string;
  bioData: Record<string, unknown>;
  confirmed: boolean;
  fullName: string;
  idMemberReferrer: null;
  idPremOrgsAdmin: any[];
  initials: string;
  memberType: string;
  nonPublic: Record<string, unknown>;
  nonPublicAvailable: boolean;
  products: any[];
  url: string;
  username: string;
  status: string;
  aaBlockSyncUntil: null;
  aaEmail: null;
  aaEnrolledDate: null;
  avatarSource: string;
  credentialsRemovedCount: number;
  domainClaimed: null;
  email: string;
  goldSunsetFreeTrialIdOrganization: null;
  gravatarHash: string;
  idBoards: string[];
  idOrganizations: string[];
  idEnterprisesAdmin: any[];
  loginTypes: string[];
  marketingOptIn: Record<string, unknown>;
  messagesDismissed: Record<string, unknown>;
  oneTimeMessagesDismissed: string[];
  prefs: MemberPrefs;
  trophies: any[];
  uploadedAvatarHash: null;
  uploadedAvatarUrl: null;
  premiumFeatures: string[];
  ixUpdate: string;
  idEnterprise: null;
  idEnterprisesDeactivated: any[];
  limits: LimitsObject;
};

type LimitsObject = {
  status: string;
  disableAt: number;
  warnAt: number;
};

type MemberPrefs = {
  timezoneInfo: Record<string, unknown>;
  privacy: Record<string, unknown>;
  sendSummaries: boolean;
  minutesBetweenSummaries: number;
  minutesBeforeDeadlineToNotify: number;
  colorBlind: boolean;
  locale: string;
  timezone: string;
  twoFactor: Record<string, unknown>;
};

// https://stackoverflow.com/questions/39526519/how-to-retrieve-user-avatar-from-a-trello-api

type AvatarSize = '30' | '50' | '170' | 'original';
type AvatarExtension = 'png' | 'jpg';
type AvatarCorrectSize = `${AvatarSize}.${AvatarExtension}`;

export type {
  List,
  Limits,
  Card,
  Checklist,
  Label,
  LabelNames,
  LabelColor,
  Action,
  Member,
  AvatarSize,
  AvatarExtension,
  AvatarCorrectSize,
};
