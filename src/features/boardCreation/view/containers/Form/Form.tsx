import { FC, CSSProperties, FormEvent, ChangeEvent, useState } from 'react';
import { useTheme } from '@mui/material';

import { useAppDispatch } from 'src/app/hooks';
import {
  LinearProgress,
  Grid,
  TextField,
  Palette,
  Button,
} from 'src/shared/components';

import { BackgroundColorValue } from '../../../types';
import { createBoard } from '../../../redux/slice';
import { colors } from './constants';
import { createStyles } from './Form.style';

type Props = { trelloToken: string; showLoading?: boolean };

const Form: FC<Props> = ({ trelloToken, showLoading = false }) => {
  const theme = useTheme();
  const styles = createStyles({}, theme);
  const [formState, setFormState] = useState<{
    name: string;
    description: string;
    checkedColor: BackgroundColorValue | null;
  }>({
    name: '',
    description: '',
    checkedColor: null,
  });
  const dispatch = useAppDispatch();

  const paletteItems = colors.map((item) => {
    if (item.backgroundColor === formState.checkedColor) {
      return { ...item, checked: true };
    }

    return item;
  });

  const submitIsAllowed = Object.entries(formState).every(([key, value]) => {
    if (key === 'description') {
      return true;
    }

    return Boolean(value);
  });

  const getPaletteItem = (
    backgroundColor: CSSProperties['backgroundColor'] | null
  ) => {
    return paletteItems.find(
      ({ backgroundColor: itemBackgroundColor }) =>
        itemBackgroundColor === backgroundColor
    );
  };

  const handleRootSubmit = (event: FormEvent) => {
    const { name, description, checkedColor } = formState;
    const backgroundColor = getPaletteItem(checkedColor)?.title;

    const isParametersDefined =
      trelloToken !== null &&
      backgroundColor !== undefined &&
      trelloToken !== undefined;

    if (isParametersDefined) {
      const queryParameters = {
        token: trelloToken,
        name,
        desc: description,
        prefs_background: backgroundColor,
      };

      dispatch(createBoard(queryParameters));
    }

    event.preventDefault();
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, name: event.target.value });
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({ ...formState, description: event.target.value });
  };

  const handlePaletteSelect = ({
    backgroundColor,
  }: {
    backgroundColor: CSSProperties['backgroundColor'];
  }) => {
    const checkedColor = getPaletteItem(backgroundColor)?.backgroundColor;

    if (checkedColor !== undefined) {
      setFormState({ ...formState, checkedColor });
    }
  };

  return (
    <>
      {showLoading && <LinearProgress position="fixed-top" />}
      <form
        css={styles.root()}
        name="board-creation"
        onSubmit={handleRootSubmit}
      >
        <Grid container direction="column" rowSpacing={30}>
          <Grid item css={styles.name()}>
            <TextField
              name="name"
              label="Name"
              placeholder="Board name"
              inputProps={{ minLength: 1, maxLength: 64 }}
              size="less-medium"
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item css={styles.description()}>
            <TextField
              name="description"
              label="Description"
              placeholder="Board description"
              InputLabelProps={{ shrink: true }}
              inputProps={{ minLength: 0, maxLength: 512 }}
              rows={4}
              fullWidth
              multiline
              onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid item css={styles.palette()}>
            <Palette
              name="palette"
              items={paletteItems}
              onSelect={handlePaletteSelect}
            />
          </Grid>
          <Grid item css={styles.submitButton()}>
            <Button
              type="submit"
              disabled={!submitIsAllowed}
              variant="contained"
              size="extra-large"
              borderRadius="rounded"
              fullWidth
              shadow
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export type { Props };

export { Form };
