import React from "react";
import './puzzle.css'

export default function Save(){

    const [inpdata, setinpData] = React.useState("");
    function handleChange(event){
        setinpData(event.target.value);
    }
    // let inputgrid=[];
    // for(let i=0;i<=0;i++)
    // {
    //     const box = <input type="text" name="number"/>
    //     inputgrid.push(box);
    // }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
    const [data, setData] = React.useState("");
    async function handleSubmit(){
        setData(parseInt(inpdata));
        for(let i=1;i<=1000;i++)
        {
            setData(prevData=>prevData+1);
            await sleep(1);
        }

    }

    return(
        <div className="container">
            <form className="container-form">
                <input
                    type="text"
                    placeholder="Enter a number"
                    name="number"
                    onChange={handleChange}
                />
                {/* {inputgrid} */}
            </form>
            <button onClick={handleSubmit}>Operate</button>
            <div className="container-display">{data}</div>
        </div>
    );
}