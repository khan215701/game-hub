import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface GameResult {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    const controllers = new AbortController();
    apiClient
      .get<GameResult>("/games", { signal: controllers.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });
    return () => controllers.abort();
  }, []);

  return { games, errors };
};

export default useGame;
