import { Card, Action, Member } from 'src/shared/api/trello/types';
import type { RequestStatus } from 'src/shared/helpers/redux';

type CardData = Pick<
  Card,
  'id' | 'dateLastActivity' | 'desc' | 'name' | 'url' | 'labels'
> & {
  members: Pick<Member, 'id' | 'avatarUrl' | 'fullName'>[];
  board: { id: string; name: string };
} & {
  comments: (Pick<
    Action,
    | 'id'
    | 'idMemberCreator'
    | 'data'
    | 'type'
    | 'date'
    | 'limits'
    | 'memberCreator'
  > & { appCreator: unknown })[];
};

type State = {
  data: CardData | null;
  status: RequestStatus;
  error?: string | null;
};

export type { State, CardData };
