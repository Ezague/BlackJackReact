/* eslint-disable react/prop-types */
import { TableContainer, Table, Tbody, Tr, Th } from "@chakra-ui/react";

export function Cards({cards}) {
    return (
        <section className="cards">
            <TableContainer>
                <Table>
                    <Tbody>
                    {cards.map((card) => (
                        <Tr key={card.kuloer + card.vaerdi}>
                            <Th>
                                {card.kuloer} {card.vaerdi}
                            </Th>
                        </Tr>
                    ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </section>
    );
}