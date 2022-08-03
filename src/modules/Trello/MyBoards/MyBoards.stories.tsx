import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyBoards } from './MyBoards';

const Meta: ComponentMeta<typeof MyBoards> = {
  title: 'modules/Trello/MyBoards',
  component: MyBoards,
  parameters: {
    nextRouter: {
      url: '/trello/my-boards',
    },
  },
};

const Template: ComponentStory<typeof MyBoards> = (props) => (
  <MyBoards {...props} />
);

const Default = Template.bind({});
Default.args = {};

export { Default };

export default Meta;
