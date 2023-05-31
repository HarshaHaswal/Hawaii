import { useEffect, useState } from "react";
import axios from "axios";

type FetchArgType = {
  apiPath: string;
  params?: object;
};

function useFetch({ apiPath, params }: FetchArgType) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function executeFetch() {
      try {
        setLoading(true);
        const response = await axios.get(apiPath, {
          params: params,
        });
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
    executeFetch();
    return () => {
      setLoading(false);
      setData(null);
      setError(null);
    };
  }, [apiPath, params]);

  return [data, loading, error];
}

export default useFetch;
