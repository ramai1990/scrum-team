import { useState, useRef } from 'react';
import { useTheme } from '@mui/material';
import Script from 'next/script';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { DefaultLayout } from 'src/modules/shared';
import { selectToken } from 'src/features/trelloAuthorization';
import { selectCardLists, selectCards } from 'src/features/board';
import { selectItems } from 'src/features/spreadsheet';
import {
  selectFromFileType,
  selectSyncStatus,
  selectToFileType,
  setFromFileType,
  setToFileType,
  Synchronization,
  syncStatusReset,
} from 'src/features/synchronization';
import { FileInfo } from 'src/features/synchronization/types';
import { selectProfile as trelloProfile } from 'src/features/profile/redux/selectors';
import { selectProfile as googleProfile } from 'src/features/googleProfile/redux/slice';
import type { NextPageWithLayout } from 'src/shared/types';
import type { DragEvent } from 'src/shared/components/File/types';
import {
  PageHead,
  Box,
  Arrow,
  File,
  Footer,
  Container,
} from 'src/shared/components';
import { getGoogleAPI } from 'src/shared/api/google';
import { isGoogleSignedIn } from 'src/shared/api/google/identity';

import { routes as routesTrello } from '../Trello/constants';
import { routes as routesGoogle } from '../Google/constants';
import { Files } from './containers';
import { containerWidth, FILE_TYPE } from './constants';
import { isAuthByType } from './utils';
import { FileType, FileTypes, SyncAction } from './types';
import { createStyles } from './Home.style';

