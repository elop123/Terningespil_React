import React, { useState } from 'react';
import styles from './Alikhans.module.scss';  

const pizzaDice = [
  '/pizza1.png',
  '/pizza2.png',
  '/pizza3.png',
  '/pizza4.png',
  '/pizza5.png',
  '/pizza6.png'
];

function Alikhan() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [turn, setTurn] = useState(1);
  const [rollsLeft, setRollsLeft] = useState(3);
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;

    setDice1(dice1Value);
    setDice2(dice2Value);

    const roundScore = dice1Value + dice2Value;

    if (turn === 1) {
      setPlayer1Score(player1Score + roundScore);
    } else {
      setPlayer2Score(player2Score + roundScore);
    }

    setRollsLeft(rollsLeft - 1);

    if (rollsLeft - 1 === 0) {
      if (turn === 1) {
        setTurn(2);
        setRollsLeft(3);
      } else {
        determineWinner();
      }
    }
  };

  const determineWinner = () => {
    if (player1Score > player2Score) {
      setWinner('Player 1 Wins!');
    } else if (player2Score > player1Score) {
      setWinner('Player 2 Wins!');
    } else {
      setWinner('It\'s a Tie!');
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.background}>
        <h1>Pizza Dice Game</h1>
        <h2>{winner ? winner : `Player ${turn}'s Turn`}</h2>
        <div className={styles.scores}>
          <p>Player 1 Score: {player1Score}</p>
          <p>Player 2 Score: {player2Score}</p>
        </div>
        {winner ? null : (
          <div className={styles.diceContainer}>
            <div className={styles.dice}>
              {dice1 && <img src={pizzaDice[dice1 - 1]} alt={`Dice 1`} />}
            </div>
            <div className={styles.dice}>
              {dice2 && <img src={pizzaDice[dice2 - 1]} alt={`Dice 2`} />}
            </div>
          </div>
        )}
        {!winner && <button onClick={rollDice}>Roll Dice</button>}
      </div>
    </div>
  );
}

export default Alikhan;
