import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';

import { BoardCreation, Props } from './BoardCreation';

const Meta: ComponentMeta<typeof BoardCreation> = {
  title: 'features/boardCreation',
  component: BoardCreation,
};

const Template: ComponentStory<typeof BoardCreation> = (props: Props) => (
  <BoardCreation {...props} />
);

const handlePostFulfilledCreateBoard: Parameters<typeof rest.post>['1'] = (
  req,
  res,
  ctx
) => {
  return res(
    ctx.json({
      id: '600a5d15b25f361fce69eb69',
      url: 'https://trello.com/b/n7Ux94bS',
      name: req.url.searchParams.get('name'),
    })
  );
};

const handlePostRejectedCreateBoard: Parameters<typeof rest.post>['1'] = (
  req,
  res,
  ctx
) => {
  return res(
    ctx.json({
      message: 'Board must be in a team — specify an idOrganization',
    })
  );
};

const ShouldFulfill = Template.bind({});
ShouldFulfill.args = {
  trelloToken: process.env.NEXT_PUBLIC_TRELLO_TEST_ACCOUNT_TOKEN,
};
ShouldFulfill.parameters = {
  msw: {
    handlers: [
      rest.post(
        'https://api.trello.com/1/boards',
        handlePostFulfilledCreateBoard
      ),
    ],
  },
};

const ShouldReject = Template.bind({});
ShouldReject.args = {
  trelloToken: process.env.NEXT_PUBLIC_TRELLO_TEST_ACCOUNT_TOKEN,
};
ShouldReject.parameters = {
  msw: {
    handlers: [
      rest.post(
        'https://api.trello.com/1/boards',
        handlePostRejectedCreateBoard
      ),
    ],
  },
};

export { ShouldFulfill, ShouldReject };

export default Meta;
