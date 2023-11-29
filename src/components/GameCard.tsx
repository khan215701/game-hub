import React from "react";
import { Game } from "../hook/useGame";
import { Card, HStack, Heading, Image } from "@chakra-ui/react";
import GamePlatform from "./GamePlatform";
import { Platform } from "./../hook/useGame";
import GameBadge from "./GameBadge";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <>
      <Card overflow="hidden" borderRadius={10}>
        <Image src={game.background_image} alt={game.name} />
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" padding="10px">
          <GamePlatform
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameBadge score={game.metacritic} />
        </HStack>
      </Card>
    </>
  );
};

export default GameCard;
