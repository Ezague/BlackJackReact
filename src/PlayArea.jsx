/* eslint-disable react/prop-types */
import { Button, ButtonGroup, Grid, GridItem, Text, LightMode } from "@chakra-ui/react";
import { Cards } from "./Cards";
import { handTotal } from "./gameLogic";

export function PlayArea({playerCard, dealerCard, gameOver, showDealerCards, gameState, showButtons, onHit, onStand}) {
    return (
        <section className="playArea">
                <Grid
                    h="72vh"
                    templateAreas={`"playerScore gameState dealerScore" "playerCards buttons dealerCards"`}
                    gridTemplateRows={'50px 1fr'}
                    gridTemplateColumns={'1fr 1fr 1fr'}
                    gap={4}
                    justifyItems={"center"}
                >
                    <GridItem colSpan={3} area={'playerScore'}>
                        <Text fontSize="3xl" fontWeight="bold">Player: {handTotal(playerCard)}</Text>
                    </GridItem>
                    <GridItem colSpan={1} area={'gameState'}>
                        <Text fontSize="3xl" fontWeight="bold">{gameState}</Text>
                    </GridItem>
                    <GridItem colSpan={3} area={'dealerScore'}>
                        <Text fontSize="3xl" fontWeight="bold">Dealer: {showDealerCards}</Text>
                    </GridItem>
                    <GridItem colSpan={3} area={'playerCards'}>
                        <Cards cards={playerCard} gameOver={gameOver} dealer='nej'/>
                    </GridItem>
                    <GridItem colSpan={1} area={'buttons'}>
                        <LightMode>
                            <ButtonGroup gap="4">
                                {showButtons && <Button colorScheme="green" width="100%" onClick={onHit}>Hit</Button>}
                                {showButtons && <Button colorScheme="red" width="100%" onClick={onStand}>Stand</Button>}
                            </ButtonGroup>
                        </LightMode>
                    </GridItem>
                    <GridItem colSpan={3} area={'dealerCards'}>
                        <Cards cards={dealerCard} gameOver={gameOver} dealer='ja'/>
                    </GridItem>
                </Grid>
        </section>
    )
}