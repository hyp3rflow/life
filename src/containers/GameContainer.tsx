import React, { useCallback, useState } from 'react';
import Cell from 'components/Cell';
import CellTable from 'components/CellTable';
import Button from 'components/Button';

const GameContainer: React.FC = () => {
  const [playState, setPlayState] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>();
  const [gameState, setGameState] = useState<boolean[][]>(
    [...Array(30)].map(() => {
      return [...Array(30)].map(() => false);
    })
  );

  const initalizeGameState = () => {
    setGameState(
      [...Array(30)].map(() => {
        return [...Array(30)].map(() => false);
      })
    );
  };

  const handleCellClick = (row: number, col: number) => {
    const nextState = gameState.slice().map((r) => r.slice());
    nextState[row][col] = !nextState[row][col];
    setGameState(nextState);
  };

  const isOutside = (row: number, col: number) => {
    if (row < 0 || col < 0 || row >= 30 || col >= 30) return true;
    return false;
  };

  const countAround = (row: number, col: number, state: boolean[][]) => {
    let count = 0;
    for (const i of [-1, 0, 1]) {
      for (const j of [-1, 0, 1]) {
        const currentX = row + i;
        const currentY = col + j;
        if (i === 0 && j === 0) continue;
        if (isOutside(currentX, currentY)) continue;
        if (state[currentX][currentY]) {
          count++;
        }
      }
    }
    return count;
  };

  const playCycle = useCallback(() => {
    setPlayState(true);
    setGameState((currState) => {
      const nextCycleState = currState.slice().map((r) => r.slice());
      currState.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          const count = countAround(rowIndex, colIndex, currState);
          if (cell === false) {
            if (count === 3) nextCycleState[rowIndex][colIndex] = true;
          } else if (count === 2 || count === 3) {
            nextCycleState[rowIndex][colIndex] = true;
          } else nextCycleState[rowIndex][colIndex] = false;
        });
      });
      return nextCycleState;
    });

    setTimeoutId(setTimeout(playCycle, 800));
  }, [gameState]);

  const stopCycle = () => {
    setPlayState(false);
    clearTimeout(timeoutId);
  };

  return (
    <>
      <Button onClick={playState ? stopCycle : playCycle}>
        {playState ? 'Stop' : 'Start'}
      </Button>
      <Button onClick={initalizeGameState}>Init</Button>
      <CellTable width={30} height={30} isActive={playState}>
        {gameState &&
          gameState.map((row, rowIndex) =>
            row.map((state, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isActive={state}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))
          )}
      </CellTable>
    </>
  );
};

export default GameContainer;
