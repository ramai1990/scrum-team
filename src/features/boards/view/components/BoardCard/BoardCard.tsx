import { useTheme } from '@mui/material';
import {
  FC,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  useCallback,
} from 'react';

import { Button, Card, Typography } from 'src/shared/components';

import { CALC_OFFSET, DESC_LINE_HEIGHT, NAME_LINE_HEIGHT } from './constants';
import { createStyles } from './BoardCard.style';

type Props = {
  name: string;
  desc: string;
  members: number;
  color?: string | null;
  image?: string | null;
  href: string;
  onGoToBoard: (routeToChosen: string) => void;
};

const BoardCard: FC<Props> = ({
  href,
  name,
  desc,
  members,
  color = null,
  image = null,
  onGoToBoard,
}) => {
  const [hover, setHover] = useState(false);
  const [tap, setTap] = useState(false);
  const [descLines, setDescLines] = useState(5);
  const [nameLines, setNameLines] = useState(1);
  const nameWrapperRef = useRef<HTMLDivElement>(null);
  const descWrapperRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const styles = createStyles(
    { color, image, hover, descLines, nameLines },
    theme
  );

  const changeDescLines = useCallback(() => {
    if (!(descWrapperRef.current instanceof HTMLDivElement)) return;
    const { offsetHeight } = descWrapperRef.current;
    const linesCount = Math.round(
      (offsetHeight - CALC_OFFSET) / DESC_LINE_HEIGHT
    );
    if (linesCount < 1) setDescLines(1);
    else if (linesCount > 5) setDescLines(5);
    else setDescLines(linesCount);
  }, [setDescLines]);

  const changeNameLines = useCallback(() => {
    if (!(nameWrapperRef.current instanceof HTMLDivElement)) return;
    const { offsetHeight } = nameWrapperRef.current;

    if (offsetHeight + CALC_OFFSET < NAME_LINE_HEIGHT * 2) {
      setNameLines(1);
    } else {
      setNameLines(2);
    }
  }, [setNameLines]);

  const handleWindowResize = useCallback(() => {
    changeDescLines();
    changeNameLines();
  }, [changeDescLines, changeNameLines]);

  const handleDocumentPointerDown = () => {
    setHover(false);
    setTap(false);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize, false);
    document.addEventListener('pointerdown', handleDocumentPointerDown, false);

    return function cleanup() {
      window.removeEventListener('resize', handleWindowResize);
      document.removeEventListener('pointerdown', handleDocumentPointerDown);
    };
  }, [handleWindowResize]);

  const handleRootPointerEnter = () => {
    setHover(true);
  };

  const handleRootPointerLeave = () => {
    if (!tap) {
      setHover(false);
    }
  };

  const handleRootFocus = () => {
    setHover(true);
    setTap(true);
  };

  const handleRootPointerDown = (event: MouseEvent) => {
    event.stopPropagation();
    handleRootFocus();
  };

  const handleButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    onGoToBoard(href);
  };

  const handleButtonBlur = () => {
    setHover(false);
    setTap(false);
  };

  return (
    <Card
      css={styles.root}
      tabIndex={0}
      content={{
        css: styles.content,
        children: (
          <>
            <div css={styles.nameWrapper} ref={nameWrapperRef}>
              <Typography css={styles.name}>{name}</Typography>
            </div>
            <div css={styles.descWrapper} ref={descWrapperRef}>
              <Typography css={styles.desc}>{desc}</Typography>
            </div>
            <Typography css={styles.members}>Members: {members}</Typography>
          </>
        ),
      }}
      actions={{
        css: styles.actions,
        children: (
          <Button
            css={styles.button}
            variant="contained"
            href={href}
            onClick={handleButtonClick}
            onBlur={handleButtonBlur}
          >
            Go to Board
          </Button>
        ),
      }}
      onPointerEnter={handleRootPointerEnter}
      onPointerLeave={handleRootPointerLeave}
      onPointerDown={handleRootPointerDown}
      onFocus={handleRootFocus}
    />
  );
};

export type { Props };

export { BoardCard };
