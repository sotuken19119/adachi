import React, { useState, useEffect } from "react";
import ModalClear from './ModalClear';
let timeIntervalId; 
export default function Timer({ gameOver, gameClear, sendTime , setRestart, setOptionflg , optionflg}) {
  let [time, setTime] = useState(0);
  let [sTime, setSTime] = useState(0);

  const checkGame = ()=>{
    if(gameClear == true || gameOver == true || optionflg) return true;
    else return false;
  };

  useEffect(() => {
    // ゲームオーバーの処理
    if ((time > 0 && gameOver) || (time > 0 && gameClear) || (time > 0 && optionflg)) {
      setSTime(time); // ゲームオーバー時のタイム
      
      console.log(gameOver);
    }
  }, [gameOver, gameClear , time , optionflg] );// 最初のマウント（DOMへのノードの追加)の時と指定された値に変化があった場合のみに第１引数の関数を実行。

  // useEffectのコールバックが実行開始
  useEffect(() => {
    const incrementTime = () => {
        let newTime = time + 1; // タイムに1秒追加
        setTime(newTime); // タイムの更新
        
    }; 
    // 1秒ごとの処理
    timeIntervalId = setTimeout(() => {
        incrementTime(); 
    },1000);
    if(gameOver || gameClear || optionflg) {
      setOptionflg(false);
      clearInterval(timeIntervalId);　// ここでクリアすることで多重にタイマーが実行されないようにする
      setTime(0);     // タイマーを0にリセット
      console.log("a");
    }
  }, [time, setTime, gameOver,gameClear, sendTime]);// 最初のマウント（DOMへのノードの追加)の時と指定された値に変化があった場合のみに第１引数の関数を実行。

  //console.log(timeIntervalId); 
 
  return (
    
    <div style={{ color: "white", fontSize: 20, }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {checkGame() ? sTime : time}　{/* ゲームオーバーなら終了時のタイムを表示、違うならタイムを表示 */}
      {gameClear && <ModalClear reset={setRestart} completeTime={sTime} />}
    </div>
  );
}