import React from "react";
import jQuery from "jquery";
import $ from 'jquery';
import Button from "@mui/material/Button";
// import '../../asset/css/otp.css'
// import SubmitButton from "../SubmitButton";

const queryParams = new URLSearchParams(window.location.search);

const email = queryParams.get('email')
const domainName = queryParams.get('domainName')
const newUser = queryParams.get('newUser') == 1 ? true : false
const puzzleId = queryParams.get('puzzleId')
const toUpdate = queryParams.get('toUpdate') || 0


const img = new Image();
var width;
var height;
var length = 3;
var ylength = 3;
var count = 0
var pos = [];
var value = []
var sample = []
img.src = 'https://picsum.photos/id/1027/300/300';
img.onload = function () {
    var k = 0;
    width = this.width;
    height = this.height;
    for (var j = 0; j < length; j++) {
        for (var i = 0; i < length; i++) {
            count = count + 1;
            var left = (-1 * width / length * i).toString() + "px";
            var top = (-1 * height / ylength * j).toString() + "px";

            var num = i + "" + j;
            var element = jQuery('<div/>', {
                id: num,
                class: "splitImg",
                css: {
                    "width": Math.floor(width / length),
                    "height": Math.floor(height / ylength),
                    "background-position": left + " " + top,
                    "background-image": 'url(' + img.src + ')'
                },

            })

            sample.push(element)


            $("#" + i + j).on("mousedown", function (e) {
                value.push(i + "" + j)
                console.log(i + "" + j);
            });
        }
    }

    sample = sample.sort(() => Math.random() - 0.5)
    sample.map(e => {
        e.appendTo('#wrapper');
        $("#wrapper").width(width + (length * 2))
    })


    $("#00").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(1)
        console.log(1);
    });
    $("#10").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(2)
        console.log(2);
    });
    $("#20").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(3)
        console.log(3);
    });
    $("#01").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(4)
        console.log(4);
    });
    $("#11").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(5)
        console.log(5);
    });
    $("#21").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(6)
        console.log(6);
    });
    $("#02").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(7)
        console.log(7);
    });
    $("#12").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(8)
        console.log(8);
    });
    $("#22").on("mousedown", function (e) {
        $(this).animate({
            opacity: '0.7'
        })
        value.push(9)
        console.log(9);
    });


}


const ImgShuffle = () => {




    var Generate = () => {
        console.log("selected value: " + value);

    }


    return (
        <>
            <div className='full-screen bg-home3'>
                <div className="container1">
                    <div className="content">
                        <h4>Choose any number of tiles</h4>
                        <center><div id="wrapper" >
                        </div></center>
                        <br />
                        {/* <Button variant="contained" onClick={Generate} >Generate</Button> */}
                        {/* <SubmitButton password={value.join("")} newUser={newUser} email={email} domainName={domainName} toUpdate={toUpdate} puzzleId={puzzleId} /> */}

                    </div>
                    <div className="flap"></div>
                </div>
            </div>

        </>
    );
}

export default ImgShuffle;