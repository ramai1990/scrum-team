import { DndSandbox, getListStub } from './utils';
import { File } from './File';

const Meta = {
  title: 'components/File',
  component: File,
};

export const Default = () => <File />;

export const Sheet = () => <File type="sheet" />;

export const Board = () => <File type="board" />;

export const DraggableSheet = () => <File type="sheet" targets={[]} />;

export const DraggableBoard = () => <File type="board" targets={[]} />;

export const DraggableGhostSheet = () => (
  <File type="sheet" targets={[]} isGhost />
);

export const DraggableGhostBoard = () => (
  <File type="board" targets={[]} isGhost />
);

export const TitledSheet = () => <File type="sheet" title="Sheet name 1" />;

export const TitledBoard = () => <File type="board" title="Board name 10" />;

export const ClickableTitledSheet = () => (
  <File type="sheet" title="Sheet name 1" onClick={() => {}} />
);

export const ClickableTitledBoard = () => (
  <File type="board" title="Board name 10" onClick={() => {}} />
);

export const LargeDefault = () => <File size="large" />;

export const LargeSheet = () => <File type="sheet" size="large" isAuth />;

export const LargeBoard = () => <File type="board" size="large" isAuth />;

export const LargeSheetNotAuth = () => <File type="sheet" size="large" />;

export const LargeBoardNotAuth = () => <File type="board" size="large" />;

export const LargeSheetWithList = () => (
  <File type="sheet" size="large" isAuth list={getListStub('Sheet')} />
);

export const LargeBoardWithList = () => (
  <File type="board" size="large" isAuth list={getListStub('Board')} />
);

export const TitledLargeSheetWithList = () => (
  <File
    type="sheet"
    size="large"
    title="Sheet 1"
    isAuth
    list={getListStub('Sheet')}
  />
);

export const TitledLargeBoardWithList = () => (
  <File
    type="board"
    size="large"
    title="Board 1"
    isAuth
    list={getListStub('Board')}
  />
);

export const LargeDefaultDropReady = () => <File size="large" dropReady />;

export const LargeSheetDropReady = () => (
  <File size="large" isAuth type="sheet" dropReady />
);

export const LargeBoardDropReady = () => (
  <File size="large" isAuth type="board" dropReady />
);

export const DragAndDropSandbox = () => <DndSandbox />;

export default Meta;
