import { Person, photoURLSizeFragment } from 'src/shared/api/google/people';

import { State } from '../types';

const getPhotoURLFromPhotos = (
  defaults: State['avatarURL'],
  photos?: Person['photos']
): State['avatarURL'] => {
  if (photos === undefined) return defaults;

  const [photo] = photos.filter(({ url }) => Boolean(url));

  const { url = defaults } = photo;

  return url.replace(
    photoURLSizeFragment.responded,
    photoURLSizeFragment.requested
  );
};

export { getPhotoURLFromPhotos };
