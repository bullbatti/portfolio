// src/hooks/useJson.ts
import { useEffect, useState } from "react";
import { fetchJson } from "../services/fetchJson";

interface FetchState<T> {
  data: T[] | null;
  error: Error | null;
  loading: boolean;
}

export function useJson<T>(filename: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    // No synchronous setState here ✅

    fetchJson<T>(filename)
      .then((result) => {
        if (!cancelled) {
          setState({ data: result, error: null, loading: false });
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setState({ data: null, error: err, loading: false });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [filename]);

  return state;
}