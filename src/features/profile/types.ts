import { RequestStatus } from 'src/shared/helpers/redux';

type State = {
  avatarURL: string;
  fullName: string;
  description: string;
  boardIDs: string[];
  status: RequestStatus;
  error: string | null;
};

export type { State };
