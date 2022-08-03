import { FilePopover } from './FilePopover';

const Meta = {
  title: 'components/File/FilePopover',
  component: FilePopover,
};

export const Open = () => (
  <FilePopover
    isOpen
    content="Контент"
    anchorElement={null}
    onClose={() => {}}
  />
);

export default Meta;
