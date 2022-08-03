import { FC, useState, SyntheticEvent } from 'react';
import { useTheme } from '@mui/material';

import { Box, Typography } from 'src/shared/components';

import { Accordion } from '../Accordion/Accordion';
import { createStyles } from './TabPanel.style';

type Props = {
  items: { title: string; columns: string[] }[] | {};
  href: string;
};

const TabPanel: FC<Props> = ({ items, href }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [expandedListID, setExpandedListID] = useState<string>('');

  const makeAccordionClickHandler =
    (id: string) => (e: SyntheticEvent, isExpanded: boolean) => {
      if (id === undefined) {
        return false;
      }

      const isSelected = setExpandedListID(isExpanded ? id : '');

      return isSelected;
    };

  const sheetValues = Object.values(items);

  if (sheetValues.length === 0) {
    return (
      <Typography css={styles.description} variant="h5">
        Empty Table...
      </Typography>
    );
  }

  return (
    <>
      <Box css={styles.root} role="tabpanel">
        {sheetValues.map(({ title, columns }, i) => (
          <Accordion
            key={i}
            id={i.toString()}
            content={title}
            expanded={expandedListID === i.toString()}
            onChange={makeAccordionClickHandler(i.toString())}
            cards={columns}
            href={href}
          />
        ))}
      </Box>
    </>
  );
};

export { TabPanel };
