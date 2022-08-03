import { ERROR, SUCCESS, DOWNLOAD, NONE } from './constants';

type Status = typeof ERROR | typeof SUCCESS | typeof DOWNLOAD | typeof NONE;

export type { Status };
