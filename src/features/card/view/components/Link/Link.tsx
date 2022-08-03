import { FC } from 'react';
import { SerializedStyles } from '@emotion/react';

import { Link as MuiLink } from 'src/shared/components';

type Props = {
  href: string;
  linkStyles: () => SerializedStyles;
};

const Link: FC<Props> = ({ href, linkStyles, children }) => {
  return (
    <MuiLink
      css={linkStyles}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      color="inherit"
    >
      {children}
    </MuiLink>
  );
};

export type { Props };

export { Link };
