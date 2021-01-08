import React from "react";

export default function RankingHard({data,userDataHard}){

    return (
        <div>
            <div><br />
                <div><span style={{paddingRight:70}}>BestTime</span>　<span>Name</span></div> <br />
                <div><span style={{paddingRight:100}}>{data[userDataHard[0]].hardTime}</span>　<span>{data[userDataHard[0]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataHard[1]].hardTime}</span>　<span>{data[userDataHard[1]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataHard[2]].hardTime}</span>　<span>{data[userDataHard[2]].ID}</span></div> 
                <div><span style={{paddingRight:100}}>{data[userDataHard[3]].hardTime}</span>　<span>{data[userDataHard[3]].ID}</span></div> <br />
            </div> 
        </div>
    );
}