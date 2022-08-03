import FileDefaultIcon from './images/file-default.svg';
import FileSheetIcon from './images/file-sheet.svg';
import FileSheetSmallIcon from './images/file-sheet-small.svg';
import FileTrelloIcon from './images/file-trello.svg';

const DEFAULT_VIEW_BOX = '0 0 170 190';
const BOARD_VIEW_BOX = '0 0 170 170';
const SHEET_SMALL_VIEW_BOX = '37 0 50 74';

const DEFAULT_DESCRIPTION = 'Unknown file';
const SHEET_DESCRIPTION = 'Google sheet';
const BOARD_DESCRIPTION = 'Trello board';

const DEFAULT_SMALL_WIDTH = 50;
const DEFAULT_SMALL_HEIGHT = 56;
const DEFAULT_LARGE_WIDTH = 170;
const DEFAULT_LARGE_HEIGHT = 190;
const SHEET_SMALL_HEIGHT = 74;

const DEFAULT_ASPECT_RATIO = '17 / 19';
const BOARD_ASPECT_RATIO = '1 / 1';
const SHEET_SMALL_ASPECT_RATIO = '25 / 37';

const DEFAULT_BORDER_RADIUS = '12%';
const SHEET_BORDER_RADIUS = '7%';
const BOARD_BORDER_RADIUS = '13%';

const MIN_SIZE = 40;

const PRESETS = {
  default: {
    small: {
      icon: FileDefaultIcon,
      viewBox: DEFAULT_VIEW_BOX,
      description: DEFAULT_DESCRIPTION,
      width: DEFAULT_SMALL_WIDTH,
      height: DEFAULT_SMALL_HEIGHT,
      aspectRatio: DEFAULT_ASPECT_RATIO,
      borderRadius: DEFAULT_BORDER_RADIUS,
    },
    large: {
      icon: FileDefaultIcon,
      viewBox: DEFAULT_VIEW_BOX,
      description: DEFAULT_DESCRIPTION,
      width: DEFAULT_LARGE_WIDTH,
      height: DEFAULT_LARGE_HEIGHT,
      aspectRatio: DEFAULT_ASPECT_RATIO,
      borderRadius: DEFAULT_BORDER_RADIUS,
    },
  },
  sheet: {
    small: {
      icon: FileSheetSmallIcon,
      viewBox: SHEET_SMALL_VIEW_BOX,
      description: SHEET_DESCRIPTION,
      width: DEFAULT_SMALL_WIDTH,
      height: SHEET_SMALL_HEIGHT,
      aspectRatio: SHEET_SMALL_ASPECT_RATIO,
      borderRadius: SHEET_BORDER_RADIUS,
    },
    large: {
      icon: FileSheetIcon,
      viewBox: DEFAULT_VIEW_BOX,
      description: SHEET_DESCRIPTION,
      width: DEFAULT_LARGE_WIDTH,
      height: DEFAULT_LARGE_HEIGHT,
      aspectRatio: DEFAULT_ASPECT_RATIO,
      borderRadius: SHEET_BORDER_RADIUS,
    },
  },
  board: {
    small: {
      icon: FileTrelloIcon,
      viewBox: BOARD_VIEW_BOX,
      description: BOARD_DESCRIPTION,
      width: DEFAULT_SMALL_WIDTH,
      height: DEFAULT_SMALL_WIDTH,
      aspectRatio: BOARD_ASPECT_RATIO,
      borderRadius: BOARD_BORDER_RADIUS,
    },
    large: {
      icon: FileTrelloIcon,
      viewBox: BOARD_VIEW_BOX,
      description: BOARD_DESCRIPTION,
      width: DEFAULT_LARGE_WIDTH,
      height: DEFAULT_LARGE_WIDTH,
      aspectRatio: BOARD_ASPECT_RATIO,
      borderRadius: BOARD_BORDER_RADIUS,
    },
  },
};

const POINTER_ON_ICON_X = 0.5;
const POINTER_ON_ICON_Y = 0.85;

export { PRESETS, POINTER_ON_ICON_X, POINTER_ON_ICON_Y, MIN_SIZE };
