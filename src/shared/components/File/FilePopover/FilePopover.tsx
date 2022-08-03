import { PopoverActions, useTheme } from '@mui/material';
import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';

import { Box } from '../../Box/Box';
import { Popover } from '../../Popover/Popover';
import { createStyles } from './FilePopover.style';

type Props = {
  isOpen: boolean;
  content: ReactNode;
  anchorElement: Element | null;
  onClose: () => void;
};

const FilePopover: FC<Props> = ({
  isOpen,
  content,
  anchorElement,
  onClose,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const popoverActions = useRef<PopoverActions>(null);

  const updatePosition = useCallback(() => {
    if (popoverActions.current === null) return;
    popoverActions.current.updatePosition();
  }, []);

  useEffect(() => {
    // FIXME: обновление позиции из-за смещения popover-а при динамическом изменении его содержимого. без цикличного обновления позиции, при динамическом изменении контента внутри popover-а, произойдет смещение самого popover-а относительно той точки по которой он должен быть центрирован. проблема не учтенная в mui popover и корректируемая updatePosition.
    const interval = setInterval(updatePosition);

    return () => {
      clearInterval(interval);
    };
  }, [content, updatePosition]);

  return (
    <Popover
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      open={isOpen}
      anchorEl={anchorElement}
      action={popoverActions}
      onClose={onClose}
    >
      <Box css={styles.content}>{content}</Box>
    </Popover>
  );
};

export type { Props };

export { FilePopover };
