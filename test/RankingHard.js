import React,{useState,useEffect} from "react";

export default function RankingHard({data}){
    let userData = [0,0,0,0,0];
    useEffect(() => {
        sortData();
    },[]);

    function sortData(){
        let x = 999999;
      
        for(let i in data){
            userData[i] = data[i].hardTime;
        }
        userData.shift();
        for(let i = 0;i<4;i++){
            for(let j = 4;j>i;j--){
               if(userData[j] < userData[j-1]){
                    x = userData[j];
                    userData[j] = userData[j-1];
                    userData[j-1] = x;
                   
               }
            }
        }
        for(let i = 0; i < 4; i++){
            data[i].hardTime = userData[i];
        }
    }
    return (
        <div><br />
            <div><span style={{paddingRight:70}}>BestTime</span>　<span>Name</span></div> <br />
            <div><span style={{paddingRight:100}}>e</span>　<span>e1</span></div> 
            <div><span style={{paddingRight:100}}>f</span>　<span>f2</span></div> 
            <div><span style={{paddingRight:100}}>g</span>　<span>g1</span></div> 
            <div><span style={{paddingRight:100}}>h</span>　<span>h1</span></div> <br />
        </div>  
            
    );
}