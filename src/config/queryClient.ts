import { QueryClient } from "react-query";

export default new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      cacheTime: 10 * 60 * 1000
    }
  }
})