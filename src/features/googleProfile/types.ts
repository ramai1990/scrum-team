import { RequestStatus } from 'src/shared/helpers/redux';

type State = {
  avatarURL: string;
  fullName: string;
  dateOfBirth: string | null;
  email: string | null;
  phoneNumber: string | null;
  status: RequestStatus;
  error: string | null;
};

export type { State };
