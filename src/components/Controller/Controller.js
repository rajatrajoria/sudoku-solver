import React from "react"
import "./controller.css"
import TakePuzzle from "../TakePuzzle/TakePuzzle"
import SolvePuzzle from "../SolvePuzzle/SolvePuzzle";

export default function Controller()
{

    // Making an empty state for storing the inputs.
    let structure = new Array(9);
    for(let i=0;i<9;i++)
        structure[i] = new Array(9).fill("");

    //Hooking and Handling inputs in React forms.
    const [data, setData] = React.useState(structure);
    function handleChange(X,Y,val){
        let copyarr = [...data];
        copyarr[X][Y] = val;
        setData(copyarr);
    }

    //Making a copy for the display grid array. Any change here will cause it to re-render which is what I need.
    const [grid, setgrid] = React.useState(data);

    //This function checks if the (row, col) grid is safe or not.
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

    //Solve button functionality.
    function solve()
    {
        for(let i=0;i<9;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(grid[i][j] == "")
                {
                    for(let k=1;k<=9;k++)
                    {
                        if(isValid(grid,i,j,k)==true)
                        {
                            var copy = [...grid];
                            copy[i][j] = k;
                            setgrid(copy);
                            
                            if(solve()==true)
                                return true;
                            
                            var copy = [...grid];
                            copy[i][j] = "";
                            setgrid(copy);
                        }
                    }
                    return false;
                }
            }
        }   
        return true;
    }

    //This function is triggered when the Solve button is clicked.
    function handleSolve()
    {
        let readyToSolve = true;
        for(let i=0;i<9;i++)
        {
            for(let j=0;j<9;j++)
            {
                if(isValid(grid, i, j, grid[i][j])==false)
                {
                    readyToSolve = false;
                    break;
                }
            }
        }
        if(readyToSolve)
            solve();
        else
            window.alert("It's not a valid sudoku...");
    }

    //This function is triggered when the Reset button is clicked.
    function reset()
    {
        // for(let i=0;i<9;i++)
        // {
        //     for(let j=0;j<9;j++)
        //     {
        //         props.handleChange(i,j,"");
        //     }
        // }
        // document.getElementById("input-form").reset();
        // document.querySelectorAll(".gridcell").forEach(cell=>{
        //     cell.style.backgroundColor = "white"
        // })
        window.location.reload();
    }

    return(
        <div>
            <div className="controller-container">
                <TakePuzzle handleChange={handleChange} data={data}/>
                <div className="buttons">
                    <button onClick={reset}>Reset</button>
                    <button onClick={handleSolve}>Solve</button>
                </div>
                <SolvePuzzle data = {data}/>
            </div>
        </div>
    );
}