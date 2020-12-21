import React,{useState,useEffect} from "react";
import firebase from 'firebase';
import 'firebase/storage';

export default function RankingNormal({data}) {
    let userData = [0,0,0,0,0];
    useEffect(() => {
        sortData();
    },[]);

    function sortData(){
        let x = 999999;
      
        for(let i in data){
            userData[i] = data[i].nomalTime;
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
            data[i].nomalTime = userData[i];
        }
    }
    
    
    return (
        <div>
            <div><br />
                <div><span style={{paddingRight:70}}>BestTime</span>　<span>Name</span></div> <br />
                <div><span style={{paddingRight:100}}>data[i].nomalTime</span>　<span>w1</span></div> 
                <div><span style={{paddingRight:100}}>s</span>　<span>s1</span></div> 
                <div><span style={{paddingRight:100}}>j</span>　<span>j1</span></div> 
                <div><span style={{paddingRight:100}}>f</span>　<span>f1</span></div> <br />
                <button>aa</button>
            </div> 
        </div>
    );
}