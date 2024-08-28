import s from './Buttons.module.scss'
export const Buttons=()=>{


    return(
        <div className={s.buttonsStyle}>
        <button className={s.lowerButtonStyle}>Lower</button>
        <button className={s.equalButtonStyle}>Equal</button>
        <button className={s.higherButtonStyle}>Higher</button>
        </div>
    )
}