import React,{ useState} from 'react';

import './TicTacToe.css';

function TicTacToe() {

  const empityBoard = Array(9).fill("");
  const[board,setBoard]=useState(empityBoard);

  const handlecellclick = (index)=>{
    setBoard(board.map((item, itemIndex)=> itemIndex === index ? "X" : item));
  }

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className="board">
        {board.map((item,index)=>(
          <div
            key={index}
            className={`cell ${item}`}
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
