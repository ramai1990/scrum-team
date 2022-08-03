import { FC } from 'react';
import reactStringReplace from 'react-string-replace';
import { SerializedStyles } from '@emotion/react';

import { Typography } from 'src/shared/components';
import {
  formattedLink,
  formattedText,
} from 'src/shared/helpers/scripts/formattingString/formattingString';

import { INSERT_HERE } from '../../../constants';
import { Link } from '../Link/Link';

type Props = {
  content: string;
  textStyles: () => SerializedStyles;
  linkStyles: () => SerializedStyles;
};

const FormattedText: FC<Props> = ({ content, textStyles, linkStyles }) => {
  let text = formattedText(content);

  const arrayOfLink = formattedLink(content);
  const hasLink = arrayOfLink !== null;
  let arrayOfCorrectLink: string[][] = [];

  if (hasLink) {
    arrayOfCorrectLink = arrayOfLink.map((el) =>
      el
        .split(']')
        .map((element, i) =>
          i === 0 ? element.slice(1) : element.slice(1, -1)
        )
    );

    text = arrayOfLink.reduce(
      (acc, link) => acc.map((el) => el.replace(link, INSERT_HERE)),
      text
    );
  }

  return (
    <>
      {text.map((el, index) => (
        <Typography css={textStyles} key={index.toString()}>
          {hasLink &&
            reactStringReplace(el, INSERT_HERE, (match, oddIndex) => (
              <Link
                linkStyles={linkStyles}
                key={oddIndex}
                href={arrayOfCorrectLink[Math.floor(oddIndex / 2)][1]}
              >
                {arrayOfCorrectLink[Math.floor(oddIndex / 2)][0]}
              </Link>
            ))}
          {!hasLink && el}
        </Typography>
      ))}
    </>
  );
};

export type { Props };

export { FormattedText };
