import { useEffect, useState } from 'react';
import style  from '../style/Dice.module.scss'

 function Dice (props){

//     const [ number, setNumber] =  useState(1);

//     useEffect(()=>{
//         generateNum();
//     }, []);

//     const generateNum = () => {
//      const randomNumber = Math.floor(Math.random()*6)+1;
//      setNumber(randomNumber);

//     };


    return(
        <div>
            <div className={style.diceStyle} >
                <div className={style.diceNumber}></div>
            </div>
        </div>
    )
}

export default Dice