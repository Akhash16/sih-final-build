import React from 'react'
import PatternLock from "react-pattern-lock";
// import '../../asset/css/otp.css'
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import SubmitButton from '../SubmitButton';

const Patternpuzzle = () => {
    const [path, setPath] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);

    const reset = () => {
        // Renable the pattern
        setDisabled(false);
        // Clear the pattern.
        setPath([]);
    };
    return (
        <div className='full-screen bg-home3'>
            <div className="container1">
                <div className="content">
                    <PatternLock
                        path={path}
                        width={300}
                        size={4}
                        disabled={disabled}
                        allowJumping={true}
                        invisible={true}

                        onChange={(path) => setPath(path)}

                        onFinish={() => {
                            setDisabled(true);
                            console.log(path.join(' '));
                        }}
                        style={{
                            margin: "0 auto",
                            backgroundColor: 'black',
                            borderRadius: 30,

                        }}
                    />
                    <p>Pattern output: {path.join(", ")}</p>
                    {/* A button that is used to reset the pattern */}
                    <Button variant="outlined" color="error" onClick={reset} style={{ marginRight: "30px" }}>Reset</Button>
                    {/* <Button variant="outlined" color="success" onClick={reset} style={{ marginLeft: "10px" }}>Submit</Button> */}
                    {/* <SubmitButton password={path.join('')} newUser={newUser} email={email} domainName={domainName} toUpdate={toUpdate} puzzleId={puzzleId} /> */}
                    <br /><br />
                    {/* <Link to="/otp">Forget Password ?</Link> */}
                    {/* document.location.replace(newUser=1&domainName=www.microsoft.com&email=daadreyaa@gmail.com&puzzleId=1) */}
                </div>
            </div>
            {/*<div style={{marginTop:"50px"}}>*/}
            {/*    <PatternLock*/}
            {/*        path={path}*/}
            {/*        width={300}*/}
            {/*        size={4}*/}
            {/*        disabled={disabled}*/}
            {/*        allowJumping={true}*/}
            {/*        // invisible={true}*/}
            {/*        // onchange is called every time a point is touched*/}
            {/*        onChange={(path) => setPath(path)}*/}
            {/*        // We disable the pattern lock when the user finishes drawing a pattern so they can no longer modify it.*/}
            {/*        onFinish={() => {*/}
            {/*            setDisabled(true);*/}
            {/*            console.log(path.join(' '));*/}
            {/*        }}*/}
            {/*        style={{*/}
            {/*            margin: "0 auto",*/}
            {/*            backgroundColor: 'black',*/}
            {/*            borderRadius: 30*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}


        </div >
    )
}

export default Patternpuzzle