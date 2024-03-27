import React from "react";
import Button from '@mui/material/Button';

const SubmitButton = (props) => {
   
function OnPress(){
    console.log(props.value)
}

    return (
        <>
            <Button variant="contained" className="m-4" onClick={OnPress} >Click</Button>

            
        </>
    );

}

export default SubmitButton;