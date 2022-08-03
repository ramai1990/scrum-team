import { useRef, useState } from 'react';
import { useTheme } from '@mui/material';

import { File } from '../../File';
import type { DragEvent, Type } from '../../types';
import { createStyles } from './DndSandbox.style';

const DndSandbox = () => {
  const theme = useTheme();

  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const [dragOver1, setDragOver1] = useState(false);
  const [dragOver2, setDragOver2] = useState(false);
  const [type1, setType1] = useState<Type>('default');
  const [type2, setType2] = useState<Type>('default');

  const [color, setColor] = useState(theme.palette.primary.dark);
  const styles = createStyles({ color }, theme);

  const handleFileDrag = ({ overTarget, type, isDrop }: DragEvent) => {
    const isOverTarget1 = overTarget === targetRef1;
    const isOverTarget2 = overTarget === targetRef2;
    setDragOver1(isOverTarget1 && !isDrop);
    setDragOver2(isOverTarget2 && !isDrop);
    if (isOverTarget1 && isDrop) setType1(type);
    if (isOverTarget2 && isDrop) setType2(type);
  };

  const handleFilePointerEnter = () => {
    setColor(theme.palette.primary.contrastText);
  };

  const handleFilePointerLeave = () => {
    setColor(theme.palette.primary.dark);
  };

  return (
    <div css={styles.root}>
      <div css={styles.row}>
        <div>
          <File
            size="large"
            ref={targetRef1}
            dropReady={dragOver1}
            type={type1}
          />
        </div>
        <div>
          <File
            size="large"
            ref={targetRef2}
            dropReady={dragOver2}
            type={type2}
          />
        </div>
      </div>
      <div css={styles.row}>
        <div css={styles.slot}>
          Drag from this sheets zone
          <File
            type="sheet"
            targets={[targetRef1, targetRef2]}
            isGhost
            onDrag={handleFileDrag}
            onPointerEnter={handleFilePointerEnter}
            onPointerDown={handleFilePointerEnter}
            onPointerLeave={handleFilePointerLeave}
          />
          <div css={styles.hoverExample}>hovered text example</div>
        </div>
        <div css={styles.slot}>
          Drag from this boards zone
          <File
            type="board"
            targets={[targetRef1, targetRef2]}
            isGhost
            onDrag={handleFileDrag}
          />
        </div>
      </div>
    </div>
  );
};

export { DndSandbox };
