import { FC, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { LinearProgress } from 'src/shared/components';
import { getGoogleAPI } from 'src/shared/api/google';

import {
  rollingBackSyncTrelloToGoogle,
  rollingBackSyncGoogleToTrello,
  selectBoardToSheetConvertResponse,
  selectError,
  selectStatus,
  selectTrelloData,
  syncTrelloToGoogle,
  syncGoogleToTrello,
} from './redux/slice';
import { Message } from './view/components';
import {
  BoardListCards,
  BoardLists,
  FileInfo,
  Spreadsheet,
  SyncAction,
} from './types';
import { FILE_TYPE, STATUS, SYNC_ACTION } from './constants';

type Props = {
  fromFileInfo: FileInfo;
  toFileInfo: FileInfo;
  spreadsheet: Spreadsheet;
  boardLists: BoardLists;
  boardListCards: BoardListCards;
  gapi: ReturnType<typeof getGoogleAPI>;
  trelloToken: string | null;
  action?: SyncAction | null;
  onSyncEnd?: () => void;
};

const Synchronization: FC<Props> = ({
  fromFileInfo,
  toFileInfo,
  spreadsheet,
  boardLists,
  boardListCards,
  gapi,
  trelloToken,
  action = null,
  onSyncEnd,
}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const trelloData = useAppSelector(selectTrelloData);
  const boardToSheetConvertResponse = useAppSelector(
    selectBoardToSheetConvertResponse
  );

  const [syncAction, setSyncAction] = useState<SyncAction>('sync');

  useEffect(() => {
    const canSyncSheetToBoard =
      fromFileInfo.type === FILE_TYPE.sheet &&
      toFileInfo.type === FILE_TYPE.board &&
      action === SYNC_ACTION.sync &&
      trelloToken !== null &&
      fromFileInfo.details !== undefined &&
      status !== STATUS.download;
    if (!canSyncSheetToBoard) return;

    dispatch(
      syncGoogleToTrello({
        trelloToken,
        boardID: toFileInfo.id,
        sheetListValues: spreadsheet[`${fromFileInfo.details}`].values,
      })
    );
    onSyncEnd?.();
    setSyncAction('sync');
  }, [
    dispatch,
    status,
    fromFileInfo.type,
    fromFileInfo.details,
    toFileInfo.type,
    toFileInfo.id,
    action,
    trelloToken,
    spreadsheet,
    onSyncEnd,
  ]);

  useEffect(() => {
    const canRollingBackSyncSheetToBoard =
      fromFileInfo.type === FILE_TYPE.sheet &&
      toFileInfo.type === FILE_TYPE.board &&
      action === SYNC_ACTION.rollback &&
      trelloToken !== null &&
      status !== STATUS.download;
    if (!canRollingBackSyncSheetToBoard) return;

    dispatch(rollingBackSyncGoogleToTrello({ trelloData, trelloToken }));
    onSyncEnd?.();
    setSyncAction('rollback');
  }, [
    dispatch,
    status,
    trelloData,
    fromFileInfo.type,
    toFileInfo.type,
    action,
    trelloToken,
    onSyncEnd,
  ]);

  useEffect(() => {
    const canSyncBoardToSheet =
      fromFileInfo.type === FILE_TYPE.board &&
      toFileInfo.type === FILE_TYPE.sheet &&
      action === SYNC_ACTION.sync &&
      status !== STATUS.download;
    if (!canSyncBoardToSheet) return;

    dispatch(
      syncTrelloToGoogle({
        boardLists,
        boardListCards,
        spreadsheetID: toFileInfo.id,
        spreadsheetListName: `${toFileInfo.details}`,
        gapi,
      })
    );
    onSyncEnd?.();
    setSyncAction('sync');
  }, [
    dispatch,
    status,
    fromFileInfo.type,
    toFileInfo.type,
    toFileInfo.id,
    toFileInfo.details,
    action,
    boardLists,
    boardListCards,
    gapi,
    onSyncEnd,
  ]);

  useEffect(() => {
    const canRollingBackSyncBoardToSheet =
      fromFileInfo.type === FILE_TYPE.board &&
      toFileInfo.type === FILE_TYPE.sheet &&
      action === SYNC_ACTION.rollback &&
      status !== STATUS.download &&
      boardToSheetConvertResponse !== null;
    if (!canRollingBackSyncBoardToSheet) return;

    const { oldSheetValue } = boardToSheetConvertResponse;
    dispatch(
      rollingBackSyncTrelloToGoogle({
        oldSheetValue,
        spreadsheetID: toFileInfo.id,
        spreadsheetListName: `${toFileInfo.details}`,
        gapi,
      })
    );
    onSyncEnd?.();
    setSyncAction('rollback');
  }, [
    dispatch,
    status,
    fromFileInfo.type,
    toFileInfo.type,
    toFileInfo.id,
    toFileInfo.details,
    action,
    gapi,
    boardToSheetConvertResponse,
    onSyncEnd,
  ]);

  switch (status) {
    case STATUS.download:
      return <LinearProgress position="fixed-top" />;
    case STATUS.success:
      return (
        <Message
          fromFileInfo={fromFileInfo}
          toFileInfo={toFileInfo}
          action={syncAction}
        />
      );
    case STATUS.error:
      return (
        <Message
          fromFileInfo={fromFileInfo}
          toFileInfo={toFileInfo}
          action={syncAction}
          errorText={error}
          withError
        />
      );
    default:
      return null;
  }
};

export type { Props };

export { Synchronization };
