import React, {useState} from 'react';
import { CirclePicker } from "react-color";
import $ from 'jquery';
function PolygonPuzzle() {
  const [color, setcolor]=useState('#fff')
  $(".up").on("mousedown",function(e){
    $(".up").css("border-bottom"," 100px solid"+color)
        } ) ;
        $(".down").on("mousedown",function(e){
          $(".down").css("border-top"," 100px solid"+color)
              } ) ;
              $(".right").on("mousedown",function(e){
                $(".right").css("border-left"," 100px solid"+color)
                    } ) ;
                    $(".left").on("mousedown",function(e){
                      $(".left").css("border-right"," 100px solid"+color)
                          } ) ;
                          $(".square").on("mousedown",function(e){
                            $(".square").css("background",color)
                                } ) ;
  return (
    <div class="container1">
    <div class="content">
    <div class = "poly">
      <div class="up"></div>
      <div class="left"></div>
      <div class="square"></div>
        <div class="right"></div>
      <div class="down"></div>  
      <CirclePicker  className='circle-picker' color={color} onChange={updatedColor => setcolor(updatedColor.hex)}/>
    </div>
    </div></div>
  );
}

export default PolygonPuzzle;