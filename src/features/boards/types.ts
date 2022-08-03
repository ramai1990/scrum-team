import { RequestStatus } from 'src/shared/helpers/redux';
import { Item as ButtonListItem } from 'src/shared/components/ButtonList/types';

interface State {
  items: Board[];
  displayedItems: number;
  routeToChosen: string | null;
  status: RequestStatus;
  error: string | null;
}

type Board = {
  id: string;
  name: string;
  desc: string;
  members: number;
  color?: string | null;
  image?: string | null;
};

export type { Board, State, ButtonListItem };
