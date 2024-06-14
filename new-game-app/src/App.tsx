import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <>
   
{/* create a responsive layout with Chakra UI Grid */}
{/* Nav, aside, main __________responsive for desktop and mobile */}

<Grid templateAreas={{
  base: `'nav' 'main'`,
   lg: `'nav nav'  'aside main'`, //1024

}}>

    <GridItem area="nav">Nav
      <NavBar/>
    </GridItem>



<Show above="lg">
    <GridItem area="aside" bg="pink" >Aside</GridItem>
</Show>
    <GridItem area="main" bg="green" >Main</GridItem>



</Grid>
    </>

  )
}

export default App