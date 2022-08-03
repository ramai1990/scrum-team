import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideBar, Props } from './SideBar';

const Meta: ComponentMeta<typeof SideBar> = {
  title: 'components/SideBar',
  component: SideBar,
};

const Template: ComponentStory<typeof SideBar> = (props: Props) => (
  <SideBar {...props} />
);

const Default = Template.bind({});
Default.args = { items: [] };

const WithSomeItems = Template.bind({});
WithSomeItems.args = {
  items: [
    {
      key: 'Breadcrumb1',
      href: '/mock',
      children: 'Breadcrumb1',
      isCurrentPage: true,
    },
    { key: 'Breadcrumb2', href: '/mock', children: 'Breadcrumb2' },
    { key: 'Breadcrumb3', href: '/mock', children: 'Breadcrumb3' },
  ],
};

export { Default, WithSomeItems };

export default Meta;
