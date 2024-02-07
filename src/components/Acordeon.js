import { useState } from "react"
export default function Acordeon({faqList}){
   
    const [openID, setID] = useState(null);

    const clickHandler = (id) => {
        if (id===openID) setID(null)
        else setID(id)
    }
    return(
        <ul>
        {faqList.map((faqItem,id) => {
           return (
            <li key={id}>
                <button className="accordion" onClick={() => clickHandler(id)}>{faqItem.question}</button>
                <div className={`${id===openID ? "panelActive" : "panel"}`}>
                    {faqItem.answer}
                </div>

            </li>
           )
           
        })}
        
        
    </ul>
    )
}