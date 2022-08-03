import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SemanticLayout, Props } from './SemanticLayout';

const Meta: ComponentMeta<typeof SemanticLayout> = {
  title: 'modules/shared/SemanticLayout',
  component: SemanticLayout,
};

const Template: ComponentStory<typeof SemanticLayout> = (props: Props) => (
  <SemanticLayout {...props} />
);

const Default = Template.bind({});
Default.args = {};

const WithHeader = Template.bind({});
WithHeader.args = { withHeader: true };

export { Default, WithHeader };

export default Meta;
