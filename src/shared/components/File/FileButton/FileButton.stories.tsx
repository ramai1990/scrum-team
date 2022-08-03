import { FileButton } from './FileButton';

const Meta = {
  title: 'components/File/FileButton',
  component: FileButton,
};

export const Default = () => <FileButton />;

export const Sheet = () => <FileButton type="sheet" />;

export const Board = () => <FileButton type="board" />;

export const GhostSheet = () => <FileButton type="sheet" isGhost />;

export const GhostBoard = () => <FileButton type="board" isGhost />;

export const DisabledSheet = () => <FileButton type="sheet" disabled />;

export const DisabledBoard = () => <FileButton type="board" disabled />;

export const TitledSheet = () => (
  <FileButton type="sheet" title="Sheet name 1" />
);

export const TitledBoard = () => (
  <FileButton type="board" title="Board name 10" />
);

export const SheetWithTargets = () => <FileButton type="sheet" targets={[]} />;

export const BoardWithTargets = () => <FileButton type="board" targets={[]} />;

export const PreventDefaultSheetWithTargets = () => (
  <FileButton type="sheet" preventDefault targets={[]} />
);

export const PreventDefaultBoardWithTargets = () => (
  <FileButton type="board" preventDefault targets={[]} />
);

export const SheetWithTargetsAndOffset = () => (
  <FileButton type="sheet" targets={[]} dragWithOffset />
);

export const BoardWithTargetsAndOffset = () => (
  <FileButton type="board" targets={[]} dragWithOffset />
);

export const LargeDefault = () => <FileButton size="large" />;

export const LargeSheet = () => <FileButton type="sheet" size="large" />;

export const LargeBoard = () => <FileButton type="board" size="large" />;

export const TitledLargeSheet = () => (
  <FileButton type="sheet" size="large" title="Sheet 1" />
);

export const TitledLargeBoard = () => (
  <FileButton type="board" size="large" title="Board 1" />
);

export default Meta;
