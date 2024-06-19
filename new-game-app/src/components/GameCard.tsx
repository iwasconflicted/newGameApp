
import { Card, CardBody, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"

interface GameProps {
    game: Game

}

const GameCard = ({game}:GameProps) => {
  return (
    <>

        <Card borderRadius={10} overflow={'hidden'} >
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize={'2xl'}> {game.name}</Heading>
               <PlatformIconsList platforms={game.parent_platforms.map(platform=> platform.platform)}/>
            </CardBody>
        </Card>

    </>
  )
}

export default GameCard
