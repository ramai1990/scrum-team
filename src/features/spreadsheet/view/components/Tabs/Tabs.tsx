import { FC, SyntheticEvent, useState } from 'react';
import { useTheme } from '@mui/material';

import { Typography, Tabs as MUITabs } from 'src/shared/components';
import { SpreadsheetValues } from 'src/shared/api/google/sheets';

import { TabPanel } from '../TabPanel/TabPanel';
import { createStyles } from './Tabs.style';

type Props = {
  href: string;
  sheetTitles: string[];
  sheetIDs: number[];
  items: SpreadsheetValues;
};

const Tabs: FC<Props> = ({ href, sheetTitles, sheetIDs, items }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [value, setValue] = useState(0);

  const handleMUITabsChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sheetValues = Object.values(items).map(({ values }) => values);
  const arraySheetValues = Object.values(sheetValues);

  const [firstSheetIDs] = sheetIDs;

  if (firstSheetIDs !== 0) {
    return (
      <Typography variant="h3" color="red">
        Invalid Data
      </Typography>
    );
  }

  const sheetID = Object.values(items).map((_, i) => Math.round(sheetIDs[i]));

  return (
    <>
      <MUITabs
        css={styles.root}
        tabStyles={styles.tab}
        value={value}
        onChange={handleMUITabsChange}
        variant="scrollable"
        scrollButtons="auto"
        items={sheetTitles}
        ID={sheetIDs}
      />
      {sheetTitles.map(
        (_title, i) =>
          value === sheetID[i] && (
            <TabPanel key={i} items={arraySheetValues[i]} href={href} />
          )
      )}
    </>
  );
};

export type { Props };

export { Tabs };
