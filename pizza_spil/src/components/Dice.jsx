import { useEffect, useState } from 'react';
import style  from '../style/Dice.module.scss'
import 

function Dice (props){

    const [ number, setNumber] =  useState(1);

    useEffect(()=>{
        generateNum();
    }, []);

    const generateNum = () => {
     const randomNumber = Math.floor(Math.random()*6)+1;
     setNumber(randomNumber);

    };


    return(
        <div>
            <div className={style.diceStyle} onClick={generateNum} >
                <div className={style.diceNumber}>{number}</div>
            </div>
        </div>
    )
}

export default Dice