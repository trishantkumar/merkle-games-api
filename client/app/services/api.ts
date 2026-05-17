export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase as string;

  const apiFetch = async <T>(
    path: string,
    options?: Parameters<typeof $fetch>[1],
  ): Promise<T> => {
    try {
      return $fetch<T>(path, {
        baseURL,
        ...options,
      });
    } catch (error: any) {
      throw error;
    }
  };

  return { apiFetch, baseURL };
};
