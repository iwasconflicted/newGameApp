import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <>
      {/* create a responsive layout with Chakra UI Grid */}
      {/* Nav, aside, main_______responsive for desktop and mobile */}
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //1024
        }}
      >
        <GridItem area="nav">
          <NavBar/>
          </GridItem>

        <Show above="lg">
          <GridItem area="aside">
            {" "}
            Aside
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;