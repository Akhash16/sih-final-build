import React from 'react'
import { CirclePicker } from 'react-color';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import RightIcon from '@mui/icons-material/KeyboardArrowRight';

const ColorPickPuzzle = () => {
    const [selectedColors, setSelectedColors] = React.useState([])
    const text = '';

    return (
        <div className='container p-3 bg-white'>
            <CirclePicker
                // onSwatchHover={(color, event) => console.log(color)}
                onChangeComplete={(color) => setSelectedColors([...selectedColors, color.hex])}
            />

            <br></br>
            <br></br>

            <div className='row'>
                <div className='col-6'>
                    {selectedColors.map((color, index) => (<div className="container d-flex justify-content-center" style={{ backgroundColor: color, width: '100px', height: '10px', fontSize: 8 }}>{index}</div>))}
                </div>
                <div className='col-6 text-center'>
                    {/* <Button variant="contained" color="success">
                        Success
                    </Button> */}
                    <Fab color="warning" aria-label="next" size="medium">
                        <RightIcon />
                    </Fab>
                    <h3 className='text-waring p-3'><strong>Verify</strong></h3>
                </div>


            </div>


            {/* <h2>{selectedColors.join(' : ')}</h2> */}

            <br></br>

        </div>
    )
}

export default ColorPickPuzzle