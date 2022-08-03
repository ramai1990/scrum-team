import { render, screen } from 'src/shared/tests/test-utils';

import { TrelloButton, Props } from './TrelloButton';

const setup = (props: Props) => {
  return {
    ...render(<TrelloButton {...props} />),
  };
};

describe('TrelloButton component', () => {
  test('render of the TrelloButton component', () => {
    setup({ href: '' });

    const button = screen.getByRole('button', { name: /go to trello/i });

    expect(button).toBeInTheDocument();
  });
});
