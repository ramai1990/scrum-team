type ErrorResponse = globalThis.gapi.client.Response<{
  error?: Error;
}>;

type Error = {
  code: number;
  errors: { domain: string; reason: string; message: string }[];
  message: string;
};

export type { ErrorResponse, Error };
