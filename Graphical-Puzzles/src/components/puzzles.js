
import React from "react";
import Button from '@mui/material/Button';
import PatternPuzzle from "./PatternPuzzle";
import TapPuzzle from "./TapPuzzle";
import ImgShuffle from "./ImgShuffle";
import ColorPickPuzzle from "./ColorPickPuzzle";
import LanguageSelect from "./LanguageSelect";





const Puzzles = (props) => {

   



    const id = props.puzzles_selected
var comp = []

var buttons = []
function OnPress(y){
    

}
id.forEach(function (x) {
    if (x === 1) {
        comp.push(<TapPuzzle />)
        buttons.push(<Button variant="contained" className="m-4" onClick={()=> OnPress(1)} >TapPuzzle</Button>)
    }
    if (x === 2) {
        comp.push(<PatternPuzzle />)
        buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >PatternPuzzle</Button>)
    }
    if (x === 3) {
        comp.push(<LanguageSelect />)
        buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >LanguagePuzzle</Button>)
    }
    if (x === 4) {
        comp.push(<ColorPickPuzzle />)
        buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >ColorPuzzle</Button>)
    }
    if (x === 5) {
        comp.push(<ImgShuffle/>)
        buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >ImgShuffle</Button>)
    }

})
    
    return (
        <>

{buttons}

        </>
    );
}

export default Puzzles;