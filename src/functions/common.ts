import { useEffect } from "react";

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useEffectOnlyOnce = (func: () => void) => useEffect(func, []);

export const getRequestHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
