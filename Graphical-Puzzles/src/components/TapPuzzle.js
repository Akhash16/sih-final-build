import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import React from 'react';

// import AddIcon from '@mui/icons-material/Add';

const TapPuzzle = () => {

    const [count, setCount] = React.useState(0);
    const [code, setCode] = React.useState([]);

    return (
        <>
            <div className='container p-5'>
                <h3 className='text-danger'>Tap Here</h3>
                <Fab color="warning" aria-label="add" onClick={() => setCount(count + 1)}>
                    {count}
                </Fab>
            </div>
            <div className='container p-2'>
                <div className='row justify-content-around'>
                    <Button variant="outlined" color="secondary" className='col-md-6' style={{ width: 100 }} onClick={() => setCount(0)}>Reset Count</Button>

                    <Button variant="contained" color="secondary" className='col-md-6' style={{ width: 100 }} onClick={() => { setCode([...code, count]); setCount(0); }}>Next</Button>
                </div>
            </div>
            <div className='container p-2'>
                <div className='row justify-content-around'>
                    <Button variant="outlined" color="success" className='col-md-6' style={{ width: 100 }} onClick={() => setCode([])}>Reset Password</Button>
                    <Button variant="contained" color="success" className='col-md-6' style={{ width: 100 }}>Submit</Button>
                </div>

            </div>

            <div className='container justify-content-center'>
                <h6>Your Password {code.join(', ')}</h6>
            </div>

        </>
    )
}

export default TapPuzzle