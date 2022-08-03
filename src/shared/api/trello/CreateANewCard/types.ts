// https://developer.atlassian.com/cloud/trello/rest/api-group-cards/

import { Card } from '../types';

type QueryParameters = {
  token: string;
  idList: string;

  name?: string;
  desc?: string;
  pos?: 'top' | 'bottom' | number;
  due?: string;
  dueComplete?: boolean;
  idMembers?: string[];
  idLabels?: string[];
  urlSource?: URL;
  fileSource?: BinaryData;
  mimeType?: string;
  idCardSource?: string;
  keepFromSource?: string;
  address?: string;
  locationName?: string;
  coordinates?: string;
};

type Response = Partial<Card>;

export type { QueryParameters, Response };
