import { render, screen } from 'src/shared/tests/test-utils';

import { Tag, Props } from './Tag';

const setup = (props: Props) => {
  return {
    ...render(<Tag {...props} />),
  };
};

describe('Tag component', () => {
  test('render of the Tag component', () => {
    setup({ color: 'black', text: 'tag text' });

    const text = screen.getByText(/tag text/i);

    expect(text).toBeInTheDocument();
  });
});
