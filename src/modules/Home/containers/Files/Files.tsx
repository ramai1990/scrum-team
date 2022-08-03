import { FC, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { getBoardData, selectCardLists, selectCards } from 'src/features/board';
import { Boards } from 'src/features/boards';
import { Spreadsheet } from 'src/features/spreadsheet';
import { Spreadsheets } from 'src/features/spreadsheets';
import { FileInfo } from 'src/features/synchronization/types';
import { selectToken } from 'src/features/trelloAuthorization';
import { getGoogleAPI } from 'src/shared/api/google';
import { isGoogleSignedIn } from 'src/shared/api/google/identity';
import { Box, LinearProgress } from 'src/shared/components';

import { FILE_TYPE } from '../../constants';
import { BoardsItem, FileType, SpreadsheetsItem } from '../../types';

type Props = {
  type: FileType;
  onSelect: (fileInfo: FileInfo) => void;
};

const Files: FC<Props> = ({ type, onSelect }) => {
  const [isLoadBoardProgress, setIsLoadBoardProgress] = useState(false);
  const [selectedSheet, setSelectedSheet] = useState<SpreadsheetsItem>();

  const dispatch = useAppDispatch();

  const boardCards = useAppSelector(selectCards);
  const boardLists = useAppSelector(selectCardLists);

  const trelloToken = useAppSelector(selectToken);
  const gapi = getGoogleAPI();

  useEffect(() => {
    setIsLoadBoardProgress(false);
  }, [boardLists, boardCards]);

  const handleBoardsSelect = ({ id, name }: BoardsItem) => {
    if (trelloToken === null) return;
    dispatch(getBoardData({ boardID: id, token: trelloToken }));
    setIsLoadBoardProgress(true);
    const boardURL = `https://trello.com/b/${id}`;
    onSelect({ title: name, url: boardURL, type: 'board', id });
  };

  const handleSpreadsheetsSelect = (item: SpreadsheetsItem) => {
    setSelectedSheet(item);
  };

  const handleSpreadsheetSelect = ({ id, name }: SpreadsheetsItem) => {
    if (selectedSheet === undefined) return;
    const sheetURL = `https://docs.google.com/spreadsheets/d/${selectedSheet.id}/edit#gid=${id}`;
    onSelect({
      title: selectedSheet.name,
      url: sheetURL,
      details: name,
      type: 'sheet',
      id: selectedSheet.id,
    });
  };

  switch (type) {
    case FILE_TYPE.board:
      return trelloToken !== null ? (
        <Box>
          {isLoadBoardProgress && <LinearProgress position="fixed-top" />}
          <Boards
            token={trelloToken}
            isFlatList
            onSelect={handleBoardsSelect}
          />
        </Box>
      ) : null;
    case FILE_TYPE.sheet: {
      const gapiIsReady = gapi !== undefined && isGoogleSignedIn(gapi);

      if (!gapiIsReady) return null;

      if (selectedSheet !== undefined) {
        return (
          <Spreadsheet
            spreadsheetID={selectedSheet.id}
            isTitleList
            onSelect={handleSpreadsheetSelect}
          />
        );
      }

      return (
        <Spreadsheets
          gapi={gapi}
          isFlatList
          onSelect={handleSpreadsheetsSelect}
        />
      );
    }
    default:
      return null;
  }
};

export type { Props };

export { Files };
