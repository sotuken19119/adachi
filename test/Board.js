import React, { useState, useEffect } from "react";
import CreateBoard from "../util/CreateBoard";
import Cell from "./Cell";
import { revealed } from "../util/reveal";
import Modal from "./Modal";
import Timer from "./Timer"
export default function Board() {
  const [board, setBoard] = useState([]);
  const [mineLocations, setMineLocations] = useState([]);
  const [nonMinesCount, setNonMinesCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [restart, setRestart] = useState(false);
  const [newTime, setTime] = useState(0);
  const [flagCount, setFlagCount] = useState(0);
  useEffect(() => {
    const generateBoard = () => {
      const getBoard = CreateBoard(10, 15, 20, setMineLocations);
      setNonMinesCount(100 - 20);
      setFlagCount(20);
      setTime(0);
      setBoard(getBoard.board);
      setMineLocations(getBoard.mineLocation);
      setGameOver(false);
      setRestart(false);
    };
    generateBoard();
  }, [restart, setRestart]);

  const updateBoard = (x, y, e) => {
    let newBoardValues = JSON.parse(JSON.stringify(board));
    let newNonMinesCount = nonMinesCount;
    if (newBoardValues[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        if (
          !newBoardValues[mineLocations[i][0]][mineLocations[i][1]].revealed
        ) {
          // setInterval(() => {
          newBoardValues[mineLocations[i][0]][
            mineLocations[i][1]
          ].revealed = true;
          setBoard(newBoardValues);

          // }, 500);
        }
      }
      setGameOver(true);
    } else {
      // newBoardValues[x][y].revealed = true;
      newBoardValues = revealed(newBoardValues, x, y, newNonMinesCount);
      if (!newBoardValues) {
        return;
      }
      setBoard(newBoardValues.arr);
      setNonMinesCount(newBoardValues.newNonMinesCount);
    }
  };

  const flagCell = (x, y) => {
    let newBoardValues = JSON.parse(JSON.stringify(board));
    newBoardValues[x][y].flagged = !newBoardValues[x][y].flagged;
    setBoard(newBoardValues);
  };
  const flagDei = (x, y) => {
    let newBoardValues = JSON.parse(JSON.stringify(board));
    if(newBoardValues[x][y].flagged){
      setFlagCount(flagCount + 1);
    }
    else{
      setFlagCount(flagCount - 1);
    }
  };
  return (
    <div
      style={{ boxShadow: "0 4px 3px rgba(0,0,0,0.3)", position: "relative" }}
    >
      {gameOver && <Modal reset={setRestart} completeTime={newTime} />}
      
    <div
      // 上側のツール画面のデザイン
      style={{
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <span role="img" aria-label="flag" style={{ paddingBottom: 10 }}>
       🚩 <span style={{ color: "white", fontSize: 20, }}>{flagCount}</span>     
      </span>     
      <Timer gameOver={gameOver} sendTime={setTime} />
    </div>
      {board.map((row, inde) => {
        return (
          <div style={{ display: "flex" }} key={inde}>
            {row.map((singleCell, index) => {
              return (
                <Cell
                  key={index}
                  data={singleCell}
                  updateBoard={updateBoard}
                  flagCell={flagCell}
                  flagDei={flagDei}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}