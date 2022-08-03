const getGoogleAPI = (): typeof window.gapi | undefined => {
  return globalThis.gapi;
};

export { getGoogleAPI };
