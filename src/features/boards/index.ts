import { goToBoard, reducer as boardsReducer } from './redux/slice';
import { Boards, Props as BoardsProps } from './Boards';

export type { BoardsProps };

export { boardsReducer, goToBoard, Boards };
