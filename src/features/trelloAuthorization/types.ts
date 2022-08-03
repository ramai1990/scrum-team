type State = {
  token: string | null;
};

// https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/
type ScopeValue = 'read' | 'write' | 'account';
type ScopeVariants =
  | `${ScopeValue}`
  | `${ScopeValue},${ScopeValue}`
  | `${ScopeValue},${ScopeValue},${ScopeValue}`;

type ExpirationValue = '1hour' | '1day' | '30days' | 'never';

export type { State, ScopeVariants, ExpirationValue };
