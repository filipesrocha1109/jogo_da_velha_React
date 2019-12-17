import React,{ useState} from 'react';

import './TicTacToe.css';
 //video parado 20:52
 //https://www.youtube.com/watch?v=kFXDcaUcOto


function TicTacToe() {
  //cria classe, campos para o jogo
  const empityBoard = Array(9).fill("");
  const[board,setBoard]=useState(empityBoard);
  //criar jogadores por default O
  const[currentPlayer,setcurrentPlayer]=useState("O");
  // funcção que aou clicar verifica o jogador e seta no campo
  const handlecellclick = (index)=>{
    setBoard(board.map((item, itemIndex)=> itemIndex === index ? currentPlayer : item));
    setcurrentPlayer(currentPlayer === "X" ? "O" :"X");
  }

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className="board">

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
    </main>



  );
}

export default TicTacToe;
