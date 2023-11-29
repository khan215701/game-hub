import React from "react";
import { Game } from "../hook/useGame";
import { Card, Heading, Image } from "@chakra-ui/react";
import GamePlatform from "./GamePlatform";
import { Platform } from "./../hook/useGame";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <>
      <Card overflow="hidden" borderRadius={10}>
        <Image src={game.background_image} alt={game.name} />
        <Heading fontSize="2xl">{game.name}</Heading>
        <GamePlatform
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card>
    </>
  );
};

export default GameCard;
