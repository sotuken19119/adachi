import React,{useState,useEffect} from "react";


export default function RankingEazy({data}){
    let userData = [0,0,0,0,0];
    useEffect(() => {
        sortData();
    },[]);

    function sortData(){
        let x = 999999;
      
        for(let i in data){
            userData[i] = data[i].eazyTime;
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
            data[i].eazyTime = userData[i];
        }
    }
    return (
        <div><br />
            <div><span style={{paddingRight:70}}>BestTime</span>　<span>Name</span></div> <br />
            <div><span style={{paddingRight:100}}>a</span>　<span>a1</span></div> 
            <div> <span style={{paddingRight:100}}>b</span>　<span>b2</span></div> 
            <div><span style={{paddingRight:100}}>c</span>　<span>c1</span></div> 
            <div><span style={{paddingRight:100}}>d</span>　<span>d1</span></div> <br />
        </div>         
    );
}