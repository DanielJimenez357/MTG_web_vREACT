
import { useState } from "react"
import Card from "./Card"

export default function Buscador () {

    const [inputValue, setInputValue] = useState('squirrel')

    return (
        <>
            <div>
                <input 
                type="text" 
                placeholder="cartas a buscar..."
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                ></input>
                <Card
                    cardToSearch = {inputValue}
                />
            </div>
        </>
    )
}