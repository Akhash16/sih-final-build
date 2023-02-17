
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { Redirect } from "react-router-dom";
// import {
//     Routes,
//     Route,
//     Link,
//     Navigate,
// } from 'react-router-dom';
import { grey } from "@mui/material/colors";
import '../../assets/css/otp.css'
import { CardMedia, colors } from "@mui/material";
import screen1 from '../../assets/img/screenshots/1.png'
import screen2 from '../../assets/img/screenshots/2.png'
import screen3 from '../../assets/img/screenshots/3.png'
import screen4 from '../../assets/img/screenshots/4.png'
import screen5 from '../../assets/img/screenshots/5.jpeg'

import Grid from "@mui/material/Grid";
// import axios from "axios";
// import { queries } from '@testing-library/react';


// import PatternPuzzle from "./PatternPuzzle";
// import TapPuzzle from "./TapPuzzle";
// import ImgShuffle from "./ImgShuffle";
// import ColorPickPuzzle from "./ColorPickPuzzle";
// import LanguageSelect from "./LanguageSelect";

// var CryptoJS = require("crypto-js");
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret');
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// const queryParams = new URLSearchParams(window.location.search);

// const email = queryParams.get('email')
// const domainName = queryParams.get('domainName')
// const newUser = queryParams.get('newUser')

const Boxx = (props) => {


    // console.log(email, domainName, newUser)

    return (
        <div style={{ padding: "50px", marginLeft: "60px" }}>
            <Box sx={{
                width: '100%',
                marginTop: 8,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={props.fn}>View</Button>
                    </CardActions>
                </Card>

            </Box>
        </div>
    )
}

const Puzzles = (props) => {

    const id = props.puzzles_selected
    var comp = []

    var buttons = []
    function OnPress(y) {
        if (y === 1) {
            console.log("1");
            // window.location.href = "http://localhost:3000/1?newUser=" + newUser + "&domainName=" + domainName + "&email=" + email + "&puzzleId=1";
        }
        else if (y === 2) {
            console.log("2");
            // window.location.href = "http://localhost:3000/2?newUser=" + newUser + "&domainName=" + domainName + "&email=" + email + "&puzzleId=2";
        }
        else if (y === 3) {
            console.log("3");
            // window.location.href = "http://localhost:3000/3?newUser=" + newUser + "&domainName=" + domainName + "&email=" + email + "&puzzleId=3";
        }
        else if (y === 4) {
            console.log("4");
            // window.location.href = "http://localhost:3000/4?newUser=" + newUser + "&domainName=" + domainName + "&email=" + email + "&puzzleId=4";
        }
        else if (y === 5) {
            console.log("5");
            // window.location.href = "http://localhost:3000/5?newUser=" + newUser + "&domainName=" + domainName + "&email=" + email + "&puzzleId=5";
        }
    }
    id.forEach(function (x) {
        if (x === 1) {
            // comp.push(<TapPuzzle />)
            buttons.push(
                <Grid xs={4}>
                    <Boxx name="Pattern Puzzle" fn={() => OnPress(1)} img={screen1} body="Join the dots in any pattern.
                    Jumping can also be used to connect dots without using intermediate ones."></Boxx>
                </Grid>
            )
            // buttons.push(<Button variant="contained" className="m-4" onClick={()=> OnPress(1)} >TapPuzzle</Button>

        }
        if (x === 2) {
            // comp.push(<PatternPuzzle />)
            buttons.push(
                <Grid xs={4}>
                    <Boxx name="Polygon Puzzle" fn={() => OnPress(2)} img={screen2} body="Create unique patterns by assigning colors to each quadrants. Quadrants color assignment can be for single portion or for all."></Boxx>
                </Grid>
            )
            // buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >PatternPuzzle</Button>)
        }
        if (x === 3) {
            // comp.push(<LanguageSelect />)
            buttons.push(
                <Grid xs={4}>
                    <Boxx name="Language Puzzle" fn={() => OnPress(3)} img={screen3} body="
                    User can create their own pattern by combination of multiple language for higher level of security."></Boxx>
                </Grid>
            )

            // buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >LanguagePuzzle</Button>)
        }
        if (x === 4) {
            // comp.push(<ColorPickPuzzle />)
            buttons.push(
                <Grid xs={4}>
                    <Boxx name="Image Shuffle" fn={() => OnPress(4)} img={screen4} body="Create custom patterns by choosing any combination of tiles .
Each tiles can also be  clicked any number of times."></Boxx>
                </Grid>
                // <Button variant="contained" className="m-4" onClick={OnPress} >ImgShuffle</Button>
            )
            // buttons.push(<Button variant="contained" className="m-4" onClick={OnPress} >ColorPuzzle</Button>)
        }
        if (x === 5) {
            // comp.push(<ImgShuffle/>)
            buttons.push(
                <Grid xs={4}>
                    <Boxx name="Concentric circle Puzzle" fn={() => OnPress(5)} img={screen5} body="create patterns by selecting same or different  colors in each layer of the circle"></Boxx>
                </Grid>)
        }

    })

    return (
        <div className='full-screen bg-home4' style={{ height: "1000px" }}>
            <Grid container spacing={1}>
                {buttons}
            </Grid>
        </div>
    );
}

export default Puzzles;