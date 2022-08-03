import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FulfilledCreation } from './FulfilledCreation';

const Meta: ComponentMeta<typeof FulfilledCreation> = {
  title: 'modules/Trello/BoardCreation/FulfilledCreation',
  component: FulfilledCreation,
};

const Template: ComponentStory<typeof FulfilledCreation> = (props) => (
  <FulfilledCreation {...props} />
);

const Default = Template.bind({});
Default.args = {};

export { Default };

export default Meta;
