import { FileInfo } from './types';

const containerWidth = 980;
const containerWidthFactor = 980 / 100;

const FILE_TYPE: Record<FileInfo['type'], string> = {
  board: 'board',
  sheet: 'sheet',
};

export { containerWidth, containerWidthFactor, FILE_TYPE };
