// https://developers.google.com/people/api/rest/v1/people/get

type Parameters = {
  resourceName: string;
  personFields?: string;
};

type Response = ReturnType<typeof gapi.client.people.people.get>;

export type { Parameters, Response };
