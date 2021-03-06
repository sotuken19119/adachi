import React, { useState, useEffect } from "react";

export default function Auth({data, setRoginUser, setRoginFlg, setRogTimeFlg}){
    //idだよ
    const [id_str,setId] = useState("");
    const [pass_str,setPass] = useState("");
    const [render, setRender] = useState(true);
    const [error_str,setError] = useState("");

    function doChangeID(e) {
        setId(e.target.value);
    }

    //パスワードの変更
    function doChangePass(e) {
        setPass(e.target.value);
    }

    function doAction(e) {
        addFireData();
        
    }

    function checkStr(ID,pass){
        if(ID == '' && pass == ''){
            setError("IDとパスワードを入力してください");
            return false;
        }else{
            if(checkID(ID) && checkPass(pass)) return true;
        }
    }

    function checkID(ID){
        if(ID == ''){
            setError("IDを入力してください");
            return false;
        }
        return true;
    }

    function checkPass(pass){
        if(pass == ''){
            setError("パスワードを入力してください");
            return false;
        }
        return true;
    }

    function addFireData() {
        var flug = false;
        if(checkStr(id_str,pass_str)){
            console.log(data);
            for(let i in data){
                console.log(data[i].ID);
                if(data[i].ID == id_str){
                    if(data[i].Pass == pass_str){
                        flug = true;
                        setRoginUser(id_str);
                    }
                }
            }
        }
        if(flug == true){
            console.log("a");
            setRender(false);
            setRoginFlg(false);
            setRogTimeFlg(true);
        }else{
            setId("");
            setPass("");
            setError("IDまたはパスワードが間違っています。")
        }
    }
        
    return (
        <div
            // モーダルのデザイン
            style={{
                opacity: render ? 1 : 0,　//render-stateがtrueだったら透明化解除
                height: "160%",
                width: "150%",
                marginTop: -150,
                position: "absolute",
                background: "rgba(0,0,0,0.3)", //alphaは透明度の指定
                zIndex: 9999
                }}
        >
            <div style={{
                marginTop: '50%',
                }}
            >
                <input
                type="text"
                placeholder="your ID."
                onChange={doChangeID}
                value={id_str}
                />
                <input
                type="text"
                placeholder="your password."
                onChange={doChangePass}
                value={pass_str}
                />
                <div>{error_str}</div>
                <button onClick={doAction}>login</button>
            </div>
        </div>
    );
}