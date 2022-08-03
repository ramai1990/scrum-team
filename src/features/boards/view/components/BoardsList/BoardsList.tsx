import { useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import { FC, useEffect, useRef } from 'react';

import { LazyContainer, CircularProgress, List } from 'src/shared/components';

import { Board } from '../../../types';
import type { Props as BoardCardProps } from '../BoardCard/BoardCard';
import { createStyles } from './BoardsList.style';

const BoardCard = dynamic<BoardCardProps>(
  () =>
    import('../BoardCard/BoardCard').then((component) => component.BoardCard),
  { loading: () => <CircularProgress /> }
);

type Props = {
  items: Board[];
  withButton?: boolean;
  route?: string;
  onShowMore: () => void;
  onGoToBoard: (routeToChosen: string) => void;
};

const BoardsList: FC<Props> = ({
  items,
  withButton = false,
  route = '/',
  onShowMore,
  onGoToBoard,
}) => {
  const didMountRef = useRef(false);
  const button = useRef<HTMLButtonElement>(null);

  const theme = useTheme();
  const styles = createStyles(theme);

  const scrollToButton = () => {
    if (!(button.current instanceof HTMLButtonElement)) return;
    window.scrollTo(0, button.current.offsetTop);
  };

  useEffect(() => {
    if (didMountRef.current && withButton) {
      scrollToButton();
    }

    didMountRef.current = true;
  }, [items, withButton]);

  return (
    <LazyContainer withButton={withButton} onShowMore={onShowMore}>
      <List
        css={styles.list}
        items={items.map((item) => ({
          css: styles.item,
          key: item.id,
          children: (
            <BoardCard
              name={item.name}
              desc={item.desc}
              members={item.members}
              color={item.color}
              image={item.image}
              href={`${route}/${item.id}`}
              onGoToBoard={onGoToBoard}
            />
          ),
        }))}
      />
    </LazyContainer>
  );
};

export type { Props };

export { BoardsList };
