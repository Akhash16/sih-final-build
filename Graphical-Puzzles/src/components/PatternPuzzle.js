import React from 'react'
import PatternLock from "react-pattern-lock";


const PatternPuzzle = () => {
    const [path, setPath] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);

    const reset = () => {
        // Renable the pattern
        setDisabled(false);
        // Clear the pattern.
        setPath([]);
    };
    return (
        <>
            <PatternLock
                path={path}
                width={300}
                size={4}
                disabled={disabled}
                allowJumping={true}
                invisible={true}
                // onchange is called every time a point is touched
                onChange={(path) => setPath(path)}
                // We disable the pattern lock when the user finishes drawing a pattern so they can no longer modify it.
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


            {/* A button that is used to reset the pattern */}
            <button className='btn btn-dark' onClick={reset}>click</button>
        </>
    )
}

export default PatternPuzzle