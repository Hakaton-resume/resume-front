import { Grid } from '@mui/material';
import { Skeleton } from '@mui/material';
import { lazy, Suspense } from 'react';
import { useAppSelector } from '../../redux/store';

const Card = lazy(() => import('./Card/Card'));

export default function FavoritesCardList() {
  const { data: currentListCard } = useAppSelector(
    (state) => state.cardGroup,
  );


  return (
    <Grid
      mt={'20px'}
      maxWidth={'1100px'}
      container
      rowGap={'20px'}
      columnGap={'20px'}
    >
  
        <Suspense fallback={<Skeleton />}>
          {currentListCard?.favourites.map((item) => {
            return <Card card={item} key={item.id} />;
          })}
        </Suspense>
    </Grid>
  );
}
