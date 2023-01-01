import React from "react";
import './takepuzzle.css'

export default function Puzzle(props)
{

    //This function checks the validness of a particualr grid. Used for error colouring.
    function isValid(grid, row, col, val)
    {
        if(val=="")
            return true;
        if(val<'0' || val>'9')
            return false;

        for(let i=0;i<9;i++)
        {
            if(i==row)
                continue;
            if(grid[i][col] == val)
                return false;
        }
        for(let j=0;j<9;j++)
        {
            if(j==col)
                continue;
            if(grid[row][j]==val)
                return false;
        }
        let r = row - (row%3);
        let c = col - (col%3);
        for(let i=r;i<r+3;i++)
        {
            for(let j=c;j<c+3;j++)
            {
                if(i==row && j==col)
                    continue;
                if(grid[i][j] == val)
                    return false;
            }
        }
        return true;
    }

    //Custom defined function for handling change and to call the parent setFunction();
    function func(event)
    {
        let ID = parseInt(event.target.name);
        let X = parseInt(ID/9);
        let Y = parseInt(ID%9);
        let val = event.target.value;
        props.handleChange(X,Y,val);

        for(let i=0;i<9;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(isValid(props.data, i, j, props.data[i][j]))
                {
                    let tag = 9*i+j;tag+="";
                    document.getElementById(tag).style.backgroundColor = "black";
                }
                else
                {
                    let tag = 9*i+j;tag+="";
                    document.getElementById(tag).style.backgroundColor = "red";
                }
            }
        }
    }

    //This function is resetting the form. Triggered when Reset button is clicked! - - - - Problem here.

    //Structuring the grid input JSX and using colouring scheme;
    let grid=[];
    for(let i=0;i<9;i++)
    {
        let gridrow=[]
        for(let j=0;j<9;j++)
        {
            let id = 9*i + j;
            let box;
            if(i%3==2 && j%3!=2)
                box = <input autocomplete="off" maxLength="1" placeholder="" className="gridcell" type="text" id={id} name={id} onChange={func} style={{borderBottom: "3px solid #00FF00"}}/>
            else if(j%3==2 && i%3!=2)
                box = <input autocomplete="off" maxlength="1" placeholder="" className="gridcell" type="text" id={id} name={id} onChange={func} style={{borderRight: "3px solid #00FF00"}}/>
            else if(i%3==2 && j%3==2)
                box = <input autocomplete="off" maxlength="1" placeholder="" className="gridcell" type="text" id={id} name={id} onChange={func} style={{borderBottom: "3px solid #00FF00", borderRight: "3px solid #00FF00"}}/>
            else
                box = <input autocomplete="off" maxlength="1" placeholder="" className="gridcell" type="text" id={id} name={id} onChange={func}/>
            gridrow.push(box);
        }
        gridrow.push(<br/>)
        grid.push(gridrow)
    }

    return(
        <div className="container">
            <form className="container-form" id="input-form">
                {grid} 
            </form>
        </div>
    );
}