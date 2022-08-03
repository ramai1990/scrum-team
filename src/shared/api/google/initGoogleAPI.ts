type InitOptions = Parameters<typeof window.gapi.client.init>['0'];

type LoadOptions = InitOptions & { apiName?: string };

const initClient = async (
  options: InitOptions
): Promise<typeof window.gapi> => {
  await window.gapi.client.init(options);

  return window.gapi;
};

const load = async ({
  apiName = 'client:auth2',
  ...initOptions
}: LoadOptions): Promise<typeof window.gapi> => {
  const gapi = await new Promise<typeof window.gapi>((resolve) => {
    window.gapi.load(apiName, () => {
      initClient(initOptions).then(() => {
        resolve(window.gapi);
      });
    });
  });

  return gapi;
};

const initGoogleAPI = async ({
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  ...theRest
}: LoadOptions = {}) => {
  const shouldLoad =
    window.gapi.client === undefined || theRest.apiName !== undefined;

  let gapi;

  if (shouldLoad) {
    gapi = await load({ apiKey, clientId, ...theRest });
  } else {
    gapi = await initClient({ apiKey, clientId, ...theRest });
  }

  return gapi;
};

export { initGoogleAPI };
