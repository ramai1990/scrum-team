import { render, screen } from 'src/shared/tests/test-utils';

import { CardDescription, Props } from './CardDescription';

const setup = (props: Props) => {
  return {
    ...render(<CardDescription {...props} />),
  };
};

describe('CardDescription component', () => {
  test('render of the CardDescription component', () => {
    setup({ text: 'description of the component' });

    const text = screen.getByText(/description of the component/i);

    expect(text).toBeInTheDocument();
  });
});
