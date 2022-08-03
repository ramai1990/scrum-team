import {
  useRef,
  useState,
  forwardRef,
  PropsWithChildren,
  MutableRefObject,
  MouseEvent,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { useTheme } from '@mui/material';

import { Box } from '../Box/Box';
import { AuthWarningPopper } from './AuthWarningPopper/AuthWarningPopper';
import { WarningButton } from './WarningButton/WarningButton';
import { FilePopover } from './FilePopover/FilePopover';
import { FileButton } from './FileButton/FileButton';
import { createStyles } from './File.style';
import type { DragEvent, Size, Type } from './types';

type Props = {
  size?: Size;
  type?: Type;
  href?: string;
  authWarningHref?: string;
  title?: string | null;
  titleRows?: number;
  details?: string | null;
  isAuth?: boolean;
  isGhost?: boolean;
  dropReady?: boolean;
  targets?: MutableRefObject<null>[];
  popoverContent?: ReactNode;
  onDrag?: (event: DragEvent) => void;
  onClick?: () => void;
  onPointerEnter?: () => void;
  onPointerDown?: () => void;
  onPointerLeave?: () => void;
};

const File = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const {
      size = 'small',
      type = 'default',
      href = undefined,
      authWarningHref = '/mock',
      title = null,
      titleRows = 2,
      details = null,
      isAuth = false,
      isGhost = false,
      dropReady = false,
      popoverContent = null,
      targets = [],
      onDrag,
      onClick,
      onPointerEnter,
      onPointerDown,
      onPointerLeave,
    } = props;
    const [ghost, setGhost] = useState(isGhost);
    const [popoverAnchorElement, setPopoverAnchorElement] =
      useState<Element | null>(null);
    const [popperAnchorElement, setPopperAnchorElement] =
      useState<HTMLDivElement | null>(null);
    const button = useRef(null);

    const theme = useTheme();
    const styles = createStyles({ type, dropReady, isGhost }, theme);

    const enabledClick = onClick !== undefined;
    const enabledDrag = targets && targets.length > 0;
    const enabledPopover =
      isAuth &&
      popoverContent !== null &&
      size === 'large' &&
      type !== 'default';
    const enabled =
      enabledClick || enabledDrag || enabledPopover || href !== undefined;

    const withWarning = !isAuth && size === 'large' && type !== 'default';

    const isPopoverOpen = Boolean(popoverAnchorElement);

    const isPopperOpen = Boolean(popperAnchorElement);

    const closePopover = useCallback(() => {
      setPopoverAnchorElement(null);
    }, []);

    useEffect(() => {
      closePopover();
    }, [title, closePopover]);

    const handleFileButtonDragStart = () => {
      if (isGhost) setGhost(false);
    };

    const handleFileButtonDragEnd = () => {
      if (isGhost) setGhost(true);
    };

    const handleFileButtonClick = ({ currentTarget }: MouseEvent) => {
      if (enabledPopover) setPopoverAnchorElement(currentTarget);
      if (enabledDrag) handleFileButtonDragEnd();
      onClick?.();
    };

    const handlePopoverClose = () => {
      closePopover();
    };

    const handleWarningClick = () => {
      setPopperAnchorElement(popperAnchorElement ? null : button.current);
    };

    const handleRootPointerEnter = () => {
      onPointerEnter?.();
    };

    const handleRootPointerLeave = () => {
      onPointerLeave?.();
    };

    const handleRootPointerDown = () => {
      onPointerDown?.();
    };

    return (
      <Box
        css={styles.root}
        ref={ref}
        onPointerEnter={handleRootPointerEnter}
        onPointerLeave={handleRootPointerLeave}
        onPointerDown={handleRootPointerDown}
      >
        <FileButton
          disabled={!enabled}
          type={type}
          href={href}
          title={title}
          titleRows={titleRows}
          details={details}
          size={size}
          isGhost={ghost}
          dragWithOffset={isGhost}
          targets={targets}
          preventDefault={enabledDrag}
          onClick={handleFileButtonClick}
          onDragStart={handleFileButtonDragStart}
          onDragEnd={handleFileButtonDragEnd}
          onDrag={onDrag}
          ref={button}
        />
        {enabledPopover && (
          <FilePopover
            isOpen={isPopoverOpen}
            content={popoverContent}
            anchorElement={popoverAnchorElement}
            onClose={handlePopoverClose}
          />
        )}
        {withWarning && (
          <div css={styles.warningWrapper}>
            <WarningButton onClick={handleWarningClick} />
            <AuthWarningPopper
              isOpen={isPopperOpen}
              anchorElement={popperAnchorElement}
              href={authWarningHref}
            />
          </div>
        )}
      </Box>
    );
  }
);

File.displayName = 'File';

export type { Props };

export { File };
