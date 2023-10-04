import {useState, useEffect} from 'react'
import './App.css'
import {Header} from './Header'
import {PlayArea} from './playArea'
import { drawCard } from './drawCard'
import { Stats } from './stats'
import { preGameSetup } from "./preGameSetup";
import { handTotal } from './gameLogic'
import { checkRoundState } from './gameLogic'

export default function App() {

const [deck, setDeck] = useState(preGameSetup());
const [playerCards, setPlayerCards] = useState([]);
const [dealerCards, setDealerCards] = useState([]);
const [wins, setWins] = useState(0);
const [losses, setLosses] = useState(0);
const [draws, setDraws] = useState(0);
const [showButtons, setShowButtons] = useState(false);
const [showDealerCard, setShowDealerCard] = useState('???');
const [gameState, setGameState] = useState(null);

useEffect(() => {
  if (playerCards.length === 0 || dealerCards.length === 0) return;
  const status = checkRoundState(playerCards, dealerCards)
  if (status === null) return;
  if (status === 'You won!') {
    setWins((currentValue) => currentValue + 1);
    setShowButtons(false);
    setShowDealerCard(handTotal(dealerCards));
  }
  if (status === 'You lost!') {
    setLosses((currentValue) => currentValue + 1);
    setShowButtons(false);
    setShowDealerCard(handTotal(dealerCards));
  }
  if (status === 'It\'s a draw!') {
    setDraws((currentValue) => currentValue + 1);
    setShowButtons(false);
    setShowDealerCard(handTotal(dealerCards));
  }
  setGameState(status);
}, [playerCards, dealerCards])

const onStartGame = () => {
  setDeck(preGameSetup());
  const [playerCard, d] = drawCard(deck);
  const [playerCard2, d2] = drawCard(d);
  const [dealerCard, d3] = drawCard(d2);
  const [dealerCard2, d4] = drawCard(d3);
  setPlayerCards([playerCard, playerCard2]);
  setDealerCards([dealerCard, dealerCard2]);
  setDeck(d4);
  setShowButtons(true);
  setShowDealerCard('???');
  setGameState(null);
}

const onHit = () => {
  const [playerCard, b] = drawCard(deck);
  setPlayerCards((currentValue) => [...currentValue, playerCard]);
  setDeck(b);
}

const onStand = () => {
  const [dealerCard, b] = drawCard(deck);
  setDealerCards((currentValue) => [...currentValue, dealerCard]);
  setDeck(b);
}

const onResetScore = () => {
  setWins(0);
  setLosses(0);
  setDraws(0);
}

  return (
    <>
      <div>
          <Header onStartGame={onStartGame} onResetScore={onResetScore}/>
          <PlayArea playerCard={playerCards} dealerCard={dealerCards} showDealerCards={showDealerCard} gameState={gameState} showButtons={showButtons} onHit={onHit} onStand={onStand} />
          <Stats wins={wins} draws={draws} losses={losses}/>
      </div>
    </>
  )
}
