import React,{useState,useEffect} from "react";

export default function RankingNormal({data,userDataNormal}) {
    
    return (
        <div>
            <div><br />
                <div><span style={{paddingRight:70}}>BestTime</span>　<span>Name</span></div> <br />
                <div><span style={{paddingRight:100}}>{data[userDataNormal[0]].nomalTime}</span>　<span>{data[userDataNormal[0]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataNormal[1]].nomalTime}</span>　<span>{data[userDataNormal[1]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataNormal[2]].nomalTime}</span>　<span>{data[userDataNormal[2]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataNormal[3]].nomalTime}</span>　<span>{data[userDataNormal[3]].ID}</span></div> <br />
            </div> 
        </div>
    );
}