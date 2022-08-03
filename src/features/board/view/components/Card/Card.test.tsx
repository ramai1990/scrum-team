import { render, screen } from 'src/shared/tests/test-utils';
import { setDateFormat } from 'src/shared/helpers/scripts/formattingDate';

import { Card, Props } from './Card';

const dateJSON = '2022-02-13T06:31:05.436Z';

const setup = (props: Props) => {
  return {
    ...render(<Card {...props} />),
  };
};

describe('Card component', () => {
  test('render of the Card component', () => {
    setup({ dateLastActivity: dateJSON, cardName: 'card' });

    const card = screen.getByRole('heading', { name: /card/i });
    const date = screen.getByText(/13.02.2022, 06:31/i);

    expect(card).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  test('correct name', () => {
    setup({ dateLastActivity: dateJSON, cardName: 'trello' });

    const trello = screen.getByRole('heading', { name: /trello/i });

    expect(trello).toHaveTextContent('trello');
  });

  test('correct date', () => {
    expect(setDateFormat(dateJSON)).toEqual('13.02.2022, 06:31');
  });
});
