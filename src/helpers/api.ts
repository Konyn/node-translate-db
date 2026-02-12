type ApiResult<T> = {
  data: T | null;
  error: any | null;
};

export const Api = async <T>(
  fn: () => Promise<T>
): Promise<ApiResult<T>> => {
  try {
    const res = await fn();
    return { data: res, error: null };
  } catch (error: any) {
    return { data: null, error };
  }
};
