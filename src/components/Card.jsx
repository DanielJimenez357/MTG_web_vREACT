import "./Card_style.css";

export default function Card({ card, id }) {


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


    const quantityInCart = () => {
        const cartString = localStorage.getItem("Cart");
        const cart = cartString ? JSON.parse(cartString) : [];

        // Buscar si la card actual está en el carrito
        const cardInCart = cart.find(
            (cartItem) => cartItem.card.name === card.name
        );

        if (cardInCart) {
            return cardInCart.quantity
        } else {
            return 0
        }
    }

    return (
        <>
            {(() => {
                try {
                    return (
                        <div>
                            <img key={id} src={card.image_uris.png} alt={card.name} />
                            <div>
                                <button onClick={() => { cartToLocalStorage(card) }}>+</button>
                                <span>{quantityInCart()}</span>
                                <button>-</button>
                            </div>
                        </div>
                    )
                } catch (error) {
                    console.log("No hay imagen")
                    return null
                }
            })()}

        </>
    )

}