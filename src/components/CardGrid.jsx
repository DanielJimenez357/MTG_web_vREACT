import { useEffect, useState } from "react";
import GetCards from "../utils/GetCards";
import { useNavigate, useParams } from "react-router";
import { useDebounce } from "../hooks/useDeBounce";
import Card from "./Card";


export default function CardGrid({ cardToSearch }) {

    const navigate = useNavigate();
    const [grid, setCard] = useState("");
    const search = useDebounce(cardToSearch, 1000);
    

    useEffect(() => {
        try {
            async function fetchCard() {
                const cardData = await GetCards(cardToSearch);
                console.log(cardData)
                setCard([...cardData]);
                navigate("/Buscador/" + search)
                
            }

            if (!grid) {
            }
            fetchCard();
        } catch (error) {
            alert("No existe esa carta");
        }
    }, [search]);

    if (!grid) {
        return null;
    }

    let word = useParams();
    word = word.split("/");
    console.log(word[1]);

    return (
        <>
            <div className="placeForCards">

                {
                    grid.map((card, i) => {
                        return <Card card={card} id={i} />
                    })
                }

            </div>
        </>
    )
}