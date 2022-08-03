import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer, Props } from './Footer';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer,
};

const Template: ComponentStory<typeof Footer> = (props: Props) => (
  <Footer {...props} />
);

const Default = Template.bind({});
Default.args = {
  users: [],
};

const Mobile = Template.bind({});
Mobile.args = {
  users: [],
};
Mobile.parameters = { viewport: { defaultViewport: 'mobile1' } };

export { Default, Mobile };

export default Meta;
