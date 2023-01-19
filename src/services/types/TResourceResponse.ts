export type TResourceResponse<T> = {
  data?: T;
  error?: unknown;
  isSuccess: boolean;
};
