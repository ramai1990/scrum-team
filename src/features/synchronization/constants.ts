import { FileInfo, Status, SyncAction } from './types';

const FILE_TYPE: Record<FileInfo['type'], string> = {
  board: 'board',
  sheet: 'sheet',
};

const SYNC_ACTION: Record<SyncAction, string> = {
  sync: 'sync',
  rollback: 'rollback',
};

const STATUS: Record<Status, string> = {
  error: 'error',
  success: 'success',
  download: 'download',
  none: 'none',
};

export { FILE_TYPE, SYNC_ACTION, STATUS };
