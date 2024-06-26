///All our imports we need

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  //custom game hook
  const { games, error, isLoading } = useGames();
  //We other helper function to add, delete or update data

  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {/* display our data ul li grid table usually map it with unique key  {1} 4px  */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={"20px"}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {error && <Text color={"red"}>{error}</Text>}
    </>
  );
};

export default GameGrid;