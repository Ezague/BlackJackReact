/* eslint-disable react/prop-types */
import { Container, Button, ButtonGroup, LightMode, Text } from "@chakra-ui/react";

export function Header({onStartGame, onResetScore}) {
    return (
        <section className="header">
                <Container mb={10}>
                    <Text fontSize="5xl" fontWeight="bold">BlackJack</Text>
                </Container>
                <Container>
                    <LightMode>
                    <ButtonGroup gap="4">
                        <Button colorScheme="green" m={1} onClick={onStartGame}>New Game</Button>
                        <Button colorScheme="red" m={1} onClick={onResetScore}>Reset score</Button>
                    </ButtonGroup>
                </LightMode>
            </Container>
        </section>
    );
}