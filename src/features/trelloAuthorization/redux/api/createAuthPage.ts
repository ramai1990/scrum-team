import { ScopeVariants, ExpirationValue } from '../../types';

type QueryParameters = {
  return_url?: string;
  name?: string;
  scope?: ScopeVariants;
  expiration?: ExpirationValue;
  width?: number;
  height?: number;
};

const createAuthPage = ({
  return_url = process.env.NEXT_PUBLIC_TRELLO_RETURN_URL,
  name = 'MyPersonalToken',
  scope = 'read,write',
  expiration = 'never',
  width = 650,
  height = 550,
}: QueryParameters) => {
  const left = window.innerWidth;
  const authPage = window.open(
    `https://trello.com/1/authorize?expiration=${expiration}&name=${name}&scope=${scope}&response_type=token&return_url=${return_url}&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}`,
    'trelloAuthorize',
    `width=${width},height=${height},left=${(left - width) / 2},top=80`
  );

  return authPage;
};

export type { QueryParameters };

export { createAuthPage };
