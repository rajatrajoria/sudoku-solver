import React from "react";
import "./navbar.css"

export default function Navbar(){
    return( 
        <div className="header">
            <nav>
                <h1>Sudoku Solver</h1>
            </nav>
            <div className="strip"></div>
        </div>
    );
}