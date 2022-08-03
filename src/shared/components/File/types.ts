import { MutableRefObject } from 'react';

type Type = 'sheet' | 'board' | 'default';

type Size = 'small' | 'large';

type DragEvent = {
  overTarget: MutableRefObject<null> | null;
  type: Type;
  isDrop: boolean;
};

export type { Type, Size, DragEvent };
