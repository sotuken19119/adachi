import React, { useState, useEffect } from "react";


export default function RankingEasy({data,userDataEasy}){
    console.log(data);
    console.log(userDataEasy);
    return (
        <div>
            <div><br />
                <div><span style={{paddingRight:70}}>BestTime</span>　<span>Name</span></div> <br />
                <div><span style={{paddingRight:100}}>{data[userDataEasy[0]].easyTime}</span>　<span>{data[userDataEasy[0]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataEasy[1]].easyTime}</span>　<span>{data[userDataEasy[1]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataEasy[2]].easyTime}</span>　<span>{data[userDataEasy[2]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataEasy[3]].easyTime}</span>　<span>{data[userDataEasy[3]].ID}</span></div> <br />
            </div> 
        </div>
    );
}