const Home: NextPageWithLayout = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const dispatch = useAppDispatch();

  const trelloHref = routesTrello.self;
  const googleHref = routesGoogle.self;

  const trelloToken = useAppSelector(selectToken);
  const { fullName: trelloUser } = useAppSelector(trelloProfile);
  const isTrelloTokenIsNotNull = trelloToken !== null;
  const trelloUserName = isTrelloTokenIsNotNull ? trelloUser : 'Авторизоваться';

  const gapi = getGoogleAPI();
  const isGapiNotUndefined = gapi !== undefined;
  const gapiIsReady = isGapiNotUndefined && isGoogleSignedIn(gapi);
  const { fullName: googleUser } = useAppSelector(googleProfile);
  const googleUserName = gapiIsReady ? googleUser : 'Авторизоваться';

  const users = [
    {
      service: 'Trello',
      name: trelloUserName,
      href: trelloHref,
    },
    {
      service: 'Google',
      name: googleUserName,
      href: googleHref,
    },
  ];

  const boardLists = useAppSelector(selectCardLists);
  const boardListCards = useAppSelector(selectCards);
  const spreadsheet = useAppSelector(selectItems);

  const syncStatus = useAppSelector(selectSyncStatus);

  const leftFileType = useAppSelector(selectFromFileType);
  const rightFileType = useAppSelector(selectToFileType);

  const leftFileTargetRef = useRef(null);
  const rightFileTargetRef = useRef(null);
  const [dragOverLeftFile, setDragOverLeftFile] = useState(false);
  const [dragOverRightFile, setDragOverRightFile] = useState(false);

  const [syncAction, setSyncAction] = useState<SyncAction>(null);

  const [leftFileInfo, setLeftFileInfo] = useState<FileInfo>();
  const [rightFileInfo, setRightFileInfo] = useState<FileInfo>();

  const isFilesSelected =
    leftFileInfo !== undefined && rightFileInfo !== undefined;

  const isLeftFileAuth = () => {
    return isAuthByType(leftFileType, trelloToken, gapi);
  };

  const isRightFileAuth = () => {
    return isAuthByType(rightFileType, trelloToken, gapi);
  };

  const authWarningHref = (type: FileType) => {
    switch (type) {
      case FILE_TYPE.board: {
        return trelloHref;
      }
      case FILE_TYPE.sheet: {
        return googleHref;
      }
      default:
        return 'default';
    }
  };

  const changeFileTypes = ({ fromFileType, toFileType }: FileTypes) => {
    const isSameTypeForLeftFile = fromFileType === leftFileType;
    const isSameTypeForRightFile = toFileType === rightFileType;

    if (!isSameTypeForLeftFile) {
      dispatch(setFromFileType(fromFileType));
      setLeftFileInfo(undefined);
    }

    if (!isSameTypeForRightFile) {
      dispatch(setToFileType(toFileType));
      setRightFileInfo(undefined);
    }

    dispatch(syncStatusReset());
  };

  const handleFileDrag = ({ overTarget, type, isDrop }: DragEvent) => {
    const isOverTargetLeftFile = overTarget === leftFileTargetRef;
    const isOverTargetRightFile = overTarget === rightFileTargetRef;
    const isOverTargetLeftFileDrop = isOverTargetLeftFile && isDrop;
    const isOverTargetRightFileDrop = isOverTargetRightFile && isDrop;
    const isDragOverLeftFile = isOverTargetLeftFile && !isDrop;
    const isDragOverRightFile = isOverTargetRightFile && !isDrop;
    const oppositeType: FileType = type === FILE_TYPE.board ? 'sheet' : 'board';

    setDragOverLeftFile(isDragOverLeftFile);
    setDragOverRightFile(isDragOverRightFile);

    if (isOverTargetLeftFileDrop) {
      changeFileTypes({ fromFileType: type, toFileType: oppositeType });
    }

    if (isOverTargetRightFileDrop) {
      changeFileTypes({ fromFileType: oppositeType, toFileType: type });
    }
  };

  const handleLeftFilesSelect = (fileInfo: FileInfo) => {
    setLeftFileInfo(fileInfo);
    dispatch(syncStatusReset());
  };

  const handleRightFilesSelect = (fileInfo: FileInfo) => {
    setRightFileInfo(fileInfo);
    dispatch(syncStatusReset());
  };

  const handleSynchronizationSyncEnd = () => {
    setSyncAction(null);
  };

  const handleFooterOnPlay = () => {
    if (!isFilesSelected) return;
    setSyncAction('sync');
  };

  const handleFooterOnStop = () => {
    if (!isFilesSelected) return;
    setSyncAction('rollback');
  };

  return (
    <>
      <PageHead title="Интегратор - главная страница" />
      <Script
        defer
        strategy="beforeInteractive"
        src="https://apis.google.com/js/api.js"
      />
      <Container>
        <Box css={styles.root()} maxWidth={containerWidth} component="main">
          <Box css={styles.grid()}>
            <Box css={styles.leftFile()}>
              <File
                size="large"
                type={leftFileType}
                title={leftFileInfo?.title}
                details={leftFileInfo?.details}
                isAuth={isLeftFileAuth()}
                ref={leftFileTargetRef}
                authWarningHref={authWarningHref(leftFileType)}
                dropReady={dragOverLeftFile}
                popoverContent={
                  <Files type={leftFileType} onSelect={handleLeftFilesSelect} />
                }
              />
            </Box>
            <Box css={styles.arrow()}>
              <Arrow convertingStatus={syncStatus} />
            </Box>
            <Box css={styles.rightFile()}>
              <File
                size="large"
                type={rightFileType}
                title={rightFileInfo?.title}
                details={rightFileInfo?.details}
                isAuth={isRightFileAuth()}
                ref={rightFileTargetRef}
                authWarningHref={authWarningHref(rightFileType)}
                dropReady={dragOverRightFile}
                popoverContent={
                  <Files
                    type={rightFileType}
                    onSelect={handleRightFilesSelect}
                  />
                }
              />
            </Box>
            <Box css={styles.syncMessage()}>
              {isFilesSelected && (
                <Synchronization
                  fromFileInfo={leftFileInfo}
                  toFileInfo={rightFileInfo}
                  spreadsheet={spreadsheet}
                  boardLists={boardLists}
                  boardListCards={boardListCards}
                  gapi={gapi}
                  trelloToken={trelloToken}
                  action={syncAction}
                  onSyncEnd={handleSynchronizationSyncEnd}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer
        users={users}
        targets={[leftFileTargetRef, rightFileTargetRef]}
        onDrag={handleFileDrag}
        onPlay={handleFooterOnPlay}
        onStop={handleFooterOnStop}
      ></Footer>
    </>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout withHeader>{page}</DefaultLayout>;
};

export { Home };
