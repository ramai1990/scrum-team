import { formattedText, formattedLink } from './formattingString';

const text = 'typescript \n react';

const links =
  '[react](https://ru.reactjs.org/) в качестве базовой архитектуры можно использовать [next.js](https://nextjs.org/) или [react create app c typescript](https://create-react-app.dev/docs/adding-typescript/)';

describe('formatting a string', () => {
  test('creating an array of strings', () => {
    expect(formattedText(text)).toEqual(['typescript ', ' react']);
  });

  test('creating an array of links', () => {
    expect(formattedLink(links)).toEqual([
      '[react](https://ru.reactjs.org/)',
      '[next.js](https://nextjs.org/)',
      '[react create app c typescript](https://create-react-app.dev/docs/adding-typescript/)',
    ]);
  });
});
