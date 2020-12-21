import React,{ useState, useEffect } from "react";
import RankingEazy from "./RankingEazy";
import RankingNormal from "./RankingNormal";
import RankingHard from "./RankingHard";
import firebase from 'firebase';
import 'firebase/storage';

export default function Ranking ({setflgRank}){
    const [render,setRender] = useState(false);
    const [radio,setRadio] = useState("a");
    const [data, setData] = useState([]);
    

    useEffect(() => {
        setTimeout(() => {  // 時間を止める
          setRender(true);
        }, 1000);
        getFireData();
        
    }, []);

    function cancel(){
        setRender(false);
        setflgRank(false);
    }
    function getFireData(){
        //database取得
        let db = firebase.database();
        //データパスの取得
        let ref = db.ref("userInfo/");
        let self=this;
        //データ取得時のメソッド
        ref
            //並び変えメゾット
            //キーによって並び変える
            .orderByKey()
            //フィルターメゾット
            //最初から引数の数だけ取り出す
            .limitToFirst(10)
            //第一引数処理のイベント名
            //snapshotはイベント時にうけとった
            //データの情報をまとめたオブジェクト
            .on('value',snapshot=>{
                setData(snapshot.val());
                
            });
            
    }

    return (
        <div
            style={{
                opacity: render ? 1 : 0,
                height: "100%",
                width: "100%",
                position: "absolute",
                background: "rgba(0,0,0,0.3)",
        }}
        >
            <div>Ranking</div>
            <div>
                <input type="radio" name="aradio" value="A" checked={radio === 'a'}
                        onChange={() => setRadio("a")}
                        />                      
                <label>Easy</label>
                <input type="radio" name="aradio" value="B" checked={radio === 'b'}
                        onChange={() => setRadio("b")}
                        /> 
                <label>Normal</label>

                <input type="radio" name="aradio" value="C" checked={radio === 'c'}
                        onChange={() => setRadio("c")}
                        /> 
                <label>Hard</label>
                <br/>
                <div>
                    {radio == "a" ? (
                         <RankingEazy data={data}/> 
                    ):( radio == "b" ?(
                        <RankingNormal data={data}/> 
                    ):(
                        <RankingHard data={data}/>
                    )
                    )}                                
                </div>
                    

            </div>
            
            
            <button onClick = {cancel}>戻る</button>
        </div>
    );
}