import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RejectedCreation } from './RejectedCreation';

const Meta: ComponentMeta<typeof RejectedCreation> = {
  title: 'modules/Trello/BoardCreation/RejectedCreation',
  component: RejectedCreation,
};

const Template: ComponentStory<typeof RejectedCreation> = (props) => (
  <RejectedCreation {...props} />
);

const Default = Template.bind({});
Default.args = {};

export { Default };

export default Meta;
