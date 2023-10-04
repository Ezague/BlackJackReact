/* eslint-disable react/prop-types */
import { TableContainer, Table, Tbody, Tr, Th } from "@chakra-ui/react";

function CreateCard({card, dealer, gameOver, index}) {
    if (index == 0 && dealer == 'ja' && gameOver == false) {
        return <Tr><Th>Hidden card</Th></Tr>;
    } else {
        return <Tr key={card.kuloer + card.vaerdi}>
            <Th>
                {card.kuloer} {card.vaerdi}
            </Th>
        </Tr>;
    }
}

export function Cards({cards, gameOver, dealer}) {
    return (
        <section className="cards">
            <TableContainer>
                <Table>
                    <Tbody>
                    {cards.map((card, i) => (
                        <CreateCard card={card} dealer={dealer} gameOver={gameOver} index={i} key={card.kuloer + card.vaerdi}/>
                    ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </section>
    );
}