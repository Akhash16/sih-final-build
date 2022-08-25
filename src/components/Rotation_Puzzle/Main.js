import React, {useEffect,useState,useRef}from 'react'
import './style/main.scss'
import MakeWheel from './utils/MakeWheel.js'
import {Button} from '@mui/material'
import Image from './marker.png'



const Main = () => {   
    const wheelRef=useRef()
    const [wheel,setWheel] = useState([])
    const [segment,setSegment] = useState(26)
    const [deg,setDeg] = useState(0)
    const colorObj = {
        purple:'#406c82',
        yellow:'#fde905',
        white:'#d5e8f2',
        warning:' #fca32f',
        green:'#00e403'
    }
    const initializeWheel =()=>{
        return MakeWheel(segment,colorObj)
    }
    let a=14;
 
    useEffect(() =>  {
        const wheelValue=initializeWheel();
        setWheel(wheelValue?.wheelData)
    },[segment])
    let solution=[]
    var count_left=26;
    var count_right=0;
    // let arr=['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    // console.log(ar)
    let arr= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const left = () =>{
        if(wheelRef.current){
            count_left=(count_left-1)%26
            if(count_left<0){
                count_left=count_left+26
            }
            console.log(count_left)
            let randomDeg= a;
            a = (a + 14)%360;
            wheelRef.current.style.transition = 'all 3s'
            wheelRef.current.style.transform=`rotate(${randomDeg}deg)`;
            // console.log(randomDeg)
            // console.log(count)
            console.log(arr[count_left])
        }
    }   
    
    // let arr= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const right = () =>{
        // console.log(arr.reverse())
        if(wheelRef.current){
            count_left=(count_left+1)%26
            console.log(count_left)
            if(count_left===0){
                count_left=count_left+26
            }
            console.log(arr[count_left-1])
            // let count=0
            // count_right=count_+1
            // console.log(arr[count_right-1])
            a=(a-14)%360;
            let randomDeg= a;
            wheelRef.current.style.transition = 'all 3s'
            wheelRef.current.style.transform=`rotate(${randomDeg}deg)`;
            // console.log(randomDeg)
            // console.log(arr[count-1])
            // count=count+1;
            // console.log(MakeWheel.array())
            // console.log(MakeWheel.array[count])
        }
    }   
    
    const lock = () =>{
        if(wheelRef.current){
            solution.push(arr[count_left])
            console.log(solution)
            // console.log(randomDeg)
        }
    }  

    return(
        <div>
        <div className="gamebar">
            <div className="gamebar-container">
                <span className='marker'><img src={Image} alt="arrow" /></span>

                <div className="temp">
                    <div ref={wheelRef} className="wheel">
                        {
                            [...wheel]
                        }
                    </div>

               <circle className="t" />
              </div>
            {/* <span className='marker'><img src="./marker.png" alt="arrow" /></span>
                <div className="temp1">
                    <div ref={wheelRef} className="wheel1">
                        {
                            [...wheel]
                        }
                    </div> */}
                    {/* <div className="mid">
                        <div class="circle">
                    </div>
                </div> */}
            {/* </div> */}
            </div>
        </div>
        <div className='btn1'>


        <Button variant='contained' color="success" onClick={left}>AntiClockwise</Button> </div>
        
        <div className='btn2'><Button variant='contained' className="lock" onClick={lock}>lock</Button></div>
        <div className='btn3'><Button variant='contained' className="right" onClick={right}>Clockwise</Button></div>
        
        {/* <button className="left" onClick={left}>AntiClockwise</button>
        <button className="right" onClick={right}>Clockwise</button>
        <button className="lock" onClick={lock}>lock</button> */}
            {/* <Button variant="contained" color='danger' onClick={lock}>Lock</Button>
            <Button variant="contained" color="success" onClick={right}>Clockwise</Button> */}
    </div>
    )
}
export default Main;