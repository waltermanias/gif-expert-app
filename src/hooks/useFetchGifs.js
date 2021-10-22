import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((data) => setState({ data, loading: false }));
  }, [category]);

  return state;
};
