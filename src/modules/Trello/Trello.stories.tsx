import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Trello } from './Trello';

const Meta: ComponentMeta<typeof Trello> = {
  title: 'modules/Trello',
  component: Trello,
  parameters: {
    nextRouter: {
      url: '/trello',
    },
  },
};

const Template: ComponentStory<typeof Trello> = (props) => (
  <Trello {...props} />
);

const Default = Template.bind({});
Default.args = {};

export { Default };

export default Meta;
