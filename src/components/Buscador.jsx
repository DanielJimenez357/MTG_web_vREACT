import { useState } from "react"
import CardGrid from "./CardGrid"

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
                <CardGrid
                    cardToSearch = {inputValue}
                />
            </div>
        </>
    )
}