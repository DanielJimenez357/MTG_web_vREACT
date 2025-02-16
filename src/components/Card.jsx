import "./Card_style.css";

export default function Card({ card , id }) {

    /**
   * MARK: cartToLocalStorage
   * @param {*} chosenCard 
   */
    const cartToLocalStorage = (chosenCard) => {
        let cardsInCart = localStorage.getItem("Cart");

        cardsInCart = cardsInCart ? JSON.parse(cardsInCart) : [];

        const existingCardIndex = cardsInCart.findIndex(
            (cartItem) => cartItem.card.name === chosenCard.name
        );

        if (existingCardIndex !== -1) {
            cardsInCart[existingCardIndex].quantity += 1;
        } else {
            cardsInCart.push({
                card: chosenCard,
                quantity: 1,
            });
        }

        localStorage.setItem("Cart", JSON.stringify(cardsInCart));
    }

    return (
        <>
            <div>
                <img key={id} src={card.image_uris.png}></img>
                <div>
                    <button onClick={() => { cartToLocalStorage(card)}}>+</button>
                    <button>-</button>
                </div>
            </div>
        </>
    )

}