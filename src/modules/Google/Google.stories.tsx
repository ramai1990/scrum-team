import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Google } from './Google';

const Meta: ComponentMeta<typeof Google> = {
  title: 'modules/Google',
  component: Google,
  parameters: {
    nextRouter: {
      url: '/google',
    },
  },
};

const Template: ComponentStory<typeof Google> = (props) => (
  <Google {...props} />
);

const Default = Template.bind({});
Default.args = {};

export { Default };

export default Meta;
