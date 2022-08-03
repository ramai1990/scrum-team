import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from 'msw';
import { Provider } from 'react-redux';

import { makeStore } from 'src/app/store';

import { BoardCreation } from './BoardCreation';

const mockedStore = makeStore();
mockedStore.dispatch({
  type: 'trelloAuthorization/authorization',
  payload: process.env.NEXT_PUBLIC_TRELLO_TEST_ACCOUNT_TOKEN,
});

const Meta: ComponentMeta<typeof BoardCreation> = {
  title: 'modules/Trello/BoardCreation',
  component: BoardCreation,
  decorators: [(story) => <Provider store={mockedStore}>{story()}</Provider>],
};

const Template: ComponentStory<typeof BoardCreation> = (props) => (
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
ShouldFulfill.args = {};
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
ShouldReject.args = {};
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
