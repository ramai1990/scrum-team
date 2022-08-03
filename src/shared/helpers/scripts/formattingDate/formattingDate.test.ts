import { setDateFormat } from './formattingDate';

const dateJSON = '2022-02-13T06:31:05.436Z';

test('correct date', () => {
  expect(setDateFormat(dateJSON)).toBe('13.02.2022, 06:31');
});
