import css from "./Options.module.css"




const Options=({updateFeedback, totalFeedback, setMarks})=>{

    const handleClick=(e)=>{
        updateFeedback(e.target.textContent.toLowerCase())
    }


    return (
        <ul className= {css.buttonList} >
            <li ><button onClick={handleClick} type="button">Good</button></li>
            <li><button onClick={handleClick} type="button">Neutral</button></li>
            <li><button onClick={handleClick} type="button">Bad</button></li>
            {totalFeedback>0&&<li><button type="button" onClick={()=>{setMarks({good: 0,neutral: 0,bad: 0})}}>Reset</button></li>}
        </ul>

    )
}

export default Options