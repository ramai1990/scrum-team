import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';
import {
  useState,
  MutableRefObject,
  MouseEvent,
  forwardRef,
  PropsWithChildren,
} from 'react';
import { useDrag } from '@use-gesture/react';

import { elementsFromPoint } from '../../../helpers/scripts/DOM';
import { Button } from '../../Button/Button';
import { Typography } from '../../Typography/Typography';
import { SVGIcon } from '../../Icon';
import type { DragEvent, Size, Type } from '../types';
import { PRESETS, POINTER_ON_ICON_X, POINTER_ON_ICON_Y } from '../constants';
import { createStyles } from './FileButton.style';

type Props = {
  size?: Size;
  type?: Type;
  href?: string;
  title?: string | null;
  titleRows?: number;
  details?: string | null;
  isGhost?: boolean;
  dragWithOffset?: boolean;
  disabled?: boolean;
  preventDefault?: boolean;
  targets?: MutableRefObject<null>[];
  onDrag?: ((event: DragEvent) => void) | null;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onClick?: (event: MouseEvent) => void;
};

const FileButton = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const {
      size = 'small',
      type = 'default',
      href = undefined,
      title = null,
      titleRows = 2,
      details = null,
      isGhost = false,
      dragWithOffset = false,
      disabled = false,
      preventDefault = false,
      targets = [],
      onDrag,
      onDragStart,
      onDragEnd,
      onClick,
    } = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [attached, setAttached] = useState(false);
    const [hidden, setHidden] = useState(false);

    const router = useRouter();

    const withDetails = Boolean(details) && size === 'large';
    const titleRowsFinal = withDetails ? 1 : titleRows;

    const theme = useTheme();
    const styles = createStyles(
      {
        type,
        size,
        hidden,
        isGhost,
        title,
        titleRows: titleRowsFinal,
        details,
      },
      theme
    );

    const { icon, viewBox, description } = PRESETS[type][size];

    const dragEnabled = targets && targets.length > 0;

    const bind = useDrag(
      ({
        first,
        last,
        currentTarget,
        xy: [xPoint, yPoint],
        movement: [xMove, yMove],
      }) => {
        if (!(currentTarget instanceof HTMLButtonElement)) return;
        const button = currentTarget;
        const [overTarget] = targets
          ? targets.filter(
              (target) =>
                target.current &&
                elementsFromPoint(xPoint, yPoint).includes(target.current)
            )
          : [null];

        const isDragStart = first;
        const isDragEnd = last;
        const isDrop = attached && isDragEnd;
        const isAttached = Boolean(overTarget) && !isDrop;

        setAttached(isAttached);

        if (isDragStart) {
          onDragStart?.();
        }

        onDrag?.({ overTarget, type, isDrop });

        if (isDragEnd) {
          setPosition({ x: 0, y: 0 });
          onDragEnd?.();
        } else if (dragWithOffset) {
          const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = button;
          const { left, top } = button.getBoundingClientRect();

          const xFinal = !first
            ? offsetLeft - (left - xPoint) - offsetWidth * POINTER_ON_ICON_X
            : 0;
          const yFinal = !first
            ? offsetTop - (top - yPoint) - offsetHeight * POINTER_ON_ICON_Y
            : 0;

          setHidden(first);
          setPosition({ x: xFinal, y: yFinal });
        } else setPosition({ x: xMove, y: yMove });
      },
      { preventDefault, enabled: dragEnabled }
    );

    const dragProps = bind();

    const handleButtonClick = (event: MouseEvent) => {
      if (href !== undefined) {
        event.preventDefault();
        router.push(href);
      }

      onClick?.(event);
    };

    return (
      <Button
        css={styles.root}
        href={href}
        size={size}
        disabled={disabled}
        onClick={handleButtonClick}
        // FIXME: при задании этих стилей через css`` перерисовка при перетаскивании не происходит
        style={{
          top: position.y,
          left: position.x,
          touchAction: 'none',
        }}
        {...dragProps}
        ref={ref}
      >
        <span css={styles.iconWrapper}>
          <SVGIcon css={styles.icon} component={icon} viewBox={viewBox} />
        </span>
        {title ? (
          <Typography css={styles.title} component="span">
            {title}
          </Typography>
        ) : (
          description
        )}
        {withDetails && (
          <Typography css={styles.details} component="span">
            {details}
          </Typography>
        )}
      </Button>
    );
  }
);

FileButton.displayName = 'FileButton';

export type { Props };

export { FileButton };
