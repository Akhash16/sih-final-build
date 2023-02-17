import React, { useState } from 'react';
import { CirclePicker } from "react-color";
import $ from 'jquery';
import { Button } from '@mui/material';
// import '../../asset/css/otp.css'
// import SubmitButton from '../SubmitButton';



var a = [null, null, null, null, null]
function PolygonPuzzle() {
  const [color, setcolor] = useState('#fff')
  $(".up").on("mousedown", function (e) {
    $(".up").css("border-bottom", " 100px solid" + color)
    a[1] = color
  });
  $(".down").on("mousedown", function (e) {
    $(".down").css("border-top", " 100px solid" + color)
    a[2] = color
  });
  $(".right").on("mousedown", function (e) {
    $(".right").css("border-left", " 100px solid" + color)
    a[4] = color
  });
  $(".left").on("mousedown", function (e) {
    $(".left").css("border-right", " 100px solid" + color)
    a[3] = color
  });
  $(".square").on("mousedown", function (e) {
    $(".square").css("background", color)
    a[0] = color
  });
  return (
    <div className='full-screen bg-home3'>
      <div className="container1">
        <div className="content">
          <div className="poly">
            <div className="up"></div>
            <div className="left"></div>
            <div className="square"></div>
            <div className="right"></div>
            <div className="down"></div>
            <CirclePicker className='circle-picker' color={color} onChange={updatedColor => setcolor(updatedColor.hex)} />
          </div>
          <br />
          {/* <div className='button-css'><Button variant='contained' className='temp' onClick={() => console.log(a)}>Confirm</Button></div> */}
          {/* <SubmitButton password={a.join('')} newUser={newUser} email={email} domainName={domainName} toUpdate={toUpdate} puzzleId={puzzleId} /> */}


        </div></div>
    </div>
  );
}

export default PolygonPuzzle;