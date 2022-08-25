import React, {useEffect,useState,useRef}from 'react'
import Main from '../Main'
function MakeWheel (segment,color){
    const width = (s) =>{
        return '50px'
    }
    const height = (s) =>{
        return'135px'
    }
    // let degArray = [];
    // let alpha=[];
    let array = [];
    let count=0; 
    // let arr=[];
    array=["z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    for(let i=0;i<segment;i=i+1){
        if(array[i]!==''){
            array[i]=<div key={i} style={{
                width: `${width(segment)}`,
                left : `${height(segment)}`,
                backgroundColor:`${i%2===0?color.purple:color.green}`,
                transform: `rotate(${(360/segment)*(i-1)}deg)`,
            }}className='s1' >
                    <div style={{paddingBottom : '122px',paddingRight:'10px'}}>{array[i]}</div>
            </div>
        }
    }   
        return{
            wheelData : array
        }
    }
export default MakeWheel;

