import { BackgroundColorValue, BackgroundColorName } from '../../../types';

type PaletteItem = {
  identifier: string;
  title: BackgroundColorName;
  backgroundColor: NonNullable<BackgroundColorValue>;
  checked?: boolean;
};

export type { PaletteItem };
