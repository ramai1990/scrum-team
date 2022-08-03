import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Container } from '../Container/Container';
import { Arrow } from './Arrow';
import { DOWNLOAD, SUCCESS, ERROR } from './constants';
import { Box } from '../Box/Box';

const Meta = {
  title: 'Components/Arrow',
  component: Arrow,
  argTypes: {
    cloudColor: { control: 'color' },
    iconColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <Container maxWidth={1274}>
        <Box style={{ margin: '0 auto ', maxWidth: '550px' }}>
          <Story />
        </Box>
      </Container>
    ),
  ],
} as ComponentMeta<typeof Arrow>;

const Template: ComponentStory<typeof Arrow> = (args) => <Arrow {...args} />;

const ArrowStatusNone = Template.bind({});

const ArrowStatusDownload = Template.bind({});
ArrowStatusDownload.args = {
  convertingStatus: DOWNLOAD,
};

const ArrowStatusSuccess = Template.bind({});
ArrowStatusSuccess.args = {
  convertingStatus: SUCCESS,
};

const ArrowStatusError = Template.bind({});
ArrowStatusError.args = {
  convertingStatus: ERROR,
};

export {
  ArrowStatusNone,
  ArrowStatusDownload,
  ArrowStatusSuccess,
  ArrowStatusError,
};

export default Meta;
