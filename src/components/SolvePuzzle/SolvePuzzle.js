import React from "react";
import './solvepuzzle.css';

export default function SolvePuzzle(props)
{
    // const [grid, setgrid] = React.useState(props.data);

    //Displaying the solving table and adding appropriate styles to the box.
    let tablerowCollection = []
    {
        for(let i=0;i<9;i++)
        {
            let tablerow=[];
            for(let j=0;j<9;j++)
            {
                if(i%3==2 && j%3!=2)
                    tablerow.push(<td id={9*i+j} style={{borderBottom: "3px solid #2c0bea"}}> {props.data[i][j]} </td>)
                else if(i%3!=2 && j%3==2)
                    tablerow.push(<td id={9*i+j} style={{borderRight: "3px solid #2c0bea"}}> {props.data[i][j]} </td>)
                else if(i%3==2 && j%3==2)
                    tablerow.push(<td id={9*i+j} style={{borderBottom: "3px solid #2c0bea", borderRight: "3px solid #2c0bea"}}> {props.data[i][j]} </td>)
                else
                    tablerow.push(<td id={9*i+j}> {props.data[i][j]} </td>)
            }
            tablerowCollection.push(tablerow);
        }
    }

/***********************************************************************************************/

    // function isValid(grid, row, col, val)
    // {
    //     if(val=="")
    //         return true;
    //     if(val<'0' || val>'9')
    //         return false;

    //     for(let i=0;i<9;i++)
    //     {
    //         if(i==row)
    //             continue;
    //         if(grid[i][col] == val)
    //             return false;
    //     }
    //     for(let j=0;j<9;j++)
    //     {
    //         if(j==col)
    //             continue;
    //         if(grid[row][j]==val)
    //             return false;
    //     }
    //     let r = row - (row%3);
    //     let c = col - (col%3);
    //     for(let i=r;i<r+3;i++)
    //     {
    //         for(let j=c;j<c+3;j++)
    //         {
    //             if(i==row && j==col)
    //                 continue;
    //             if(grid[i][j] == val)
    //                 return false;
    //         }
    //     }
    //     return true;
    // }

    // function solve()
    // {
    //     for(let i=0;i<9;i++)
    //     {
    //         for(let j=0;j<9;j++)
    //         {
    //             if(grid[i][j] == "")
    //             {
    //                 for(let k=1;k<=9;k++)
    //                 {
    //                     if(isValid(grid,i,j,k)==true)
    //                     {
    //                         var copy = [...grid];
    //                         copy[i][j] = k;
    //                         setgrid(copy);
                            
    //                         if(solve()==true)
    //                             return true;
                            
    //                         var copy = [...grid];
    //                         copy[i][j] = "";
    //                         setgrid(copy);
    //                     }
    //                 }
    //                 return false;
    //             }
    //         }
    //     }   
    //     return true;
    // }

    // function handleSolve()
    // {
    //     let readyToSolve = true;
    //     for(let i=0;i<9;i++)
    //     {
    //         for(let j=0;j<9;j++)
    //         {
    //             if(isValid(grid, i, j, grid[i][j])==false)
    //             {
    //                 readyToSolve = false;
    //                 break;
    //             }
    //         }
    //     }
    //     if(readyToSolve)
    //         solve();
    //     else
    //         window.alert("It's not a valid sudoku...");
    // }

/***********************************************************************************************/

    return(
        <div className="container-solve-button">
            <div className="container-solve">
                <table>
                    <tr>{tablerowCollection[0]}</tr>
                    <tr>{tablerowCollection[1]}</tr>
                    <tr>{tablerowCollection[2]}</tr>
                    <tr>{tablerowCollection[3]}</tr>
                    <tr>{tablerowCollection[4]}</tr>
                    <tr>{tablerowCollection[5]}</tr>
                    <tr>{tablerowCollection[6]}</tr>
                    <tr>{tablerowCollection[7]}</tr>
                    <tr>{tablerowCollection[8]}</tr>
                </table>
            </div> 
        </div>
    );
}
    