import React,{ useState, useEffect} from 'react';

import './TicTacToe.css';
 //video parado 20:52
 //https://www.youtube.com/watch?v=kFXDcaUcOto


function TicTacToe() {
  //cria classe, campos para o jogo
  const empityBoard = Array(9).fill("");
  const[board,setBoard]=useState(empityBoard);
  //criar jogadores por default O
  const[currentPlayer,setcurrentPlayer]=useState("O");
  // seta um vencedor para parar o jogo
  const[winner,setWinner]=useState(null);
  // funcção que aou clicar verifica o jogador e seta no campo
  const handlecellclick = (index)=>{
    // verifica se tem um vencedor
    if(winner) return null;
    //verifica se ja esta marcado
    if(board[index] !=="") return null;
    // verifica se é x ou o
    setBoard(board.map((item, itemIndex)=> itemIndex === index ? currentPlayer : item));
    setcurrentPlayer(currentPlayer === "X" ? "O" :"X");
  }
  //função que verifica vencedor do jogo
  const checkWinner =() =>{
    //array verica possibilidades de vencer
    const possibleWaysToWin = [
      //horizontais
      [board[0],board[1],board[2]],
      [board[3],board[4],board[5]],
      [board[6],board[7],board[8]],

      //verticais
      [board[0],board[3],board[6]],
      [board[1],board[4],board[7]],
      [board[2],board[5],board[8]],

      //diagonal
      [board[0],board[4],board[8]],
      [board[2],board[4],board[6]],

    ];
    possibleWaysToWin.forEach(cells=>{

      if(cells.every(cell => cell ==="O")) setWinner("O")
      if(cells.every(cell => cell ==="X")) setWinner("X")

    });

    checkDraw();

  }
  //verificação de empate
  const checkDraw =() => {
    if(board.every(item =>item !== "")) setWinner("E");

  }

  useEffect(checkWinner,[board]);
// recomeça o jogo
  const resetGame=()=>{
    setcurrentPlayer("O");
    setBoard(empityBoard);
    setWinner(null);
  }

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>

        {board.map((item,index)=>(
          // reenderiza campos
          <div
          // cada div recebe um valor
            key={index}
            className={`cell ${item}`}
          // cria valor para item
            onClick={()=> handlecellclick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner &&
      <footer>
      {winner === "E" ?
        <h2 className="Winner-messege">
          <span className={winner}> Empatou!</span>
        </h2>
      :
        <h2 className="Winner-messege">
          <span className={winner}>{winner}</span> Venceu!
        </h2>
      }
      <button onClick={resetGame}>Recomeçar Jogo!</button>
      </footer>
      }
    </main>

  );
}

export default TicTacToe;
