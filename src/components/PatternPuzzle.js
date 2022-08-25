import React from 'react'
import PatternLock from "react-pattern-lock";
import { Button } from '@mui/material';


const PatternPuzzle = () => {
    const [path, setPath] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);

    const reset = () => {

        setDisabled(false);

        setPath([]);
    };
    return (
        <>
        <div class="container1">
                <div class="content">
            <PatternLock
                path={path}
                width={300}
                size={4}
                disabled={disabled}
                allowJumping={true}
                invisible={false}

                onChange={(path) => setPath(path)}

                onFinish={() => {
                    setDisabled(true);
                    console.log(path.join(' '));
                }}
                style={{
                    margin: "0 auto",
                    backgroundColor: '#dddddd',
                    borderRadius: 30
                }}
            />

            <p>Pattern output: {path.join(", ")}</p>

            <Button  variant="contained" onClick={reset}>click</Button>
            </div></div>
        </>
    )
}

export default PatternPuzzle