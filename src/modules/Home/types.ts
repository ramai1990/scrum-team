import { ButtonListItem as BoardsItem } from 'src/features/boards/types';
import { ButtonListItem as SpreadsheetsItem } from 'src/features/spreadsheets/types';
import { Synchronization } from 'src/features/synchronization';
import { File } from 'src/shared/components';

type FileType = Required<Parameters<typeof File>['0']['type']>;

type FileInfo = Required<
  | Parameters<typeof Synchronization>['0']['fromFileInfo']
  | Parameters<typeof Synchronization>['0']['toFileInfo']
>;

type SyncAction = Required<Parameters<typeof Synchronization>['0']['action']>;

type FileTypes = {
  fromFileType: FileType;
  toFileType: FileType;
};

export type {
  FileType,
  FileInfo,
  SyncAction,
  BoardsItem,
  SpreadsheetsItem,
  FileTypes,
};
