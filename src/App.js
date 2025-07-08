import React, { useEffect, useState, useRef } from 'react'
import SquareMesh from './Components/SquareMesh'
import Footer from './Components/Footer'
import NavBar2 from './Components/NavBar2'
import ReplayIcon from '@mui/icons-material/Replay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';
import Lottie from 'lottie-web';
import data from '../src/data.json';
import firecrackerx from "../src/Assests/firecracker.mp3";
import turnx from "../src/Assests/Turn Change.wav";
import winx from "../src/Assests/win.mp3";
import resetx from "../src/Assests/reset.mp3";
import cutx from "../src/Assests/cut.wav";
// import Drawx from "../src/Assests/Draw.mp3";
import "./App.css";
// import Navbar from './Components/Navbar';
// import { Games } from '@mui/icons-material';

const initialState = ["", "", "", "", "", "", "", "", ""];
const getlocalXscore=()=>{
  const data=localStorage.getItem('Xscore');
  if(data)
  {
    return JSON.parse(data);
  }
  else if (data===null){
    return 0;
  }
}
const getlocalYscore=()=>{
  const data=localStorage.getItem('Yscore');
  if(data)
  {
    return JSON.parse(data);
  }
  else if (data===null){
    return 0;
  }
}


export default function App() {
  const [Xturn, setTurn] = useState(true);
  const [pause, setPause] = useState(false);
  const [AnimShow, setAnimShow] = useState(false);
  const [Message, setMessage] = useState("Player X's Turn");
  const [XScore, setXScore] = useState(getlocalXscore());
  const [YScore, setYScore] = useState(getlocalYscore());
  const [gameState, setGamestate] = useState(initialState);
  const [classess, setclassess] = useState('');
  const firecracker = new Audio(firecrackerx);
  const turn = new Audio(turnx);
  const winxx = new Audio(winx);
  const reset = new Audio(resetx);
  const cut = new Audio(cutx);
  // const Draw = new Audio(Drawx);

  const clickHandler = (i) => {
    var strings = Array.from(gameState);
    if (!pause) {
      // console.log("gamestate before", gameState);
      if (strings[i] === "") {
        turn.play();
        strings[i] = Xturn ? "X" : "0";
        setGamestate(strings);
        // console.log("gamestate", gameState);
        setTurn(!Xturn);
        setMessage(Xturn ? "Player 0's Turn" : "Player X's Turn");
      }

    }
    // else if(strings.length===9)
    // {
    //   setMessage('Match Draw Please Reset');
    //   Draw.play();
    // }

  }
  const CheckWin = () => {
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    win.forEach((e) => {
      const [a, b, c] = e;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
        setMessage("Player " + gameState[a] + " Wins !");
        setPause(true);
        setAnimShow(true);
        firecracker.play();
        winxx.play();
        // console.log("gameState[a]",gameState[a]);
        //   return (gameState[a]);
        (gameState[a] === 'X' ? setXScore(XScore + 1) : setYScore(YScore + 1));
        if(a===1 && b===4)
        {
          setclassess('line-VM');
          cut.play();
        }
        if(a===0 && b===3)
        {
          setclassess('line-VL');
          cut.play();
        }
        if(a===2 && b===5)
        {
          cut.play();
          setclassess('line-VR');
        }
        if(a===3 && b===4)
        {
          cut.play();
          setclassess('line-HM');
        }
        if(a===0 && b===1)
        {
          cut.play();
          setclassess('line-HT');
        }
        if(a===6 && b===7)
        {
          cut.play();
          setclassess('line-HB');
        }
        if(a===0 && b===4)
        {
          cut.play();
          setclassess('line-C1');
        }
        if(a===2 && b===4)
        {
          cut.play();
          setclassess('line-C2');
        }
      }
    })
  }
  const container = useRef(null);
  const containerX = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: data,
    })
    Lottie.loadAnimation({
      container: containerX.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: data,
    })
  }, [AnimShow])

  useEffect(() => {
    CheckWin();

    //It waas showing this error : Line 74:5:  React Hook useEffect has a missing dependency: 'CheckWin'. Either include it or remove the dependency array  react-hooks/exhaustive-deps if I was not using the folloeing Disable Rule. 
    //  disable the rule for a single line
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [Xturn]);

  useEffect(() => {
    // console.log("XScore", XScore, YScore);
    localStorage.setItem('Xscore', JSON.stringify(XScore));
    localStorage.setItem('Yscore', JSON.stringify(YScore));
  }, [XScore, YScore]);

  const clearFunc = () => {
    reset.play();
    setGamestate(initialState);
    console.log("gameState", gameState);
    setPause(false);
    setAnimShow(false);
    setclassess('');
  }
  const clearScore=()=>{
    setXScore(0);
    setYScore(0);
  }
  const PlayPauseHandler = () => {
    setPause(pause ? false : true);
  };

  return (
    <>
    {/* <Navbar/> */}
    <NavBar2/>
    <div className='app-header'>
      <div className="score-board">
        <h1 style={{ margin: ' 0' }}>Score Board</h1>
        <div ><hr /></div> 
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className={XScore!==0?(XScore>=YScore?"X-score-green":"X-score-red"):null } style={{
            border: 'solid',
            width: '50%',
            borderRadius: '7px'
          }}>
            <h1>X</h1>
            <hr style={{
              marginTop: '-26px',
              width: '48px'
            }} />
            <h1>{XScore}</h1>
          </div>
          <h1 style={{ margin: ' 0px 7px' }}>:</h1>
          <div className={YScore!==0?(YScore>=XScore?"Y-score-green":"Y-score-red"):null } style={{
            border: 'solid',
            width: '50%',
            borderRadius: '7px'
          }}>
            <h1>0</h1>
            <hr style={{
              marginTop: '-26px',
              width: '48px'
            }} />
            <h1>{YScore}</h1>
          </div>
        </div>
        <IconButton aria-label="Reset Score" onClick={clearScore} >
          <ReplayIcon style={{ color: "white" }} />
        </IconButton>
      </div>


      <p className="heading-text ">{Message}</p>
      {AnimShow && <div className="animation">
        <div className="lottie-1" ref={container}>
        </div>
        <div className="lottie-2" ref={containerX}>
        </div>
      </div>
      }
       <div className={classess.length>1?`${classess}`:'line'}><hr className='actual-line' /></div>
      <div >

        <div className="row jc-center">
          <SquareMesh className="b-bottom-right" initialState={gameState[0]} function={() => { clickHandler(0) }} />
          <SquareMesh className="b-bottom-right" initialState={gameState[1]} function={() => { clickHandler(1) }} />
          <SquareMesh className="b-bottom " initialState={gameState[2]} function={() => { clickHandler(2) }} />
        </div>
        <div className="row jc-center">
          <SquareMesh className="b-bottom-right " initialState={gameState[3]} function={() => { clickHandler(3) }} />
          <SquareMesh className="b-bottom-right " initialState={gameState[4]} function={() => { clickHandler(4) }} />
          <SquareMesh className="b-bottom" initialState={gameState[5]} function={() => { clickHandler(5) }} />
        </div>
        <div className="row jc-center">
          <SquareMesh className="b-right " initialState={gameState[6]} function={() => { clickHandler(6) }} />
          <SquareMesh className="b-right " initialState={gameState[7]} function={() => { clickHandler(7) }} />
          <SquareMesh initialState={gameState[8]} function={() => { clickHandler(8) }} />
        </div>
      </div>
      <div className="button">
        <IconButton aria-label="Reset Game" onClick={clearFunc} >
          <ReplayIcon style={{ color: "white" }} />
        </IconButton>
        <IconButton aria-label="Reset Game" onClick={PlayPauseHandler}  >
          {pause ? <PlayCircleIcon style={{ color: "white" }} /> : <PauseCircleIcon style={{ color: "white" }} />}
        </IconButton>
      </div>

      <Footer></Footer>
  
    </div>
    </>

  )
}
