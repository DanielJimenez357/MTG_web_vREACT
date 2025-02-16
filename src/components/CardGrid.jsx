import Card from "./components/Card";
import { useEffect, useState } from "react";
import GetCards from "../utils/GetCards";
import { useNavigate } from "react-router";
import { useDebounce } from "../hooks/useDeBounce";


export default function CardGrid() {

    const navigate = useNavigate();
    const [card, setCard] = useState("");
    const search = useDebounce(cardToSearch, 1000);

    useEffect(() => {
        try {
            async function fetchCard() {
                const cardData = await GetCards(cardToSearch);
                console.log(cardData)
                setCard([...cardData]);
                navigate("/Buscador/" + search)
            }

            if (!card) {
            }
            fetchCard();
        } catch (error) {
            alert("No existe esa carta");
        }
    }, [search]);

    if (!card) {
        return null;
    }


    return (
        <>
            <div className="placeForCards">

                {
                    card.map((card, i) => {
                        <Card card={card} id={i} />
                    })
                }

            </div>
        </>
    )
}